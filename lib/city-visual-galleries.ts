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

type CommonsSearchPage = {
  title?: string;
  imageinfo?: Array<{
    thumburl?: string;
    url?: string;
    descriptionurl?: string;
    mime?: string;
    extmetadata?: Record<string, { value?: string }>;
  }>;
};

const mediaListEndpoint = (title: string) => `https://en.wikipedia.org/api/rest_v1/page/media-list/${encodeURIComponent(title)}`;
const commonsSearchEndpoint = (query: string) => {
  const params = new URLSearchParams({
    action: "query",
    format: "json",
    origin: "*",
    generator: "search",
    gsrnamespace: "6",
    gsrlimit: "18",
    gsrsearch: query,
    prop: "imageinfo",
    iiprop: "url|mime|extmetadata",
    iiurlwidth: "1200"
  });

  return `https://commons.wikimedia.org/w/api.php?${params.toString()}`;
};
const commonsPage = (title: string) => `https://commons.wikimedia.org/wiki/${title.replaceAll(" ", "_")}`;
const commonsImage = (file: string) => `https://commons.wikimedia.org/wiki/Special:FilePath/${file}?width=1200`;

const unsuitableImagePattern = /\b(map|locator|location|administrative|division|flag|emblem|logo|seal|icon|diagram|chart|linemap|route|population|blank|montage|collage|floods?|disasters?|storms?|hospitals?|maternity|clinics?|temples?|monaster(?:y|ies)|cemeter(?:y|ies)|graves?|tombs?|mausoleums?|ruins?|construction|demolition|industrial|factory|school|court|government|bureau|police|prison|detention|radio and television station|television station building)\b|\bin china\b|\bin [a-z\s]+ province\b/i;
const archivalImagePattern = /\b(postcard|archive|archival|old|historic photograph|historical photo|vintage|black and white|black-white|blackwhite|monochrome|grayscale|greyscale|b&w|bw photo|hsinking|manchukuo|manchu air|tianxin pavilion|tianxin ge)\b/i;
const yearPattern = /\b(18\d{2}|19\d{2}|20\d{2})\b/g;

const cityMediaAliases: Record<string, string[]> = {
  changsha: ["wuyi square", "taiping street", "juzizhou", "orange isle", "yuelu mountain", "hunan university", "changsha ifs"],
  guangzhou: ["canton"],
  hohhot: ["huhehaote"],
  xian: ["xian", "xi an"],
  urumqi: ["urumchi", "ueruemqi"]
};

const cityModernSearchTerms: Record<string, string[]> = {
  changsha: [
    "Changsha IFS",
    "Wuyi Square Changsha",
    "Taiping Street Changsha",
    "Juzizhou Changsha",
    "Orange Isle Changsha",
    "Yuelu Mountain Changsha",
    "Hunan University Changsha"
  ]
};

const fallbackRealImages = [
  {
    file: "WestLake_-_Hangzhou.jpg",
    title: "Lakefront city life",
    zhTitle: "湖畔城市生活",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:WestLake_-_Hangzhou.jpg"
  },
  {
    file: "Canton-Tower-001.jpg",
    title: "Modern skyline",
    zhTitle: "现代城市天际线",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Canton-Tower-001.jpg"
  },
  {
    file: "The_Humble_Administrator%27s_Garden%2C_Suzhou%2C_China_%2837825378061%29.jpg",
    title: "Classical garden",
    zhTitle: "古典园林",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Humble_Administrator%27s_Garden,_Suzhou,_China_(37825378061).jpg"
  },
  {
    file: "Young_Chengdu_panda.jpg",
    title: "Nature and wildlife",
    zhTitle: "自然与动物记忆",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Young_Chengdu_panda.jpg"
  },
  {
    file: "Xi%27an_City_Wall_%2848696360238%29.jpg",
    title: "Historic city wall",
    zhTitle: "古城墙步行体验",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Xi%27an_City_Wall_(48696360238).jpg"
  },
  {
    file: "Qingdao_-_Drone_view_city_with_skyline_%28Unsplash%29.jpg",
    title: "Coastal city view",
    zhTitle: "海滨城市视角",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Qingdao_-_Drone_view_city_with_skyline_(Unsplash).jpg"
  }
];

