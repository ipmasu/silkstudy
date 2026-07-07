import fs from "node:fs";

const geoPath = "data/world-countries-110m.geojson";
const countriesPath = "lib/global-checkin-countries.ts";
const outputPath = "lib/world-map-paths.ts";
const width = 1000;
const height = 520;

const geojson = JSON.parse(fs.readFileSync(geoPath, "utf8"));
const countriesText = fs.readFileSync(countriesPath, "utf8");
const countryRows = [...countriesText.matchAll(/\["([A-Z]{2})",\s*"([^"]+)"/g)].map((match) => ({
  code: match[1],
  name: match[2]
}));
const knownCodes = new Set(countryRows.map((country) => country.code));

const round = (value) => Math.round(value * 10) / 10;
const project = ([lon, lat]) => [round(((lon + 180) / 360) * width), round(((90 - lat) / 180) * height)];

function ringPath(ring) {
  if (!ring.length) return "";
  const [first, ...rest] = ring;
  const [x, y] = project(first);
  return `M${x} ${y}${rest.map((point) => {
    const [px, py] = project(point);
    return `L${px} ${py}`;
  }).join("")}Z`;
}

function featurePath(feature) {
  const geometry = feature.geometry;
  if (geometry.type === "Polygon") return geometry.coordinates.map(ringPath).join("");
  if (geometry.type === "MultiPolygon") return geometry.coordinates.flatMap((polygon) => polygon.map(ringPath)).join("");
  return "";
}

function collectPoints(feature) {
  const geometry = feature.geometry;
  if (geometry.type === "Polygon") return geometry.coordinates.flat();
  if (geometry.type === "MultiPolygon") return geometry.coordinates.flat(2);
  return [];
}

function centroid(feature) {
  const points = collectPoints(feature);
  if (!points.length) return { x: 0, y: 0 };
  const projected = points.map(project);
  const x = projected.reduce((sum, point) => sum + point[0], 0) / projected.length;
  const y = projected.reduce((sum, point) => sum + point[1], 0) / projected.length;
  return { x: round(x), y: round(y) };
}

const paths = geojson.features
  .map((feature) => ({
    code: feature.properties.iso_a2,
    name: feature.properties.name_long || feature.properties.name,
    path: featurePath(feature),
    centroid: centroid(feature)
  }))
  .filter((feature) => knownCodes.has(feature.code) && feature.path)
  .sort((a, b) => a.code.localeCompare(b.code));

const pathCodes = new Set(paths.map((path) => path.code));
const missingCodes = countryRows
  .filter((country) => !pathCodes.has(country.code))
  .map((country) => country.code)
  .sort();

const sourceNote = [
  "// Generated from Natural Earth 1:110m country boundaries.",
  "// Rebuild with: node scripts/build_world_map_paths.mjs",
  "// Countries too small for 110m polygons are rendered as markers by the UI."
].join("\n");

const content = `${sourceNote}
export type WorldMapPath = {
  code: string;
  name: string;
  path: string;
  centroid: { x: number; y: number };
};

export const worldMapViewBox = "0 0 ${width} ${height}";

export const worldMapPaths: WorldMapPath[] = ${JSON.stringify(paths, null, 2)};

export const worldMapMarkerOnlyCountryCodes = ${JSON.stringify(missingCodes, null, 2)};
`;

fs.writeFileSync(outputPath, content, "utf8");
console.log(JSON.stringify({ paths: paths.length, markerOnly: missingCodes.length, outputPath }, null, 2));
