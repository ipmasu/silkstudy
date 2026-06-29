import { ButtonLink } from "@/components/common/button-link";
import { SectionHeading } from "@/components/common/section-heading";
import { JsonLd } from "@/components/common/json-ld";
import { ChinaSvgMap } from "@/components/map/china-svg-map";
import { SearchPanel } from "@/components/search/search-panel";
import { UniversityCard } from "@/components/universities/university-card";
import { getAllUniversitiesView, getFeaturedUniversitiesView } from "@/lib/content/universities";
import { getCityDestinations } from "@/lib/city-destinations";
import { displayMajor } from "@/lib/i18n/display";
import { buildMetadata, organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { majors, provinces } from "@/lib/site-data";
import { ArrowRight, Award, BookOpen, BriefcaseBusiness, Compass, Cpu, GraduationCap, HandHeart, Landmark, MapPin, Rocket, ShieldCheck, TrainFront, Trees } from "lucide-react";
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

export const metadata: Metadata = buildMetadata({
  title: "Study in China. Live the Story.",
  description: "Find a university, discover a city, and begin a life-changing study and travel journey across China."
});

export default async function HomePage() {
  const t = await getTranslations("homepage");
  const locale = await getLocale();
  const prefix = locale === "en" ? "" : `/${locale}`;
  const localize = (href: string) => href === "/" ? prefix || "/" : `${prefix}${href}`;
  const featuredUniversities = await getFeaturedUniversitiesView();
  const allUniversities = await getAllUniversitiesView();
  const cityDestinations = getCityDestinations(allUniversities);
  const preferredCities = ["beijing", "shanghai", "hangzhou", "chengdu", "dalian", "xiamen"];
  const cityHighlights = preferredCities
    .map((slug) => cityDestinations.find((city) => city.slug === slug))
    .filter((city): city is NonNullable<typeof city> => Boolean(city));
  const isZh = locale === "zh";
  const isVi = locale === "vi";
  const tx = (en: string, zh: string, vi: string) => isZh ? zh : isVi ? vi : en;
  const chinaReasons = [
    {
      Icon: ShieldCheck,
      title: tx("A safe and stable place to study", "安全稳定的学习生活环境", "Môi trường học tập an toàn và ổn định"),
      description: tx("China offers orderly city life, mature public transport, and well-managed campuses, making safety and stability a major reason families consider studying here.", "中国城市公共交通成熟、校园管理完善、日常生活秩序感强，是许多国际学生和家长会优先考虑的安全型留学目的地。", "Các thành phố Trung Quốc có giao thông công cộng phát triển, khuôn viên được quản lý tốt và cuộc sống trật tự, mang lại sự an tâm cho sinh viên và gia đình.")
    },
    {
      Icon: HandHeart,
      title: tx("Warm, welcoming, and foreigner-friendly", "热情友好，不排外", "Thân thiện và hiếu khách"),
      description: tx("Many international students quickly feel welcomed by friendly local communities, helpful campuses, and everyday hospitality across Chinese cities.", "中国人民普遍热情好客，对外国朋友友好而愿意提供帮助。很多学生来到中国后，会很快感受到校园、城市和日常生活中的善意。", "Sinh viên quốc tế thường nhanh chóng cảm nhận được sự thân thiện, hỗ trợ từ nhà trường và lòng hiếu khách trong cuộc sống hàng ngày.")
    },
    {
      Icon: Rocket,
      title: tx("Fast-moving economy and technology", "经济与科技快速发展", "Kinh tế và công nghệ phát triển nhanh"),
      description: tx("AI, new energy, e-commerce, smart manufacturing, and digital payments make China a living classroom for students who want to understand tomorrow's industries.", "从人工智能、新能源、电子商务、智能制造到数字支付，中国正在形成全球年轻人值得亲身观察和参与的产业现场。", "AI, năng lượng mới, thương mại điện tử, sản xuất thông minh và thanh toán số biến Trung Quốc thành lớp học thực tế về các ngành công nghiệp tương lai.")
    },
    {
      Icon: GraduationCap,
      title: tx("Rising academic strength", "不断上升的学术水平", "Năng lực học thuật ngày càng cao"),
      description: tx("Chinese universities continue to expand international programs, research platforms, English-taught degrees, and scholarship pathways across degree levels.", "越来越多中国高校提升国际化项目、科研平台、英文授课和奖学金体系，为本科、硕士、博士和语言学习提供更多选择。", "Các trường đại học Trung Quốc đang mở rộng chương trình quốc tế, nền tảng nghiên cứu, chương trình tiếng Anh và cơ hội học bổng ở mọi bậc học.")
    },
    {
      Icon: Award,
      title: isZh ? "丰富且高额的奖学金机会" : isVi ? "Nhiều cơ hội học bổng giá trị cao" : "Generous scholarship opportunities",
      description: isZh
        ? "中国政府、省市和高校提供多层次奖学金，部分项目可覆盖学费、住宿费并提供生活补助。具体名额、金额和续奖条件需按学校与学年确认。"
        : isVi
          ? "Chính phủ, địa phương và các trường đại học Trung Quốc cung cấp nhiều loại học bổng; một số chương trình chi trả học phí, chỗ ở và trợ cấp sinh hoạt. Điều kiện và mức hỗ trợ cần được xác nhận theo từng trường và năm học."
          : "Government, provincial, city, and university scholarships can cover tuition, accommodation, and living allowances. Availability, amounts, and renewal rules vary by school and academic year."
    },
    {
      Icon: Landmark,
      title: tx("Ancient civilization meets modern cities", "古老文明与现代城市并存", "Nền văn minh cổ đại bên cạnh thành phố hiện đại"),
      description: tx("The Great Wall, Dunhuang, West Lake, Guilin, and Zhangjiajie sit alongside Shanghai, Shenzhen, Hangzhou, and Chengdu as one combined study-travel experience.", "长城、故宫、敦煌、西湖、桂林、张家界与上海、深圳、杭州、成都共同构成一种很少国家能同时提供的学习和旅行体验。", "Vạn Lý Trường Thành, Đôn Hoàng, Tây Hồ, Quế Lâm và Trương Gia Giới cùng các thành phố hiện đại tạo nên trải nghiệm học tập và du lịch độc đáo.")
    },
    {
      Icon: Compass,
      title: tx("A vast country to keep exploring", "辽阔疆域，值得长期探索", "Một đất nước rộng lớn để khám phá"),
      description: tx("China's provinces, cities, cultures, climates, and landscapes are deeply varied, so studying here can also become a multi-year discovery route.", "中国的省份、城市、民族文化、气候和地貌差异极大，留学不只是上课，也可以是持续几年的中国探索路线。", "Các tỉnh, thành phố, văn hóa, khí hậu và cảnh quan rất đa dạng, vì vậy du học cũng có thể trở thành hành trình khám phá kéo dài nhiều năm.")
    },
    {
      Icon: TrainFront,
      title: tx("A world-leading high-speed rail network", "全球领先的动车高铁网络", "Mạng lưới đường sắt cao tốc hàng đầu thế giới"),
      description: tx("China's high-speed rail network is fast, comfortable, and extensive, connecting university cities with historic sites, mountains, coastlines, and weekend trips.", "中国动车和高铁网络发达、准点、舒适，把大学城市、历史名城、自然景区连接起来，让留学期间的周末旅行体验非常好。", "Mạng lưới đường sắt cao tốc nhanh, thoải mái và rộng khắp kết nối các thành phố đại học với di tích lịch sử, núi, biển và những chuyến đi cuối tuần.")
    },
    {
      Icon: BookOpen,
      title: tx("Long-term value from language to career", "从语言到职业的长期价值", "Giá trị lâu dài từ ngôn ngữ đến nghề nghiệp"),
      description: tx("Chinese language ability, China experience, cross-cultural fluency, and direct industry exposure can become a durable advantage after graduation.", "中文能力、中国经验、跨文化理解和真实产业观察，会成为学生未来申请研究生、就业或创业时的独特竞争力。", "Khả năng tiếng Trung, kinh nghiệm tại Trung Quốc, hiểu biết liên văn hóa và tiếp xúc thực tế với ngành nghề tạo lợi thế lâu dài sau tốt nghiệp.")
    }
  ];
  const lifestylePaths = [
    {
      Icon: Cpu,
      title: tx("Build with the future", "走进未来产业", "Bước vào các ngành công nghiệp tương lai"),
      description: tx("Meet AI, new energy, robotics, and the digital economy in Beijing, Shenzhen, Hangzhou, and Shanghai.", "在北京、深圳、杭州和上海接触人工智能、新能源、机器人与数字经济。", "Tiếp cận AI, năng lượng mới, robot và kinh tế số tại Bắc Kinh, Thâm Quyến, Hàng Châu và Thượng Hải."),
      href: "/majors/artificial-intelligence",
      image: "/images/ai-lab-campus.png",
      accent: tx("Technology and innovation", "科技与创新", "Công nghệ và đổi mới")
    },
    {
      Icon: Landmark,
      title: tx("Live inside a civilization", "生活在文明之中", "Sống giữa một nền văn minh"),
      description: tx("Make history part of daily life, from Xi'an's city wall and Beijing hutongs to Nanjing's museums.", "从西安城墙、北京胡同到南京博物馆，让历史成为日常生活的一部分。", "Biến lịch sử thành một phần cuộc sống hàng ngày, từ thành cổ Tây An, ngõ nhỏ Bắc Kinh đến bảo tàng Nam Kinh."),
      href: "/cities/xian",
      image: "/images/student-city-life.png",
      accent: tx("History and culture", "历史与文化", "Lịch sử và văn hóa")
    },
    {
      Icon: Trees,
      title: tx("Explore beyond the classroom", "周末去看更大的世界", "Khám phá bên ngoài lớp học"),
      description: tx("Take high-speed rail to mountains, coastlines, ancient towns, and radically different ways of life.", "乘高铁去看山川、海岸、古镇和不同地区的生活方式。", "Đi tàu cao tốc đến núi, bờ biển, thị trấn cổ và khám phá nhiều phong cách sống khác nhau."),
      href: "#map",
      image: "/images/campus-hero.png",
      accent: tx("Travel and nature", "旅行与自然", "Du lịch và thiên nhiên")
    },
    {
      Icon: BriefcaseBusiness,
      title: tx("Connect with Asian careers", "连接亚洲职业机会", "Kết nối cơ hội nghề nghiệp tại châu Á"),
      description: tx("Build cross-cultural experience across trade, engineering, healthcare, education, and international business.", "在贸易、工程、医疗、教育和国际商务中积累跨文化经验。", "Tích lũy kinh nghiệm liên văn hóa trong thương mại, kỹ thuật, y tế, giáo dục và kinh doanh quốc tế."),
      href: "/universities",
      image: "/images/ai-lab-campus.png",
      accent: tx("Internships and careers", "实习与职业", "Thực tập và nghề nghiệp")
    }
  ];
  const railRoutes = [
    { from: isZh ? "北京" : "Beijing", to: isZh ? "天津" : "Tianjin", time: isZh ? "约 30 分钟" : "about 30 min", note: isZh ? "海河、意式街区与周末城市漫步" : "River walks, architecture, and an easy weekend reset" },
    { from: isZh ? "上海" : "Shanghai", to: isZh ? "杭州" : "Hangzhou", time: isZh ? "约 45 分钟" : "about 45 min", note: isZh ? "西湖、茶山与数字经济城市" : "West Lake, tea hills, and a digital-economy city" },
    { from: isZh ? "成都" : "Chengdu", to: isZh ? "重庆" : "Chongqing", time: isZh ? "约 1 小时" : "about 1 hour", note: isZh ? "美食、山城夜景与两种城市性格" : "Food, hillside nights, and two distinct city personalities" }
  ];

  return (
    <main>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
      <section className="relative isolate min-h-[calc(100vh-72px)] overflow-hidden bg-slate-950 text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/campus-hero.png" alt="International students sharing campus life in China" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-slate-950/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/65 to-transparent" />
        <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl flex-col justify-end px-4 pb-10 pt-24 sm:px-6 lg:px-8 lg:pb-14">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 border-l-2 border-secondary pl-3 text-sm font-semibold uppercase tracking-wide text-cyan-100">
              <MapPin size={16} aria-hidden="true" />
              {isZh ? "你的中国故事，从这里开始" : isVi ? "Câu chuyện Trung Quốc của bạn bắt đầu tại đây" : "Your China story starts here"}
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              {isZh ? "来中国学习，也来经历一个更大的世界。" : isVi ? "Học tập tại Trung Quốc. Trải nghiệm một thế giới rộng lớn hơn." : "Study in China. Live the Story."}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">
              {isZh
                ? "找到适合你的大学，也找到一座愿意生活的城市。认识真实的中国，在这里学习、旅行、交朋友，并参与正在发生的未来。"
                : isVi
                  ? "Tìm trường đại học phù hợp và một thành phố bạn muốn gọi là nhà. Học tập, du lịch, kết bạn và trải nghiệm tương lai đang hình thành tại Trung Quốc."
                  : "Find the right university and a city you want to call home. Study, travel, make friends, and experience the future taking shape across China."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#map">{isZh ? "探索中国地图" : isVi ? "Khám phá Trung Quốc" : "Explore China"}</ButtonLink>
              <ButtonLink href={localize("/universities")} variant="secondary">{t("browseUniversities")}</ButtonLink>
              <ButtonLink href={localize("/consultation")} variant="ghost">{isZh ? "规划我的旅程" : isVi ? "Lập kế hoạch hành trình" : "Plan My Journey"}</ButtonLink>
            </div>
            <div className="mt-8 max-w-2xl">
              <SearchPanel locale={locale} />
            </div>
          </div>
          <div className="mt-10 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/15 bg-white/15 backdrop-blur md:grid-cols-4">
            {[
              [allUniversities.length, tx("universities", "国际学生高校目录", "trường đại học")],
              [provinces.length, tx("destinations", "中国目的地", "điểm đến")],
              [tx("High-speed rail", "高铁连接", "Đường sắt cao tốc"), tx("weekend discovery", "周末探索中国", "khám phá cuối tuần")],
              [tx("Free", "免费", "Miễn phí"), tx("study and travel help", "留学与旅行咨询", "tư vấn học tập và du lịch")]
            ].map(([value, label]) => (
              <div key={String(label)} className="bg-slate-950/55 px-4 py-4">
                <p className="text-xl font-bold text-white">{value}</p>
                <p className="mt-1 text-xs font-medium text-slate-200">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={tx("Choose your China", "选择你的中国生活", "Chọn cuộc sống của bạn tại Trung Quốc")}
            title={tx("What kind of life do you want to build here?", "你想在中国度过怎样的青春？", "Bạn muốn xây dựng cuộc sống như thế nào tại đây?")}
            description={tx("Your major matters. So do the city you wake up in, the people you meet, and everything that happens beyond the classroom.", "专业很重要，但真正改变人的，往往是你每天生活的城市、遇见的人，以及那些课堂之外的经历。", "Ngành học rất quan trọng, nhưng thành phố bạn sống, những người bạn gặp và trải nghiệm ngoài lớp học cũng có thể thay đổi cuộc đời.")}
            dark
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {lifestylePaths.map(({ Icon, title, description, href, image, accent }) => (
              <a key={title} href={localize(href)} className="group relative min-h-72 overflow-hidden rounded-lg border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/5" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-secondary"><Icon size={16} />{accent}</p>
                  <h3 className="mt-3 text-2xl font-bold">{title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-200">{description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white">{tx("Start exploring", "开始探索", "Bắt đầu khám phá")}<ArrowRight size={16} /></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                {isZh ? "为什么来中国留学" : isVi ? "Vì sao nên du học Trung Quốc" : "Why study in China"}
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-ink">
                {isZh ? "把大学、城市、科技与旅行放在同一条成长路线里。" : "Put universities, cities, technology, and travel into one growth route."}
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                {isZh
                  ? "中国正在成为更值得全球年轻人认真考虑的留学目的地：安全稳定的生活环境、热情友好的人民、快速发展的经济与科技、不断上升的大学学术水平、全球领先的动车高铁网络，以及五千年文明和辽阔疆域带来的探索感，会共同塑造一段不只是拿文凭的经历。SilkStudy 也会为每一位想来中国留学或旅行的朋友提供免费的咨询和帮助。"
                  : "China is becoming a serious study destination for global students: safe daily life, warm and welcoming people, fast economic and technological development, rising university strength, a world-leading high-speed rail network, and a vast civilization-rich country to explore make the experience larger than a degree. SilkStudy also offers free consultation and practical help for friends who want to study or travel in China."}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={localize("/consultation")}>{isZh ? "免费咨询与帮助" : "Free Consultation and Help"}</ButtonLink>
                <ButtonLink href="#map" variant="secondary">{isZh ? "从地图探索" : "Explore the Map"}</ButtonLink>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {chinaReasons.map(({ Icon, title, description }) => (
                <div key={title} className="rounded-lg border border-slate-200 bg-surface p-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 text-primary">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              {tx("Stories and life support", "故事与生活支持", "Câu chuyện và hỗ trợ đời sống")}
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-ink">
              {tx("A warmer way to prepare for China.", "用更有温度的方式，准备来到中国。", "Một cách ấm áp hơn để chuẩn bị đến Trung Quốc.")}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {tx(
                "Read real student stories, find senior-student support, join a language partner plan, prepare emotionally before arrival, and learn how to live well in China.",
                "阅读真实留学生故事，寻找学长学姐支持，加入语伴计划，做好行前心理准备，并学习如何在中国从“能生活”到“活得好”。",
                "Đọc câu chuyện thật của sinh viên, tìm anh chị hỗ trợ, tham gia bạn học ngôn ngữ, chuẩn bị tinh thần trước khi đến và học cách sống tốt tại Trung Quốc."
              )}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href={localize("/life")}>{tx("Open Stories & Life", "打开故事与生活", "Mở câu chuyện & đời sống")}</ButtonLink>
              <ButtonLink href={localize("/community")} variant="secondary">{tx("Find People", "寻找伙伴", "Tìm bạn đồng hành")}</ButtonLink>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [HandHeart, tx("My China Story", "我的中国故事", "Câu chuyện Trung Quốc của tôi"), tx("Video, photo essays, podcasts, and honest first-month memories.", "视频、图文、播客和真实的第一个月记忆。", "Video, bài ảnh, podcast và ký ức tháng đầu chân thật.")],
              [GraduationCap, tx("Senior Q&A", "学长学姐问答", "Hỏi đáp với anh chị"), tx("Ask someone from the same school, city, or major.", "向同校、同城、同专业的人提前提问。", "Hỏi người cùng trường, thành phố hoặc ngành.")],
              [BookOpen, tx("Pre-arrival care pack", "行前暖心包", "Gói chuẩn bị ấm áp"), tx("Homesickness, culture shock, first-week routines, and emotional support.", "想家、文化冲击、第一周节奏和情感支持。", "Nhớ nhà, sốc văn hóa, thói quen tuần đầu và hỗ trợ tinh thần.")],
              [Landmark, tx("Culture calendar", "中国文化日历", "Lịch văn hóa"), tx("Festivals, traditions, arts, and campus cultural events.", "节日、习俗、传统艺术和高校文化节。", "Lễ hội, truyền thống, nghệ thuật và sự kiện trong trường.")]
            ].map(([Icon, title, body]) => {
              const Visual = Icon as typeof HandHeart;
              return (
                <a key={String(title)} href={localize("/life")} className="rounded-lg border border-slate-200 bg-white p-5 transition hover:border-primary hover:shadow-sm">
                  <Visual className="text-primary" size={23} aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-ink">{String(title)}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{String(body)}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section id="map" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={t("mapEyebrow")}
            title={t("mapTitle")}
            description={t("mapDescription")}
          />
          <div className="mt-8">
            <ChinaSvgMap locale={locale} />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">{isZh ? "高铁周末" : "Weekends by rail"}</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight text-ink">
                {isZh ? "在中国留学，一张车票就能打开另一座城市。" : "One train ticket can open a completely different China."}
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                {isZh ? "发达的高铁网络让大学生活不被校园边界限制。周五下课后出发，周日晚回到宿舍，你可以持续认识这个辽阔而多样的国家。" : "China's high-speed rail network makes the country part of your campus. Leave after class on Friday, return Sunday night, and keep discovering a vast and varied place."}
              </p>
            </div>
            <div className="grid gap-4">
              {railRoutes.map((route) => (
                <div key={`${route.from}-${route.to}`} className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 sm:grid-cols-[1fr_auto_1fr_1.4fr] sm:items-center">
                  <p className="text-lg font-bold text-ink">{route.from}</p>
                  <span className="flex items-center gap-2 text-sm font-bold text-primary">
                    <TrainFront size={18} aria-hidden="true" />
                    {route.time}
                    <ArrowRight size={16} aria-hidden="true" />
                  </span>
                  <p className="text-lg font-bold text-ink">{route.to}</p>
                  <p className="text-sm leading-6 text-slate-600">{route.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={locale === "zh" ? "城市、生活与旅行" : "Cities, life, and travel"}
            title={locale === "zh" ? "让学生真正爱上中国的留学城市" : "Study cities that make China unforgettable"}
            description={locale === "zh" ? "选校不只是排名。生活成本、城市气质、周末旅行和实习机会，都会决定学生是否真正愿意来到中国。" : "School choice is not only rankings. Cost, city energy, weekend travel, and internship access shape whether students truly want to come to China."}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {cityHighlights.map((city) => (
              <a
                key={city.slug}
                href={localize(`/cities/${city.slug}`)}
                className="group overflow-hidden rounded-lg border border-slate-200 bg-white transition hover:border-primary hover:shadow-sm"
              >
                <div className="relative h-44">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={city.image}
                    alt={locale === "zh" ? city.zhImageAlt : city.imageAlt}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                      {locale === "zh" ? city.zhProvinceName : city.provinceName}
                    </p>
                    <h3 className="mt-1 text-2xl font-bold">{locale === "zh" ? city.zhName : city.name}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2">
                    {(locale === "zh" ? city.zhLifestyleTags : city.lifestyleTags).slice(0, 3).map((tag) => (
                      <span key={tag} className="rounded bg-blue-50 px-2 py-1 text-xs font-bold text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {locale === "zh" ? city.zhSummary : city.summary}
                  </p>
                  <div className="mt-4 grid gap-2 text-sm text-slate-600">
                    <p><span className="font-bold text-ink">{locale === "zh" ? "生活成本：" : "Cost: "}</span>{locale === "zh" ? city.zhLivingCost : city.livingCost}</p>
                    <p><span className="font-bold text-ink">{locale === "zh" ? "实习方向：" : "Internships: "}</span>{locale === "zh" ? city.zhInternships : city.internships}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="universities" className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={t("popularSchoolsEyebrow")}
            title={t("popularSchoolsTitle")}
            description={t("popularSchoolsDescription")}
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredUniversities.slice(0, 5).map((university) => (
              <UniversityCard key={university.slug} university={university} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={t("popularMajorsEyebrow")} title={t("popularMajorsTitle")} />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {majors.map((major) => (
              <a key={major} href={localize(`/majors/${major.toLowerCase().replaceAll(" ", "-")}`)} className="rounded-lg border border-slate-200 p-5 text-lg font-semibold text-ink transition hover:border-primary hover:text-primary">
                {displayMajor(major, locale)}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <h2 className="text-3xl font-bold">{t("ctaTitle")}</h2>
            <p className="mt-3 max-w-2xl text-blue-100">{t("ctaDescription")}</p>
          </div>
          <ButtonLink href={localize("/consultation")} variant="secondary">{t("applyNow")}</ButtonLink>
        </div>
      </section>
    </main>
  );
}