type ImageMood = "skyline" | "arrival" | "campus" | "nature" | "street" | "heritage" | "food" | "daily";

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

function noteTitle(item: WikipediaMediaItem) {
  return item.caption?.text?.trim() || (item.title ? cleanTitle(item.title) : "city view");
}

function shortTitle(value: string, cityName: string) {
  return value
    .replace(new RegExp(`\\b${cityName}\\b`, "gi"), "")
    .replace(/\s+/g, " ")
    .replace(/^[:：,\s-]+|[:：,\s-]+$/g, "")
    .slice(0, 72)
    .trim() || `${cityName} city view`;
}

function mediaText(value: string) {
  return value.toLowerCase().replace(/[_-]+/g, " ");
}

function hasPre2000Year(text: string) {
  const years = Array.from(text.matchAll(yearPattern), (match) => Number(match[0]));
  return years.some((year) => year < 2000);
}

function isModernVisual(text: string) {
  const normalized = mediaText(text);
  return !archivalImagePattern.test(normalized) && !hasPre2000Year(normalized);
}

function isSuitableScene(text: string) {
  return !unsuitableImagePattern.test(mediaText(text));
}

function isPhotoFile(title: string) {
  const normalized = title.toLowerCase();
  return /\.(jpe?g|webp)$/i.test(normalized);
}

function metadataText(metadata?: Record<string, { value?: string }>) {
  if (!metadata) return "";
  return [
    metadata.DateTimeOriginal?.value,
    metadata.DateTime?.value,
    metadata.ObjectName?.value,
    metadata.ImageDescription?.value
  ]
    .filter(Boolean)
    .join(" ");
}

function imageMood(title: string): ImageMood {
  const value = mediaText(title);
  if (/\b(skyline|tower|cbd|downtown|night|aerial|drone|skyscraper)\b/.test(value)) return "skyline";
  if (/\b(station|railway|airport|terminal|train)\b/.test(value)) return "arrival";
  if (/\b(university|campus|college|library)\b/.test(value)) return "campus";
  if (/\b(lake|river|park|garden|mountain|forest|wetland|coast|beach|bay|panda)\b/.test(value)) return "nature";
  if (/\b(street|road|avenue|square|plaza|market|pedestrian|walk|shopping)\b/.test(value)) return "street";
  if (/\b(temple|museum|pagoda|wall|gate|palace|monument|heritage|historic|ancient|mosque)\b/.test(value)) return "heritage";
  if (/\b(food|restaurant|noodle|tea|snack|cuisine|market)\b/.test(value)) return "food";
  return "daily";
}

function zhGalleryTitle(city: string, title: string, index: number) {
  const labels: Record<ImageMood, string[]> = {
    skyline: ["现代天际线", "城市生长", "灯火与楼群"],
    arrival: ["抵达城市", "车站与远方", "出发的入口"],
    campus: ["校园日常", "读书的地方", "青春坐标"],
    nature: ["山水绿意", "周末去处", "自然呼吸"],
    street: ["街区生活", "城市步调", "人间烟火"],
    heritage: ["历史现场", "文化记忆", "古今之间"],
    food: ["城市味道", "餐桌记忆", "烟火滋味"],
    daily: ["真实一角", "生活切面", "城市表情"]
  };
  const options = labels[imageMood(title)];
  return `${city} · ${options[index % options.length]}`;
}

