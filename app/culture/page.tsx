import { ButtonLink } from "@/components/common/button-link";
import { getCurrentLocale } from "@/lib/i18n/server-locale";
import { localePrefix } from "@/lib/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { BookOpenText, CalendarHeart, CircleDollarSign, Coffee, Compass, Globe2, Languages, MessageCircleHeart, Music2, Sparkles, TrainFront } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata = buildMetadata({
  title: "Discover China Culture, Cities and Student Life",
  description: "A youth-friendly guide for people who love Chinese culture, language, food, festivals, modern cities, travel, and study opportunities in China.",
  path: "/culture",
  keywords: [
    "Chinese culture",
    "learn Chinese",
    "China travel",
    "Chinese food",
    "Chinese festivals",
    "study in China culture"
  ]
});

type CultureCopy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  cultureTitle: string;
  cultureBody: string;
  cards: { icon: LucideIcon; title: string; body: string; href: string }[];
  journeyTitle: string;
  journeyBody: string;
  journey: string[];
  socialTitle: string;
  socialLines: string[];
  finalTitle: string;
  finalBody: string;
  finalCta: string;
  communityCta: string;
};

const copy: Record<string, CultureCopy> = {
  en: {
    eyebrow: "For everyone who loves China",
    title: "Understand China through culture, language, cities, and real young lives.",
    subtitle: "SilkStudy is not only a university catalog. It is a warm entrance for global young people who are curious about Chinese culture, learning Chinese, Chinese cities, food, technology, festivals, and the possibility of studying here.",
    primaryCta: "Explore Chinese cities",
    secondaryCta: "Join global check-in",
    cultureTitle: "Chinese culture should feel alive, not distant.",
    cultureBody: "A young person may first love China because of a song, a drama, kung fu, tea, calligraphy, hotpot, high-speed rail, a city skyline, a Chinese friend, or one sentence they learned in Mandarin. The website should help that first curiosity become a real connection.",
    cards: [
      { icon: Languages, title: "Chinese language", body: "Make Mandarin feel useful, musical, and connected to friendship, daily life, scholarships, and future work.", href: "/life" },
      { icon: CalendarHeart, title: "Festivals and rituals", body: "Spring Festival, Lantern Festival, Dragon Boat Festival, Mid-Autumn Festival, campus cultural nights, and family traditions.", href: "/community" },
      { icon: Coffee, title: "Food and everyday warmth", body: "Hotpot, noodles, milk tea, night markets, campus canteens, and the small tastes that make a city unforgettable.", href: "/cities" },
      { icon: TrainFront, title: "Modern China", body: "High-speed rail, mobile payment, safe cities, smart logistics, new energy, AI, and the daily texture of fast development.", href: "/provinces" },
      { icon: Music2, title: "Youth culture", body: "Music, short videos, games, street fashion, cafes, university societies, and the way young Chinese people live now.", href: "/community" },
      { icon: CircleDollarSign, title: "Scholarship gateway", body: "Curiosity can become a plan when students learn that scholarships may cover tuition, housing, or living support.", href: "/scholarships" }
    ],
    journeyTitle: "Turn cultural interest into a China pathway.",
    journeyBody: "The best promotion path is gentle: first let people like China, then help them understand cities and culture, then show universities, scholarships, language preparation, and consultation.",
    journey: ["Discover culture and language.", "Pick cities that match personality and budget.", "Compare universities, majors, and scholarships.", "Ask questions, check in, leave comments, and join exchange.", "Build a real plan to study or visit China."],
    socialTitle: "Shareable ideas for global youth",
    socialLines: [
      "I started learning Chinese because I loved the culture. Now I want to see China for myself.",
      "China is not only history. It is high-speed trains, digital life, food streets, universities, and young people building the future.",
      "If you love Chinese culture, SilkStudy can help you turn curiosity into a study plan."
    ],
    finalTitle: "Let culture become the first bridge.",
    finalBody: "When young people understand China with warmth and curiosity, studying in China becomes more than admission. It becomes friendship, language, travel, and a more poetic life.",
    finalCta: "Ask about studying in China",
    communityCta: "Community"
  },
  zh: {
    eyebrow: "给所有喜欢中国的人",
    title: "通过文化、中文、城市和真实青年生活来了解中国。",
    subtitle: "SilkStudy 不只是大学目录，也应该成为全球年轻人了解中国的温暖入口：中文、美食、节日、城市、科技、旅行、青年生活，以及最后真正来到中国学习的可能。",
    primaryCta: "探索中国城市",
    secondaryCta: "加入全球打卡",
    cultureTitle: "中国文化要让人感觉活着，而不是停在展柜里。",
    cultureBody: "一个年轻人可能因为一首歌、一部剧、功夫、茶、书法、火锅、高铁、城市天际线、一个中国朋友，或者学会的一句中文而喜欢中国。网站要把这种最初的好奇，变成真实连接。",
    cards: [
      { icon: Languages, title: "中文语言", body: "让中文不只是考试科目，而是友谊、日常生活、奖学金和未来机会的钥匙。", href: "/life" },
      { icon: CalendarHeart, title: "节日与礼俗", body: "春节、元宵、端午、中秋、校园文化节和中国家庭的温度，都可以成为了解中国的入口。", href: "/community" },
      { icon: Coffee, title: "美食与烟火气", body: "火锅、面食、奶茶、夜市、校园食堂和一座城市让人记住的小味道。", href: "/cities" },
      { icon: TrainFront, title: "现代中国", body: "高铁、移动支付、安全城市、智慧物流、新能源、人工智能和高速发展的日常质感。", href: "/provinces" },
      { icon: Music2, title: "青年文化", body: "音乐、短视频、游戏、街头穿搭、咖啡馆、大学社团，以及今天中国年轻人的真实生活。", href: "/community" },
      { icon: CircleDollarSign, title: "奖学金入口", body: "喜欢中国之后，如果知道奖学金可能覆盖学费、住宿和生活补助，好奇心就会变成行动计划。", href: "/scholarships" }
    ],
    journeyTitle: "把对中国文化的喜欢，变成来中国的路径。",
    journeyBody: "最好的推广路径应该是柔和的：先让人喜欢中国，再理解城市和文化，然后看到大学、奖学金、语言准备和咨询服务。",
    journey: ["先认识文化和中文。", "选择适合性格和预算的城市。", "比较大学、专业和奖学金。", "提问、打卡、留言，加入真实交流。", "形成一个可执行的中国留学或访学计划。"],
    socialTitle: "适合全球年轻人转发的表达",
    socialLines: [
      "我因为喜欢中国文化开始学中文，现在想亲眼去看看中国。",
      "中国不只有历史，也有高铁、数字生活、美食街、大学和正在创造未来的年轻人。",
      "如果你喜欢中国文化，SilkStudy 可以帮你把好奇心变成留学计划。"
    ],
    finalTitle: "让文化成为第一座桥。",
    finalBody: "当年轻人带着温度和好奇理解中国，来中国留学就不只是录取，而是友谊、语言、旅行和一段更有诗意的人生。",
    finalCta: "咨询中国留学",
    communityCta: "社区"
  },
  vi: {
    eyebrow: "Dành cho những ai yêu văn hóa Trung Quốc",
    title: "Hiểu Trung Quốc qua văn hóa, tiếng Trung, thành phố và đời sống trẻ.",
    subtitle: "SilkStudy là cánh cửa ấm áp cho bạn trẻ tò mò về văn hóa Trung Quốc, tiếng Trung, ẩm thực, lễ hội, thành phố hiện đại và cơ hội học tập tại Trung Quốc.",
    primaryCta: "Khám phá thành phố",
    secondaryCta: "Check-in toàn cầu",
    cultureTitle: "Văn hóa Trung Quốc nên sống động và gần gũi.",
    cultureBody: "Một bạn trẻ có thể yêu Trung Quốc từ một bài hát, phim, trà, thư pháp, lẩu, tàu cao tốc, thành phố hiện đại, một người bạn Trung Quốc hoặc một câu tiếng Trung đầu tiên.",
    cards: [
      { icon: Languages, title: "Tiếng Trung", body: "Biến tiếng Trung thành chìa khóa của tình bạn, đời sống, học bổng và tương lai.", href: "/life" },
      { icon: CalendarHeart, title: "Lễ hội", body: "Tết, Trung Thu, Đoan Ngọ, lễ hội trong trường và những truyền thống gia đình.", href: "/community" },
      { icon: Coffee, title: "Ẩm thực", body: "Lẩu, mì, trà sữa, chợ đêm, căng tin và hương vị khiến một thành phố đáng nhớ.", href: "/cities" },
      { icon: TrainFront, title: "Trung Quốc hiện đại", body: "Tàu cao tốc, thanh toán số, thành phố an toàn, năng lượng mới và AI.", href: "/provinces" },
      { icon: Music2, title: "Văn hóa trẻ", body: "Âm nhạc, video ngắn, game, thời trang, cà phê và câu lạc bộ sinh viên.", href: "/community" },
      { icon: CircleDollarSign, title: "Cánh cửa học bổng", body: "Khi biết học bổng có thể hỗ trợ học phí và đời sống, sự tò mò trở thành kế hoạch.", href: "/scholarships" }
    ],
    journeyTitle: "Biến tình yêu văn hóa thành lộ trình đến Trung Quốc.",
    journeyBody: "Trước hết hãy yêu Trung Quốc, sau đó hiểu thành phố, trường, học bổng, tiếng Trung và cách chuẩn bị.",
    journey: ["Khám phá văn hóa và tiếng Trung.", "Chọn thành phố phù hợp.", "So sánh trường, ngành và học bổng.", "Đặt câu hỏi, check-in và giao lưu.", "Lập kế hoạch học tập tại Trung Quốc."],
    socialTitle: "Ý tưởng dễ chia sẻ",
    socialLines: [
      "Mình học tiếng Trung vì yêu văn hóa Trung Quốc. Bây giờ mình muốn tận mắt nhìn thấy Trung Quốc.",
      "Trung Quốc không chỉ là lịch sử, mà còn là tàu cao tốc, đời sống số, đồ ăn, đại học và tương lai.",
      "Nếu bạn yêu văn hóa Trung Quốc, SilkStudy giúp biến tò mò thành kế hoạch du học."
    ],
    finalTitle: "Hãy để văn hóa trở thành cây cầu đầu tiên.",
    finalBody: "Khi bạn trẻ hiểu Trung Quốc bằng sự tò mò và thiện cảm, du học trở thành tình bạn, ngôn ngữ, du lịch và một cuộc đời rộng hơn.",
    finalCta: "Hỏi về du học Trung Quốc",
    communityCta: "Cộng đồng"
  },
  ru: {
    eyebrow: "Для всех, кто любит китайскую культуру",
    title: "Понять Китай через культуру, язык, города и жизнь молодых людей.",
    subtitle: "SilkStudy помогает молодежи узнать китайский язык, еду, праздники, современные города, технологии, путешествия и возможности учебы в Китае.",
    primaryCta: "Открыть города Китая",
    secondaryCta: "Глобальный чек-ин",
    cultureTitle: "Китайская культура должна быть живой и близкой.",
    cultureBody: "Интерес может начаться с песни, дорамы, чая, каллиграфии, хотпота, скоростного поезда, китайского друга или первой фразы на китайском.",
    cards: [
      { icon: Languages, title: "Китайский язык", body: "Язык как ключ к дружбе, повседневной жизни, стипендиям и будущей карьере.", href: "/life" },
      { icon: CalendarHeart, title: "Праздники", body: "Новый год, Фестиваль фонарей, Дуаньу, Праздник середины осени и кампусные события.", href: "/community" },
      { icon: Coffee, title: "Еда и тепло жизни", body: "Хотпот, лапша, чай, ночные рынки, столовые и вкусы, которые запоминаются.", href: "/cities" },
      { icon: TrainFront, title: "Современный Китай", body: "Скоростные поезда, цифровые платежи, безопасные города, новая энергетика и ИИ.", href: "/provinces" },
      { icon: Music2, title: "Молодежная культура", body: "Музыка, короткие видео, игры, мода, кафе и студенческие клубы.", href: "/community" },
      { icon: CircleDollarSign, title: "Путь к стипендиям", body: "Интерес превращается в план, когда студент видит реальные стипендии.", href: "/scholarships" }
    ],
    journeyTitle: "Превратить интерес к культуре в путь в Китай.",
    journeyBody: "Сначала людям нужно полюбить Китай, затем понять города, университеты, стипендии и подготовку.",
    journey: ["Открыть культуру и язык.", "Выбрать подходящие города.", "Сравнить вузы, направления и стипендии.", "Задавать вопросы, отмечаться и общаться.", "Построить реальный план учебы."],
    socialTitle: "Идеи для публикаций",
    socialLines: [
      "Я начал учить китайский из любви к культуре. Теперь хочу увидеть Китай сам.",
      "Китай - это не только история, но и скоростные поезда, цифровая жизнь, еда, университеты и будущее.",
      "Если ты любишь китайскую культуру, SilkStudy поможет превратить интерес в учебный план."
    ],
    finalTitle: "Пусть культура станет первым мостом.",
    finalBody: "Когда молодежь понимает Китай с теплом и любопытством, учеба становится дружбой, языком, путешествием и более поэтичной жизнью.",
    finalCta: "Спросить об учебе в Китае",
    communityCta: "Сообщество"
  },
  tr: {
    eyebrow: "Çin kültürünü seven herkes için",
    title: "Çin'i kültür, dil, şehirler ve genç yaşamı üzerinden anla.",
    subtitle: "SilkStudy; Çin kültürü, Çince, yemek, festivaller, modern şehirler, teknoloji, seyahat ve Çin'de eğitim fırsatları için sıcak bir başlangıç noktasıdır.",
    primaryCta: "Çin şehirlerini keşfet",
    secondaryCta: "Küresel check-in",
    cultureTitle: "Çin kültürü canlı ve yakın hissettirmeli.",
    cultureBody: "Bir genç Çin'i bir şarkı, dizi, çay, kaligrafi, hotpot, hızlı tren, Çinli bir arkadaş veya öğrendiği ilk Çince cümleyle sevebilir.",
    cards: [
      { icon: Languages, title: "Çince", body: "Çinceyi arkadaşlık, günlük yaşam, burs ve gelecek fırsatlarının anahtarı yap.", href: "/life" },
      { icon: CalendarHeart, title: "Festivaller", body: "Bahar Bayramı, Fener Festivali, Dragon Boat, Orta Sonbahar ve kampüs kültür geceleri.", href: "/community" },
      { icon: Coffee, title: "Yemek ve günlük sıcaklık", body: "Hotpot, noodle, milk tea, gece pazarları, kampüs yemekleri ve unutulmaz şehir tatları.", href: "/cities" },
      { icon: TrainFront, title: "Modern Çin", body: "Hızlı tren, dijital ödeme, güvenli şehirler, yeni enerji, yapay zeka ve hızlı gelişim.", href: "/provinces" },
      { icon: Music2, title: "Gençlik kültürü", body: "Müzik, kısa video, oyun, sokak modası, kafeler ve üniversite kulüpleri.", href: "/community" },
      { icon: CircleDollarSign, title: "Burs kapısı", body: "Merak, bursların gerçek olduğunu görünce eğitim planına dönüşebilir.", href: "/scholarships" }
    ],
    journeyTitle: "Kültür ilgisini Çin yoluna dönüştür.",
    journeyBody: "Önce Çin'i sevdir, sonra şehirleri, üniversiteleri, bursları ve hazırlık adımlarını göster.",
    journey: ["Kültür ve dili keşfet.", "Uygun şehirleri seç.", "Üniversite, bölüm ve bursları karşılaştır.", "Soru sor, check-in yap ve paylaş.", "Gerçek bir Çin eğitim planı kur."],
    socialTitle: "Paylaşılabilir fikirler",
    socialLines: [
      "Çin kültürünü sevdiğim için Çince öğrenmeye başladım. Şimdi Çin'i kendim görmek istiyorum.",
      "Çin sadece tarih değil; hızlı tren, dijital yaşam, yemek, üniversiteler ve gelecektir.",
      "Çin kültürünü seviyorsan SilkStudy merakını eğitim planına çevirmene yardım eder."
    ],
    finalTitle: "Kültür ilk köprü olsun.",
    finalBody: "Gençler Çin'i sıcaklık ve merakla anladığında, Çin'de eğitim dostluk, dil, seyahat ve daha şiirsel bir hayata dönüşür.",
    finalCta: "Çin'de eğitim sor",
    communityCta: "Topluluk"
  }
};

