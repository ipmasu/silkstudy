import {
  CalendarDays,
  CheckCircle2,
  HeartHandshake,
  Languages,
  MessageCircleHeart,
  Mic2,
  Plane,
  Podcast,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrainFront,
  Users,
  Video
} from "lucide-react";
import { getLocale } from "next-intl/server";
import { ButtonLink } from "@/components/common/button-link";
import { SectionHeading } from "@/components/common/section-heading";
import { localeCopy } from "@/lib/i18n/copy";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Stories and Life in China",
  description: "Real student stories, peer support, pre-arrival care, culture calendar, and practical China life guides for international students.",
  path: "/life"
});

export default async function LifePage() {
  const locale = await getLocale();
  const prefix = locale === "en" ? "" : `/${locale}`;
  const tx = (en: string, zh: string, vi: string) => localeCopy(locale, en, zh, vi);
  const localize = (href: string) => href === "/" ? prefix || "/" : `${prefix}${href}`;

  const storyFormats = [
    {
      Icon: Video,
      format: tx("Video story", "视频故事", "Câu chuyện video"),
      title: tx("From nervous arrival to calling Chengdu home", "从初到成都的忐忑，到把这里叫作家", "Từ lo lắng khi đến Thành Đô đến cảm giác như ở nhà"),
      student: tx("Amina, Morocco · Medicine", "Amina，摩洛哥 · 医学", "Amina, Morocco · Y khoa"),
      body: tx(
        "She talks about her first hospital rotation, learning to order food in Chinese, and the roommate who helped her survive the first homesick week.",
        "她分享第一次临床见习、学会用中文点餐，以及室友如何陪她度过最想家的第一周。",
        "Bạn ấy kể về kỳ thực tập bệnh viện đầu tiên, học gọi món bằng tiếng Trung và người bạn cùng phòng đã giúp vượt qua tuần nhớ nhà đầu tiên."
      ),
      image: "/images/student-city-life.png"
    },
    {
      Icon: Mic2,
      format: tx("Photo essay", "图文故事", "Bài viết hình ảnh"),
      title: tx("A Vietnamese engineering student’s high-speed rail weekends", "一位越南工科生的高铁周末", "Cuối tuần bằng tàu cao tốc của một sinh viên kỹ thuật Việt Nam"),
      student: tx("Minh, Vietnam · Mechanical Engineering", "Minh，越南 · 机械工程", "Minh, Việt Nam · Cơ khí"),
      body: tx(
        "A simple photo diary about campus labs, night markets, Hangzhou, Nanjing, and the feeling of seeing China become smaller by train.",
        "一组关于实验室、夜市、杭州、南京，以及坐高铁让中国变得更近的照片日记。",
        "Một nhật ký ảnh về phòng thí nghiệm, chợ đêm, Hàng Châu, Nam Kinh và cảm giác Trung Quốc trở nên gần hơn nhờ tàu cao tốc."
      ),
      image: "/images/campus-hero.png"
    },
    {
      Icon: Podcast,
      format: tx("Podcast", "播客", "Podcast"),
      title: tx("What I wish someone told me before coming to China", "来中国前，我希望有人提前告诉我的事", "Những điều mình ước được nghe trước khi đến Trung Quốc"),
      student: tx("Carlos, Mexico · Business", "Carlos，墨西哥 · 商科", "Carlos, Mexico · Kinh doanh"),
      body: tx(
        "A calm conversation about culture shock, making Chinese friends, using WeChat Pay, and not being ashamed of asking for help.",
        "一次关于文化冲击、交中国朋友、使用微信支付，以及不要羞于求助的温柔对话。",
        "Một cuộc trò chuyện nhẹ nhàng về sốc văn hóa, kết bạn Trung Quốc, dùng WeChat Pay và không ngại xin giúp đỡ."
      ),
      image: "/images/ai-lab-campus.png"
    }
  ];

  const supportCards = [
    {
      Icon: Users,
      title: tx("Senior student Q&A", "学长学姐一对一问答", "Hỏi đáp 1-1 với anh chị khóa trên"),
      body: tx(
        "Match future students with peers from the same school, city, or major. Ask about dorms, classes, teachers, food, exams, and what the first month really feels like.",
        "把准新生和同校、同城、同专业的在校生连接起来，提前了解宿舍、课堂、老师、饮食、考试和第一个月的真实感受。",
        "Kết nối tân sinh viên với sinh viên cùng trường, thành phố hoặc ngành để hỏi về ký túc xá, lớp học, thầy cô, đồ ăn, thi cử và tháng đầu tiên."
      )
    },
    {
      Icon: Languages,
      title: tx("Language partner plan", "语伴计划", "Chương trình bạn học ngôn ngữ"),
      body: tx(
        "Help newcomers find Chinese-speaking partners and local students who want English, Vietnamese, Arabic, Russian, Spanish, or other language exchange.",
        "帮助新生提前找到中文语伴，也帮助中国学生找到英语、越南语、阿拉伯语、俄语、西语等语言交流伙伴。",
        "Giúp sinh viên mới tìm bạn luyện tiếng Trung và giúp sinh viên Trung Quốc trao đổi tiếng Anh, tiếng Việt, tiếng Ả Rập, tiếng Nga, tiếng Tây Ban Nha..."
      )
    },
    {
      Icon: ShieldCheck,
      title: tx("Safe connection rules", "安全连接规则", "Quy tắc kết nối an toàn"),
      body: tx(
        "Use public first meetings, moderated posts, no pressure to share private contact, and clear reporting tools for uncomfortable interactions.",
        "建议首次见面选择公共场所，帖子先审核，不强迫公开私人联系方式，并提供不适互动举报通道。",
        "Gặp lần đầu ở nơi công cộng, bài đăng được kiểm duyệt, không ép chia sẻ liên hệ riêng và có kênh báo cáo khi thấy không thoải mái."
      )
    }
  ];

  const warmPack = [
    tx("It is normal to miss home. It does not mean you made the wrong decision.", "想家是正常的，这不代表你做错了选择。", "Nhớ nhà là bình thường. Điều đó không có nghĩa là bạn đã chọn sai."),
    tx("Culture shock is temporary. Small routines make a new city feel familiar.", "文化冲击是暂时的，稳定的小习惯会让陌生城市慢慢变熟。", "Sốc văn hóa chỉ là tạm thời. Những thói quen nhỏ giúp thành phố mới trở nên quen thuộc."),
    tx("Ask for help early: international offices, classmates, teachers, and SilkStudy can all be part of your support circle.", "尽早求助：国际处、同学、老师和 SilkStudy 都可以成为你的支持圈。", "Hãy xin giúp đỡ sớm: phòng quốc tế, bạn học, giáo viên và SilkStudy đều có thể là vòng hỗ trợ của bạn."),
    tx("You do not need to understand everything in the first week. First learn how to eat, sleep, pay, move around, and contact someone safe.", "第一周不需要懂所有事，先学会吃饭、睡好、付款、出行和联系可靠的人。", "Bạn không cần hiểu mọi thứ trong tuần đầu. Trước hết hãy biết ăn uống, ngủ, thanh toán, đi lại và liên hệ người đáng tin.")
  ];

  const cultureCalendar = [
    [tx("Spring Festival", "春节", "Tết Nguyên đán"), tx("Family reunion, red envelopes, fireworks memories, and campus holiday arrangements.", "团圆、红包、烟火记忆和高校假期安排。", "Đoàn viên, lì xì, ký ức pháo hoa và lịch nghỉ của trường.")],
    [tx("Lantern Festival", "元宵节", "Tết Nguyên tiêu"), tx("Lanterns, sweet rice balls, and night walks in old city areas.", "灯会、汤圆和老城夜游。", "Đèn lồng, bánh trôi và đi dạo đêm trong phố cổ.")],
    [tx("Dragon Boat Festival", "端午节", "Tết Đoan Ngọ"), tx("Zongzi, dragon boat races, and stories about Qu Yuan.", "粽子、龙舟赛和屈原故事。", "Bánh ú, đua thuyền rồng và câu chuyện Khuất Nguyên.")],
    [tx("Mid-Autumn Festival", "中秋节", "Tết Trung Thu"), tx("Mooncakes, family calls, campus gatherings, and a gentle homesick night.", "月饼、和家人视频、校园聚会，也可能是一个温柔想家的夜晚。", "Bánh trung thu, gọi video về nhà, gặp gỡ trong trường và một đêm nhớ nhà dịu dàng.")],
    [tx("University culture festivals", "高校文化节", "Lễ hội văn hóa trong trường"), tx("International food fairs, traditional arts, music nights, and student society events.", "国际美食节、传统艺术、音乐夜和学生社团活动。", "Ngày hội ẩm thực quốc tế, nghệ thuật truyền thống, đêm nhạc và câu lạc bộ sinh viên.")]
  ];

  const guideSections = [
    {
      Icon: Plane,
      title: tx("Pre-arrival and entry", "行前准备与入境", "Chuẩn bị trước khi nhập cảnh"),
      items: [
        tx("Passport, admission notice, JW form, visa, insurance, physical exam, diploma, transcripts, and emergency contacts.", "护照、录取通知书、JW 表、签证、保险、体检表、毕业证、成绩单和紧急联系人。", "Hộ chiếu, giấy báo nhập học, mẫu JW, visa, bảo hiểm, khám sức khỏe, bằng cấp, bảng điểm và liên hệ khẩn cấp."),
        tx("Understand X1 and X2 visa differences, and plan the residence permit process after arrival.", "了解 X1/X2 签证区别，并提前规划抵达后的居留许可流程。", "Hiểu khác biệt visa X1/X2 và chuẩn bị quy trình xin giấy phép cư trú sau khi đến."),
        tx("Within 30 days after arrival, complete school registration, temporary residence registration, medical check, and residence permit steps where required.", "抵达后 30 天内按要求完成学校报到、住宿登记、体检复核和居留许可办理。", "Trong 30 ngày sau khi đến, hoàn tất đăng ký trường, đăng ký tạm trú, kiểm tra sức khỏe và giấy phép cư trú nếu cần.")
      ]
    },
    {
      Icon: HeartHandshake,
      title: tx("Housing", "住宿指南", "Chỗ ở"),
      items: [
        tx("On-campus dorms are easier for new students: closer, safer, and better for first friendships.", "校内宿舍更适合新生：距离近、安全感强，也更容易交到第一批朋友。", "Ký túc xá trong trường phù hợp với tân sinh viên: gần, an toàn và dễ kết bạn đầu tiên."),
        tx("Off-campus housing can offer more freedom but requires contracts, deposits, neighborhood checks, and police registration.", "校外租房更自由，但要注意合同、押金、社区环境和住宿登记。", "Thuê ngoài tự do hơn nhưng cần chú ý hợp đồng, đặt cọc, khu vực và đăng ký tạm trú."),
        tx("Compare city living costs before choosing: Beijing and Shanghai differ greatly from inland university cities.", "选城市前比较生活成本：北京、上海和内陆大学城差异很大。", "So sánh chi phí sống trước khi chọn thành phố: Bắc Kinh/Thượng Hải khác nhiều so với thành phố nội địa.")
      ]
    },
    {
      Icon: TrainFront,
      title: tx("Transport", "交通出行", "Giao thông"),
      items: [
        tx("Learn metro, buses, shared bikes, and ride-hailing apps such as Didi for daily movement.", "学会使用地铁、公交、共享单车和滴滴等网约车工具。", "Học dùng tàu điện, xe buýt, xe đạp chia sẻ và ứng dụng gọi xe như Didi."),
        tx("High-speed rail is essential for weekend travel, city comparison, interviews, and seeing China beyond campus.", "高铁是周末旅行、比较城市、参加面试和走出校园看中国的重要方式。", "Tàu cao tốc rất quan trọng cho du lịch cuối tuần, so sánh thành phố, phỏng vấn và khám phá ngoài trường."),
        tx("Keep passport information ready for train and flight booking.", "预订高铁和飞机时要准备好护照信息。", "Luôn chuẩn bị thông tin hộ chiếu khi đặt tàu và máy bay.")
      ]
    },
    {
      Icon: Smartphone,
      title: tx("Apps and digital life", "必备 App 与数字生活", "Ứng dụng và đời sống số"),
      items: [
        tx("Set up WeChat and Alipay for payment, messaging, campus notices, mini programs, and daily services.", "尽快设置微信和支付宝，用于支付、聊天、校园通知、小程序和生活服务。", "Cài WeChat và Alipay để thanh toán, nhắn tin, nhận thông báo trường, dùng mini app và dịch vụ hằng ngày."),
        tx("Meituan or Ele.me for food delivery, Amap for navigation, Taobao and JD for shopping.", "美团/饿了么点外卖，高德地图导航，淘宝/京东网购。", "Meituan/Ele.me để gọi đồ ăn, Amap để định vị, Taobao/JD để mua sắm."),
        tx("Get a Chinese SIM card soon after arrival; it makes banking, apps, deliveries, and campus systems easier.", "抵达后尽快办理中国手机卡，会让银行卡、App、快递和校园系统更顺畅。", "Nên làm SIM Trung Quốc sớm; ngân hàng, ứng dụng, giao hàng và hệ thống trường sẽ dễ dùng hơn.")
      ]
    },
    {
      Icon: CheckCircle2,
      title: tx("Medical care and insurance", "医疗与保险", "Y tế và bảo hiểm"),
      items: [
        tx("Most international students must buy required medical insurance according to university and national rules.", "多数来华留学生需按学校和国家规定购买指定医疗保险。", "Đa số sinh viên quốc tế cần mua bảo hiểm y tế theo quy định của trường và nhà nước."),
        tx("Learn the campus clinic process first, then nearby hospitals and emergency departments.", "先了解校医院流程，再熟悉附近医院和急诊入口。", "Trước hết tìm hiểu phòng y tế trường, sau đó là bệnh viện gần trường và khoa cấp cứu."),
        tx("Keep allergy, medicine, blood type, and emergency contact information in both English and Chinese if possible.", "尽量准备英文和中文的过敏、用药、血型和紧急联系人信息。", "Nên chuẩn bị thông tin dị ứng, thuốc, nhóm máu và liên hệ khẩn cấp bằng tiếng Anh và tiếng Trung.")
      ]
    },
    {
      Icon: ShieldCheck,
      title: tx("Law, safety, and emergency", "法律法规与安全", "Pháp luật, an toàn và khẩn cấp"),
      items: [
        tx("Respect visa, residence permit, work, internship, and accommodation registration rules.", "遵守签证、居留许可、工作实习和住宿登记规则。", "Tuân thủ quy định visa, cư trú, làm thêm/thực tập và đăng ký chỗ ở."),
        tx("Emergency numbers: police 110, fire 119, ambulance 120. Save your university international office contact too.", "紧急电话：报警 110，火警 119，急救 120。也请保存学校国际处联系方式。", "Số khẩn cấp: cảnh sát 110, cứu hỏa 119, cấp cứu 120. Hãy lưu cả số phòng quốc tế của trường."),
        tx("For meetups, choose public places, tell a friend, and avoid sharing passport, bank, or verification codes.", "线下见面选择公共场所，告知朋友行程，不要随意分享护照、银行卡或验证码。", "Khi gặp mặt, chọn nơi công cộng, báo cho bạn bè và không chia sẻ hộ chiếu, ngân hàng hoặc mã xác minh.")
      ]
    }
  ];

  return (
    <main>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/student-city-life.png" alt="" loading="eager" decoding="async" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/45" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
              {tx("Stories, care, and real life", "故事、陪伴与真实生活", "Câu chuyện, đồng hành và đời sống thật")}
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight">
              {tx("Before students love a university, they need to feel they will not be alone.", "学生爱上一所大学之前，先要相信自己不会孤单。", "Trước khi yêu một trường đại học, sinh viên cần tin rằng mình sẽ không cô đơn.")}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              {tx(
                "This is the warm side of SilkStudy: real China stories, senior-student support, language partners, pre-arrival care, culture calendar, and practical guides that help students live well, not just survive.",
                "这是 SilkStudy 更有温度的一面：真实的中国故事、学长学姐支持、语伴计划、行前暖心包、文化日历和实用生活指南。我们希望学生不只是“能活”，而是能在中国慢慢活得好。",
                "Đây là phần ấm áp của SilkStudy: câu chuyện thật về Trung Quốc, hỗ trợ từ anh chị khóa trên, bạn học ngôn ngữ, gói chuẩn bị tinh thần, lịch văn hóa và hướng dẫn sống thực tế."
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={localize("/community")}>{tx("Join Community", "进入交流社区", "Tham gia cộng đồng")}</ButtonLink>
              <ButtonLink href={localize("/consultation")} variant="secondary">{tx("Ask for Help", "获得帮助", "Nhận hỗ trợ")}</ButtonLink>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/10 p-6 backdrop-blur">
            <MessageCircleHeart className="text-secondary" size={34} aria-hidden="true" />
            <p className="mt-5 text-2xl font-bold">
              {tx("A student should arrive with a plan and a person to ask.", "一个学生出发时，既要有计划，也要有人可以问。", "Một sinh viên nên đến với kế hoạch và một người có thể hỏi.")}
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-200">
              {tx(
                "Our product direction is simple: turn anonymous research into human connection.",
                "我们的产品方向很简单：把匿名的信息查询，变成有人回应的连接。",
                "Định hướng rất đơn giản: biến việc tìm thông tin thành sự kết nối có người trả lời."
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={tx("My China Story", "我的中国故事", "Câu chuyện Trung Quốc của tôi")}
            title={tx("From nervous first days to the moment China feels close.", "从初到中国的忐忑，到慢慢爱上这里的点滴。", "Từ những ngày đầu lo lắng đến lúc Trung Quốc trở nên gần gũi.")}
            description={tx(
              "Stories can be video, photo essays, audio diaries, or short interviews. The goal is not perfection; it is honesty.",
              "故事可以是视频、图文、音频日记或短访谈。目标不是完美，而是真实。",
              "Câu chuyện có thể là video, bài ảnh, nhật ký âm thanh hoặc phỏng vấn ngắn. Điều quan trọng là chân thật."
            )}
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {storyFormats.map(({ Icon, format, title, student, body, image }) => (
              <article key={title} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                <div className="relative h-48">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={image} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-md bg-slate-950/75 px-3 py-2 text-xs font-bold text-white backdrop-blur">
                    <Icon size={15} aria-hidden="true" />
                    {format}
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-primary">{student}</p>
                  <h3 className="mt-2 text-xl font-bold text-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow={tx("Peer support", "学长学姐与语伴", "Hỗ trợ từ bạn bè")}
              title={tx("Connect newcomers with someone who has already lived the first month.", "让新生提前联系到已经走过第一个月的人。", "Kết nối tân sinh viên với người đã trải qua tháng đầu tiên.")}
              description={tx(
                "This channel can later become a verified mentor directory. For MVP, it connects through the moderated community and consultation flow.",
                "这个通道后续可以升级成认证学长学姐目录。MVP 阶段先通过审核社区和咨询流程连接。",
                "Sau này có thể nâng cấp thành danh sách mentor xác minh. Giai đoạn MVP kết nối qua cộng đồng kiểm duyệt và tư vấn."
              )}
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={localize("/community")}>{tx("Find a Mentor", "寻找学长学姐", "Tìm anh chị hỗ trợ")}</ButtonLink>
              <ButtonLink href={localize("/community")} variant="secondary">{tx("Find a Language Partner", "寻找语伴", "Tìm bạn học ngôn ngữ")}</ButtonLink>
            </div>
          </div>
          <div className="grid gap-4">
            {supportCards.map(({ Icon, title, body }) => (
              <article key={title} className="rounded-lg border border-slate-200 bg-white p-5">
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-blue-50 text-primary">
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-bold text-ink">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={tx("Pre-arrival care pack", "行前暖心包", "Gói chuẩn bị ấm áp")}
            title={tx("Practical checklists are necessary. Emotional preparation is necessary too.", "签证和行李很重要，心理准备也同样重要。", "Checklist thực tế rất cần, chuẩn bị tinh thần cũng cần.")}
            description={tx(
              "We tell students the truth gently: homesickness is normal, culture shock is temporary, and asking for help is part of becoming independent.",
              "我们温柔地告诉学生真相：想家是正常的，文化冲击是暂时的，求助也是独立的一部分。",
              "Chúng tôi nói thật một cách dịu dàng: nhớ nhà là bình thường, sốc văn hóa là tạm thời và xin giúp đỡ cũng là một phần của trưởng thành."
            )}
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {warmPack.map((item) => (
              <div key={item} className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm font-semibold leading-7 text-amber-950">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[360px_1fr] lg:px-8">
          <div>
            <CalendarDays className="text-secondary" size={34} aria-hidden="true" />
            <h2 className="mt-4 text-3xl font-bold">{tx("China culture calendar", "中国文化日历", "Lịch văn hóa Trung Quốc")}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {tx(
                "Light, friendly introductions to Chinese festivals, traditions, arts, and campus cultural events.",
                "用轻松易懂的方式介绍中国节日、传统艺术、习俗和高校文化节活动。",
                "Giới thiệu nhẹ nhàng về lễ hội, truyền thống, nghệ thuật và hoạt động văn hóa trong trường."
              )}
            </p>
          </div>
          <div className="grid gap-3">
            {cultureCalendar.map(([name, body]) => (
              <article key={name} className="rounded-lg border border-white/10 bg-white/10 p-5">
                <h3 className="font-bold text-white">{name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={tx("Life guide", "生活指南", "Hướng dẫn đời sống")}
            title={tx("From how to survive to how to live well.", "从“怎么活”到“活得好”。", "Từ sống được đến sống tốt.")}
            description={tx(
              "The most useful part of SilkStudy should help students handle the first 30 days, daily apps, housing, transport, health, and safety.",
              "SilkStudy 最实用的部分，应该帮助学生处理抵达后 30 天、日常 App、住宿、交通、医疗和安全。",
              "Phần hữu ích nhất của SilkStudy nên giúp sinh viên xử lý 30 ngày đầu, ứng dụng hằng ngày, nhà ở, giao thông, y tế và an toàn."
            )}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {guideSections.map(({ Icon, title, items }) => (
              <article key={title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <Icon className="text-primary" size={24} aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold text-ink">{title}</h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                  {items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="mt-1 shrink-0 text-emerald-600" size={15} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <Sparkles size={28} className="text-secondary" aria-hidden="true" />
            <h2 className="mt-3 text-3xl font-bold">{tx("Let students feel China before they arrive.", "让学生还没到中国，就先感到被接住。", "Hãy để sinh viên cảm thấy được đón nhận trước khi đến Trung Quốc.")}</h2>
            <p className="mt-3 max-w-2xl text-blue-100">
              {tx("We can help with school matching, scholarship review, pre-arrival planning, city choice, and emotional preparation.", "我们可以帮助选校、奖学金评估、行前规划、城市选择和心理准备。", "Chúng tôi có thể hỗ trợ chọn trường, học bổng, chuẩn bị trước khi đi, chọn thành phố và chuẩn bị tinh thần.")}
            </p>
          </div>
          <ButtonLink href={localize("/consultation")} variant="secondary">{tx("Free Consultation", "免费咨询", "Tư vấn miễn phí")}</ButtonLink>
        </div>
      </section>
    </main>
  );
}