function cityNote(city: string, title: string, index: number) {
  const mood = imageMood(title);
  const notes: Record<ImageMood, string[]> = {
    skyline: [
      `${title} shows ${city} in motion: new buildings, open horizons, and the visible confidence of a city still growing.`,
      `In this view, ${city} feels contemporary and ambitious, the kind of place where study, internships, and weekend walks can belong to the same rhythm.`
    ],
    arrival: [
      `${title} is not just infrastructure. It is the first threshold of ${city}, where a student's map begins to turn into a real journey.`,
      `Stations and airports tell a quiet truth about ${city}: it is connected, reachable, and ready to carry young people toward new plans.`
    ],
    campus: [
      `${title} brings the idea of studying in ${city} down to earth: libraries, paths, classrooms, and ordinary days with room to grow.`,
      `A campus scene makes ${city} feel less abstract, because the city is no longer only a destination but a place to read, meet people, and become someone new.`
    ],
    nature: [
      `${title} gives ${city} a softer register, with water, trees, or open air balancing the pace of study and urban life.`,
      `This side of ${city} matters for students too: after classes, a city also needs places to breathe, wander, and reset.`
    ],
    street: [
      `${title} catches ${city} at street level, where the real personality of a place usually appears first.`,
      `The everyday movement in ${title} makes ${city} easier to imagine: errands, conversations, meals, and the small discoveries between classes.`
    ],
    heritage: [
      `${title} lets ${city}'s history stay present without turning it into a museum piece; the past becomes part of today's route through the city.`,
      `For international students, this kind of place makes ${city} memorable: culture is not distant here, it can be walked through.`
    ],
    food: [
      `${title} reminds students that a city is learned through taste as much as through classrooms.`,
      `Food is often the fastest doorway into ${city}: it turns unfamiliar streets into places with smell, warmth, and memory.`
    ],
    daily: [
      `${title} gives ${city} a human scale, the kind of detail that helps a student imagine not only arriving, but living here.`,
      `This image keeps ${city} concrete: light, buildings, movement, and the ordinary texture that slowly becomes a student's second home.`
    ]
  };

  return notes[mood][index % notes[mood].length];
}

function zhCityNote(city: string, title: string, index: number) {
  const mood = imageMood(title);
  const notes: Record<ImageMood, string[]> = {
    skyline: [
      `这类画面最能说明${city}不是停在旧照片里的名字。楼群、天光和城市轮廓一起向前，学生来到这里，感受到的是正在发生的中国。`,
      `${title}里的${city}很有当代感：道路打开，建筑生长，年轻人可以把学习、实习和周末探索放进同一座城市。`
    ],
    arrival: [
      `车站和机场不只是交通节点，它们像是${city}递给远方学生的第一只手。一个人拖着行李抵达，新的生活就从这里开始有了方向。`,
      `${title}让${city}显得很可抵达。对留学生来说，城市的连接能力本身就是安全感，也是走向更大中国的起点。`
    ],
    campus: [
      `${title}把“来${city}读书”变得具体：不是一句招生文字，而是清晨的路、图书馆的灯、课后同行的人。`,
      `校园画面有一种安静的力量。它提醒学生，${city}不只是目的地，也会慢慢变成写论文、交朋友、重新认识自己的地方。`
    ],
    nature: [
      `${title}给${city}留出柔软的一面。水面、树影或山色会把学习的紧张感放慢，让周末也有可以呼吸的去处。`,
      `一座适合读书的城市，也要有让人恢复能量的角落。${title}展示的正是${city}这种松弛而真实的生活底色。`
    ],
    street: [
      `${title}里的${city}贴近地面，也贴近生活。街道、广场和人流会告诉学生：这里不是遥远的符号，而是每天都能走进去的日常。`,
      `城市的性格常常藏在街区里。看见${title}，就能想象在${city}买一杯热饮、等一班车、和新朋友慢慢熟悉这座城。`
    ],
    heritage: [
      `${title}让${city}的历史留在今天的路线上。它不是被封存的背景，而是学生可以亲自走过、停留、理解的文化现场。`,
      `对国际学生来说，${city}最迷人的地方之一，是过去和现在并不分开。${title}让这种时间的层次变得清楚。`
    ],
    food: [
      `认识${city}，有时候从一口味道开始比从一张地图开始更快。${title}让城市有了香气、温度和可以分享的记忆。`,
      `${title}把${city}的烟火气带出来了。留学生活不会只有课堂，也会有夜市、餐桌和那些让人想念的本地味道。`
    ],
    daily: [
      `${title}让${city}有了具体的表情。真正影响留学体验的，往往正是这些光线、街景、公共空间和慢慢熟悉起来的人间细节。`,
      `这不是一张为了“好看”而存在的图，它更像${city}生活的一小段证词：年轻人可以在这里学习，也可以在这里把日子过出形状。`
    ]
  };

  return notes[mood][index % notes[mood].length];
}