function getCopy(locale: string) {
  return copy[locale] ?? copy.en;
}

export default async function CulturePage() {
  const locale = await getCurrentLocale();
  const c = getCopy(locale);
  const prefix = localePrefix(locale);
  const localize = (href: string) => href === "/" ? prefix || "/" : `${prefix}${href}`;

  return (
    <main>
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/student-city-life.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="relative mx-auto grid min-h-[560px] max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
          <div>
            <p className="inline-flex items-center gap-2 border-l-2 border-secondary pl-3 text-sm font-semibold uppercase tracking-wide text-cyan-100">
              <Globe2 size={16} aria-hidden="true" />
              {c.eyebrow}
            </p>
            <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">{c.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100">{c.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={localize("/cities")}>{c.primaryCta}</ButtonLink>
              <ButtonLink href={localize("/global-checkin")} variant="secondary">{c.secondaryCta}</ButtonLink>
            </div>
          </div>
          <aside className="rounded-lg border border-white/15 bg-white/10 p-6 backdrop-blur">
            <Sparkles size={32} className="text-secondary" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-bold">{c.cultureTitle}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-100">{c.cultureBody}</p>
          </aside>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.cards.map(({ icon: Icon, title, body, href }) => (
              <a key={title} href={localize(href)} className="group rounded-lg border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-primary hover:shadow-md">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 text-primary transition group-hover:bg-primary group-hover:text-white">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h2 className="mt-4 text-xl font-bold text-ink">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <Compass size={30} className="text-primary" aria-hidden="true" />
            <h2 className="mt-4 text-4xl font-bold leading-tight text-ink">{c.journeyTitle}</h2>
            <p className="mt-4 leading-7 text-slate-600">{c.journeyBody}</p>
          </div>
          <ol className="grid gap-4">
            {c.journey.map((item, index) => (
              <li key={item} className="flex gap-4 rounded-lg border border-slate-200 bg-white p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary text-sm font-bold text-white">{index + 1}</span>
                <p className="pt-1 text-sm font-semibold leading-6 text-slate-700">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div className="rounded-lg border border-slate-200 p-6">
            <BookOpenText size={28} className="text-primary" aria-hidden="true" />
            <h2 className="mt-4 text-3xl font-bold text-ink">{c.socialTitle}</h2>
            <div className="mt-5 grid gap-3">
              {c.socialLines.map((line) => (
                <p key={line} className="rounded-md bg-blue-50 px-4 py-3 text-sm font-semibold leading-6 text-slate-700">{line}</p>
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-slate-950 p-6 text-white">
            <MessageCircleHeart size={28} className="text-secondary" aria-hidden="true" />
            <h2 className="mt-4 text-3xl font-bold">{c.finalTitle}</h2>
            <p className="mt-4 text-sm leading-6 text-slate-200">{c.finalBody}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={localize("/consultation")} variant="secondary">{c.finalCta}</ButtonLink>
              <ButtonLink href={localize("/community")} variant="ghost">{c.communityCta}</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">SilkStudy</p>
            <h2 className="mt-2 text-3xl font-bold">{c.finalTitle}</h2>
          </div>
          <ButtonLink href={localize("/scholarships")} variant="secondary">{c.finalCta}</ButtonLink>
        </div>
      </section>
    </main>
  );
}
