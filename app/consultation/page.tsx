import { CalendarCheck, CheckCircle2, FileText, MessageSquareText, School, type LucideIcon } from "lucide-react";
import { getLocale } from "next-intl/server";
import { ConsultationForm } from "@/components/forms/consultation-form";

export default async function ConsultationPage() {
  const locale = await getLocale();
  const isZh = locale === "zh";
  const isVi = locale === "vi";
  const tx = (en: string, zh: string, vi: string) => isZh ? zh : isVi ? vi : en;

  const steps = isZh
    ? [
        ["提交背景", "告诉我们你的国家、目标学位、专业、预算和城市偏好。"],
        ["生成方向", "顾问会初步匹配学校、城市、专业路线和奖学金可能性。"],
        ["确认方案", "你会收到可执行的申请时间线和材料准备建议。"]
      ]
    : isVi ? [
        ["Gửi thông tin", "Cho chúng tôi biết quốc gia, bậc học, ngành, ngân sách và thành phố mong muốn."],
        ["Xây dựng định hướng", "Cố vấn xem xét trường, thành phố, ngành học và khả năng nhận học bổng."],
        ["Xác nhận kế hoạch", "Bạn nhận được lịch trình đăng ký và danh sách hồ sơ cần chuẩn bị."]
      ] : [
        ["Submit background", "Tell us your country, target degree, major, budget, and city preference."],
        ["Build direction", "A counselor reviews school, city, major route, and scholarship possibilities."],
        ["Confirm plan", "You receive an actionable application timeline and document checklist."]
      ];

  const afterSubmission: [LucideIcon, string][] = isZh
    ? [
        [MessageSquareText, "CRM 记录会以 New 状态创建，便于顾问跟进。"],
        [School, "我们会按学校、城市、专业、预算和奖学金整理初步方向。"],
        [FileText, "你会得到材料准备和申请时间线建议。"],
        [CalendarCheck, "后续可以继续推进到正式申请服务。"]
      ]
    : isVi ? [
        [MessageSquareText, "Hồ sơ CRM được tạo với trạng thái Mới để cố vấn theo dõi."],
        [School, "Chúng tôi xem xét trường, thành phố, ngành học, ngân sách và học bổng."],
        [FileText, "Bạn nhận được gợi ý về hồ sơ và lịch trình."],
        [CalendarCheck, "Yêu cầu có thể tiếp tục thành dịch vụ đăng ký chính thức."]
      ] : [
        [MessageSquareText, "A CRM record is created with New status for counselor follow-up."],
        [School, "We review schools, cities, majors, budget, and scholarships."],
        [FileText, "You receive document and timeline suggestions."],
        [CalendarCheck, "The lead can continue into a formal application service."]
      ];

  return (
    <main className="bg-surface py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
        <section>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {tx("Study consultation funnel", "留学咨询漏斗", "Quy trình tư vấn du học")}
          </p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight text-ink">
            {tx("Free China study consultation", "免费中国留学咨询", "Tư vấn du học Trung Quốc miễn phí")}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            {tx(
              "Tell us your background, target degree, budget, major, and preferred city. We turn schools, city life, scholarships, and application timing into a practical plan.",
              "告诉我们你的背景、目标学位、预算、专业和城市偏好。我们会把学校、城市生活、奖学金和申请时间线整理成可执行方案。",
              "Hãy cho chúng tôi biết hoàn cảnh, bậc học, ngân sách, ngành và thành phố mong muốn. Chúng tôi sẽ xây dựng kế hoạch thực tế về trường, đời sống, học bổng và thời gian đăng ký."
            )}
          </p>

          <div className="mt-8 grid gap-4">
            {steps.map(([title, body], index) => (
              <div key={title} className="rounded-lg border border-slate-200 bg-white p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-bold text-ink">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6">
            <p className="font-bold text-ink">
              {tx("What happens after submission", "提交后会发生什么", "Điều gì xảy ra sau khi gửi")}
            </p>
            <div className="mt-4 grid gap-3 text-sm text-slate-600">
              {afterSubmission.map(([Icon, body]) => (
                <p key={String(body)} className="flex gap-3">
                  <Icon size={17} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                  {body}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-lg bg-primary p-6 text-white">
            <CheckCircle2 size={24} aria-hidden="true" />
            <p className="mt-4 text-lg font-bold">{tx("Who this is for", "适合哪些学生？", "Dành cho ai?")}</p>
            <p className="mt-2 text-sm leading-6 text-blue-100">
              {tx(
                "High school students, undergraduates, parents, overseas Chinese families, and education agents can submit needs first; we organize options by goals and budget.",
                "高中生、本科生、家长、海外华人家庭和国际教育中介，都可以先提交需求，我们会按目标和预算整理方向。",
                "Học sinh trung học, sinh viên, phụ huynh, gia đình người Hoa ở nước ngoài và các đơn vị giáo dục đều có thể gửi nhu cầu; chúng tôi sẽ sắp xếp lựa chọn theo mục tiêu và ngân sách."
              )}
            </p>
          </div>
        </section>
        <ConsultationForm locale={locale} />
      </div>
    </main>
  );
}
