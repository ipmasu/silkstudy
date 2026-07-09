export type CityVisualGalleryItem = {
  title: string;
  zhTitle: string;
  image: string;
  alt: string;
  zhAlt: string;
  note: string;
  zhNote: string;
  sourceUrl?: string;
};

type CityVisualFallback = {
  name: string;
  zhName: string;
  provinceName: string;
  zhProvinceName: string;
  image: string;
  imageAlt: string;
  zhImageAlt: string;
  tourism: string;
  zhTourism: string;
};

type WikipediaMediaItem = {
  title?: string;
  type?: string;
  showInGallery?: boolean;
  caption?: {
    text?: string;
  };
  srcset?: Array<{
    src?: string;
    scale?: string;
  }>;
};

const mediaListEndpoint = (title: string) => `https://en.wikipedia.org/api/rest_v1/page/media-list/${encodeURIComponent(title)}`;
const commonsPage = (title: string) => `https://commons.wikimedia.org/wiki/${title.replaceAll(" ", "_")}`;
const commonsImage = (file: string) => `https://commons.wikimedia.org/wiki/Special:FilePath/${file}?width=1200`;

const unsuitableImagePattern = /(?:^|[_\s-])(map|locator|location|administrative|division|flag|emblem|logo|seal|icon|diagram|chart|metro|linemap|route|population|blank)(?:[_\s.-]|$)/i;

const fallbackRealImages = [
  {
    file: "WestLake_-_Hangzhou.jpg",
    title: "China lake and city life",
    zhTitle: "中国湖畔城市生活",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:WestLake_-_Hangzhou.jpg"
  },
  {
    file: "Canton-Tower-001.jpg",
    title: "Modern city skyline",
    zhTitle: "现代城市天际线",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Canton-Tower-001.jpg"
  },
  {
    file: "The_Humble_Administrator%27s_Garden%2C_Suzhou%2C_China_%2837825378061%29.jpg",
    title: "Classical garden route",
    zhTitle: "古典园林线路",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Humble_Administrator%27s_Garden,_Suzhou,_China_(37825378061).jpg"
  },
  {
    file: "Young_Chengdu_panda.jpg",
    title: "China nature and wildlife memory",
    zhTitle: "中国自然与动物记忆",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Young_Chengdu_panda.jpg"
  },
  {
    file: "Xi%27an_City_Wall_%2848696360238%29.jpg",
    title: "Historic city wall walk",
    zhTitle: "古城墙步行体验",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Xi%27an_City_Wall_(48696360238).jpg"
  },
  {
    file: "Qingdao_-_Drone_view_city_with_skyline_%28Unsplash%29.jpg",
    title: "Coastal China city view",
    zhTitle: "中国海滨城市视角",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Qingdao_-_Drone_view_city_with_skyline_(Unsplash).jpg"
  }
];

function normalizeImageUrl(src: string) {
  return src.startsWith("//") ? `https:${src}` : src;
}

function cleanTitle(title: string) {
  return title
    .replace(/^File:/, "")
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s*\([^)]*\)/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function isSuitableMediaItem(item: WikipediaMediaItem) {
  if (item.type !== "image" || item.showInGallery === false || !item.title || !item.srcset?.length) return false;
  const title = item.title.toLowerCase();
  if (title.endsWith(".svg") || title.endsWith(".gif") || title.endsWith(".tif") || title.endsWith(".tiff")) return false;
  return !unsuitableImagePattern.test(title);
}

function toGalleryItem(item: WikipediaMediaItem, fallback: CityVisualFallback, index: number): CityVisualGalleryItem | null {
  const src = item.srcset?.find((entry) => entry.scale === "2x")?.src ?? item.srcset?.[0]?.src;
  if (!item.title || !src) return null;
  const caption = item.caption?.text?.trim();
  const title = caption || cleanTitle(item.title);

  return {
    title,
    zhTitle: `${fallback.zhName}真实图像 ${index + 1}`,
    image: normalizeImageUrl(src),
    alt: `${fallback.name}: ${title}`,
    zhAlt: `${fallback.zhName}真实城市图片 ${index + 1}`,
    note: caption || `A real Wikimedia image used to show ${fallback.name}'s city texture, travel routes, and student-life context.`,
    zhNote: `来自 Wikimedia 的真实图片，用来呈现${fallback.zhName}的城市气质、旅行线路和学生生活背景。`,
    sourceUrl: commonsPage(item.title)
  };
}

async function fetchWikipediaGallery(fallback: CityVisualFallback) {
  try {
    const response = await fetch(mediaListEndpoint(fallback.name), {
      headers: {
        "User-Agent": "SilkStudy/1.0 (https://silkstudy.com)"
      },
      next: {
        revalidate: 60 * 60 * 24 * 7
      }
    });

    if (!response.ok) return [];
    const data = await response.json().catch(() => null) as { items?: WikipediaMediaItem[] } | null;
    const seen = new Set<string>();

    return (data?.items ?? [])
      .filter(isSuitableMediaItem)
      .filter((item) => {
        if (!item.title || seen.has(item.title)) return false;
        seen.add(item.title);
        return true;
      })
      .map((item, index) => toGalleryItem(item, fallback, index))
      .filter((item): item is CityVisualGalleryItem => Boolean(item))
      .slice(0, 6);
  } catch {
    return [];
  }
}

function fallbackGallery(fallback: CityVisualFallback, startIndex = 0) {
  return fallbackRealImages.map((item, index) => ({
    title: `${fallback.name} study-life reference: ${item.title}`,
    zhTitle: `${fallback.zhName}图文印象 ${startIndex + index + 1}`,
    image: commonsImage(item.file),
    alt: `${fallback.name} study-life visual reference: ${item.title}`,
    zhAlt: `${fallback.zhName}图文印象参考图 ${startIndex + index + 1}`,
    note: `A real Wikimedia image used as a China study-life visual reference while more verified ${fallback.name} images are added.`,
    zhNote: `真实 Wikimedia 图片，用作中国留学生活图文参考；后续可继续补充更多${fallback.zhName}本地图片。`,
    sourceUrl: item.sourceUrl
  }));
}

export async function getCityVisualGallery(slug: string, fallback?: CityVisualFallback) {
  if (!fallback) return [];

  const wikipediaItems = await fetchWikipediaGallery(fallback);
  const supplements = fallbackGallery(fallback, wikipediaItems.length);
  const seenImages = new Set<string>();

  return [...wikipediaItems, ...supplements]
    .filter((item) => {
      if (seenImages.has(item.image)) return false;
      seenImages.add(item.image);
      return true;
    })
    .slice(0, 6);
}