function isSuitableMediaItem(item: WikipediaMediaItem) {
  if (item.type !== "image" || item.showInGallery === false || !item.title || !item.srcset?.length) return false;
  const title = item.title.toLowerCase();
  const searchableText = `${item.title} ${item.caption?.text ?? ""}`;
  if (!isPhotoFile(title) || title.endsWith(".svg") || title.endsWith(".gif") || title.endsWith(".tif") || title.endsWith(".tiff")) return false;
  return isSuitableScene(searchableText) && isModernVisual(searchableText);
}

function matchesCity(text: string, fallback: CityVisualFallback, slug: string) {
  const normalized = text.toLowerCase().replace(/['’]/g, "").replace(/[_-]+/g, " ");
  const cityName = fallback.name.toLowerCase().replace(/['’]/g, "").replace(/[_-]+/g, " ");
  const zhName = fallback.zhName.toLowerCase();
  const aliases = cityMediaAliases[slug] ?? [];

  return normalized.includes(cityName) || normalized.includes(zhName) || aliases.some((alias) => normalized.includes(alias));
}

function isLocalMediaItem(item: WikipediaMediaItem, fallback: CityVisualFallback, slug: string) {
  return matchesCity(`${item.title ?? ""} ${item.caption?.text ?? ""}`, fallback, slug);
}

function isSuitableCommonsPage(page: CommonsSearchPage, fallback: CityVisualFallback, slug: string) {
  if (!page.title || !page.imageinfo?.[0]?.thumburl) return false;
  const title = page.title.toLowerCase();
  const imageInfo = page.imageinfo[0];
  const searchableText = `${page.title} ${imageInfo.descriptionurl ?? ""} ${metadataText(imageInfo.extmetadata)}`;
  const mime = imageInfo.mime ?? "";
  if (!mime.startsWith("image/")) return false;
  if (!isPhotoFile(title) || title.endsWith(".svg") || title.endsWith(".gif") || title.endsWith(".tif") || title.endsWith(".tiff")) return false;
  return isSuitableScene(searchableText) && isModernVisual(searchableText) && matchesCity(page.title, fallback, slug);
}

function toGalleryItem(item: WikipediaMediaItem, fallback: CityVisualFallback, index: number): CityVisualGalleryItem | null {
  const src = item.srcset?.find((entry) => entry.scale === "2x")?.src ?? item.srcset?.[0]?.src;
  if (!item.title || !src) return null;

  const title = noteTitle(item);
  const displayTitle = shortTitle(title, fallback.name);

  return {
    title: displayTitle,
    zhTitle: zhGalleryTitle(fallback.zhName, displayTitle, index),
    image: normalizeImageUrl(src),
    alt: `${fallback.name}: ${displayTitle}`,
    zhAlt: `${fallback.zhName}城市图像 ${index + 1}`,
    note: cityNote(fallback.name, displayTitle, index),
    zhNote: zhCityNote(fallback.zhName, displayTitle, index),
    sourceUrl: commonsPage(item.title)
  };
}

function commonsPageToGalleryItem(page: CommonsSearchPage, fallback: CityVisualFallback, index: number): CityVisualGalleryItem | null {
  const imageInfo = page.imageinfo?.[0];
  if (!page.title || !imageInfo?.thumburl) return null;
  const title = shortTitle(cleanTitle(page.title), fallback.name);

  return {
    title,
    zhTitle: zhGalleryTitle(fallback.zhName, title, index),
    image: imageInfo.thumburl || imageInfo.url || commonsImage(page.title.replace(/^File:/, "")),
    alt: `${fallback.name}: ${title}`,
    zhAlt: `${fallback.zhName}城市图像 ${index + 1}`,
    note: cityNote(fallback.name, title, index),
    zhNote: zhCityNote(fallback.zhName, title, index),
    sourceUrl: imageInfo.descriptionurl || commonsPage(page.title)
  };
}

async function fetchWikipediaGallery(slug: string, fallback: CityVisualFallback) {
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
      .filter((item) => isLocalMediaItem(item, fallback, slug))
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

async function fetchCommonsSearchGallery(slug: string, fallback: CityVisualFallback, startIndex = 0) {
  const queries = [
    ...(cityModernSearchTerms[slug] ?? []),
    `${fallback.name} skyline China`,
    `${fallback.name} night skyline`,
    `${fallback.name} CBD China`,
    `${fallback.name} downtown China`,
    `${fallback.name} shopping street`,
    `${fallback.name} pedestrian street`,
    `${fallback.name} university China`,
    `${fallback.name} campus China`,
    `${fallback.name} railway station`,
    `${fallback.name} metro station`,
    `${fallback.name} park China`,
    `${fallback.name} street China`,
    `${fallback.name} China city photo`,
    `${fallback.name} 2024`,
    `${fallback.name} 2023`,
    `${fallback.name} 2022`,
    `${fallback.name} landmark`
  ];
  const seen = new Set<string>();
  const items: CityVisualGalleryItem[] = [];

  for (const query of queries) {
    try {
      const response = await fetch(commonsSearchEndpoint(query), {
        headers: {
          "User-Agent": "SilkStudy/1.0 (https://silkstudy.com)"
        },
        next: {
          revalidate: 60 * 60 * 24 * 14
        }
      });

      if (!response.ok) continue;
      const data = await response.json().catch(() => null) as { query?: { pages?: Record<string, CommonsSearchPage> } } | null;
      const pages = Object.values(data?.query?.pages ?? {});
      let queryAdded = 0;

      for (const page of pages) {
        if (!isSuitableCommonsPage(page, fallback, slug) || !page.title || seen.has(page.title)) continue;
        const item = commonsPageToGalleryItem(page, fallback, startIndex + items.length);
        if (!item) continue;
        seen.add(page.title);
        items.push(item);
        queryAdded += 1;
        if (items.length >= 6) return items;
        if (queryAdded >= 2) break;
      }
    } catch {
      continue;
    }
  }

  return items;
}

function fallbackGallery(fallback: CityVisualFallback, startIndex = 0) {
  return fallbackRealImages.map((item, index) => {
    const sequence = startIndex + index;

    return {
      title: `${fallback.name}: ${item.title}`,
      zhTitle: zhGalleryTitle(fallback.zhName, item.title, sequence),
      image: commonsImage(item.file),
      alt: `${fallback.name}: ${item.title}`,
      zhAlt: `${fallback.zhName}城市图像 ${sequence + 1}`,
      note: cityNote(fallback.name, item.title, sequence),
      zhNote: zhCityNote(fallback.zhName, item.zhTitle, sequence),
      sourceUrl: item.sourceUrl
    };
  });
}

export async function getCityVisualGallery(slug: string, fallback?: CityVisualFallback) {
  if (!fallback) return [];

  const commonsItems = await fetchCommonsSearchGallery(slug, fallback);
  const wikipediaItems = commonsItems.length >= 6 ? [] : await fetchWikipediaGallery(slug, fallback);
  const supplements = fallbackGallery(fallback, commonsItems.length + wikipediaItems.length);
  const seenImages = new Set<string>();

  return [...commonsItems, ...wikipediaItems, ...supplements]
    .filter((item) => {
      if (seenImages.has(item.image)) return false;
      seenImages.add(item.image);
      return true;
    })
    .slice(0, 6);
}
