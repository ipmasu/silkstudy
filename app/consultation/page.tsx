import { Award, CalendarCheck, CheckCircle2, FileText, School, ShieldCheck, type LucideIcon } from "lucide-react";
import { getLocale } from "next-intl/server";
import { ConsultationForm } from "@/components/forms/consultation-form";

export default async function ConsultationPage() {
  const locale = await getLocale();
  const isZh = locale === "zh";
  const isVi = locale === "vi";
  const tx = (en: string, zh: string, vi: string) => isZh ? zh : isVi ? vi : en;

  const steps = isZh
    ? [
        ["提交背景", "告诉我们你的国家、成绩、学历目标、专业、语言能力、预算和城市偏好。"],
        ["优先核验奖学金", "我们先查国家、省市、学校和专项奖学金，重点寻找免学费、住宿支持和生活补助机会。"],
        ["形成申请路线", "把学校层次、录取概率、奖学金覆盖、材料时间线和签证步骤整理成可执行方案。"]
      ]
    : isVi ? [
        ["Gửi thông tin", "Cho chúng tôi biết quốc gia, điểm số, bậc học, ngành, ngôn ngữ, ngân sách và thành phố mong muốn."],
        ["Ưu tiên học bổng", "Chúng tôi kiểm tra học bổng quốc gia, địa phương, trường và chương trình đặc biệt, nhất là miễn học phí và hỗ trợ sinh hoạt."],
        ["Xây dựng lộ trình", "Kết hợp cấp trường, khả năng trúng tuyển, mức học bổng, hồ sơ, thời gian và visa thành kế hoạch thực tế."]
      ]
    : [
        ["Submit background", "Tell us your country, grades, target degree, major, language level, budget, and city preference."],
        ["Prioritize scholarships", "We first verify national, provincial, university, and special scholarships, especially tuition waivers and living support."],
        ["Build the route", "We connect school level, admission probability, scholarship coverage, documents, timeline, and visa steps."]
      ];

  const afterSubmission: [LucideIcon, string][] = isZh
    ? [
        [Award, "优先判断是否存在全额或高覆盖奖学金路线。"],
        [School, "按“学校质量 + 录取概率 + 奖学金名额 + 城市成本”筛选。"],
        [FileText, "整理需要准备的成绩单、护照、语言、推荐信、学习计划等材料。"],
        [CalendarCheck, "提醒关键截止时间，避免错过奖学金通道。"]
      ]
    : isVi ? [
        [Award, "Ưu tiên đánh giá học bổng toàn phần hoặc hỗ trợ cao."],
        [School, "Lọc theo chất lượng trường, khả năng trúng tuyển, suất học bổng và chi phí thành phố."],
        [FileText, "Sắp xếp bảng điểm, hộ chiếu, ngôn ngữ, thư giới thiệu và kế hoạch học tập."],
        [CalendarCheck, "Nhắc các hạn quan trọng để không bỏ lỡ kênh học bổng."]
      ]
    : [
        [Award, "We first assess full or high-coverage scholarship routes."],
        [School, "We filter by school quality, admission probability, scholarship quota, and city cost."],
        [FileText, "We organize transcripts, passport, language, recommendation letters, and study plan needs."],
        [CalendarCheck, "We watch key deadlines so students do not miss scholarship channels."]
      ];

  const scholarshipCards = isZh
    ? [
        ["国家级", "中国政府奖学金等路径，部分项目可覆盖学费、住宿和生活费。"],
        ["省市级", "不少省市为了吸引国际学生，会设置区域奖学金或学费减免。"],
        ["学校级", "很多学校有自己的校长奖学金、国际学生奖学金或新生奖学金。"],
        ["专项机会", "特定国家、专业、合作项目、语言项目和未招满名额，常常隐藏着机会。"]
      ]
    : isVi ? [
        ["Quốc gia", "Một số học bổng chính phủ có thể bao gồm học phí, ký túc xá và sinh hoạt phí."],
        ["Địa phương", "Nhiều tỉnh thành có học bổng khu vực hoặc miễn giảm học phí để thu hút sinh viên quốc tế."],
        ["Trường", "Nhiều trường có học bổng hiệu trưởng, học bổng sinh viên quốc tế hoặc học bổng tân sinh viên."],
        ["Đặc biệt", "Cơ hội theo quốc gia, ngành, dự án hợp tác, chương trình tiếng và chỉ tiêu chưa đủ thường rất đáng kiểm tra."]
      ]
    : [
        ["National", "Some government scholarship routes may cover tuition, housing, and living allowance."],
        ["Provincial", "Many provinces and cities offer regional scholarships or tuition reductions for international students."],
        ["University", "Schools often have president scholarships, international student scholarships, or freshman awards."],
        ["Special", "Country-specific, major-specific, partnership, language, and unfilled-quota routes can hide real opportunities."]
      ];

  return (
    <main className="bg-surface py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <section>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {tx("Scholarship-first study planning", "奖学金优先的留学规划", "Tư vấn ưu tiên học bổng")}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {tx(
              "Study in China with the lowest possible cost.",
              "尽量花最少的钱，读中国尽可能好的大学。",
              "Du học Trung Quốc với chi phí thấp nhất có thể."
            )}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            {tx(
              "Many international students do not know that China has scholarships that may cover full tuition and even provide living allowance. Our first job is to help you find those overlooked routes before you pay unnecessary tuition.",
              "很多外国学生不知道，中国确实存在一些可以覆盖全部学费，甚至同时覆盖生活费的奖学金项目。我们的第一步，就是先帮你寻找这些容易被忽略的路线，避免一开始就走高成本自费路径。",
              "Nhiều sinh viên quốc tế chưa biết rằng Trung Quốc có các học bổng có thể bao gồm toàn bộ học phí, thậm chí có trợ cấp sinh hoạt. Việc đầu tiên của chúng tôi là giúp bạn tìm các tuyến ít người biết trước khi chọn con đường tự túc đắt đỏ."
            )}
          </p>

          <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-6">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-white">
                <ShieldCheck size={22} aria-hidden="true" />
              </span>
              <div>
                <p className="text-xl font-bold text-emerald-950">
                  {tx(
                    "Full tuition + living support is possible for some students.",
                    "部分学生有机会实现免学费 + 生活费补助。",
                    "Một số sinh viên có cơ hội miễn học phí + hỗ trợ sinh hoạt."
                  )}
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-900">
                  {tx(
                    "It is not a promise for everyone. It depends on nationality, grades, degree level, major, language route, timing, and the current year's quota. But if the possibility exists, we want to check it first.",
                    "这不是对所有人的绝对承诺。它取决于国籍、成绩、学历层次、专业、授课语言、申请时间和当年名额。但只要存在可能，我们就应该优先核验。",
                    "Đây không phải lời hứa cho tất cả mọi người. Nó phụ thuộc vào quốc tịch, điểm số, bậc học, ngành, ngôn ngữ giảng dạy, thời điểm và chỉ tiêu từng năm. Nhưng nếu có khả năng, chúng tôi sẽ kiểm tra trước."
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {scholarshipCards.map(([title, body]) => (
              <div key={title} className="rounded-lg border border-slate-200 bg-white p-5">
                <p className="font-bold text-ink">{title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
              </div>
            ))}
          </div>

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
              {tx("What happens after submission", "提交以后我们会做什么", "Sau khi gửi, chúng tôi sẽ làm gì")}
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
            <p className="mt-4 text-lg font-bold">
              {tx("Our principle", "我们的原则", "Nguyên tắc của chúng tôi")}
            </p>
            <p className="mt-2 text-sm leading-6 text-blue-100">
              {tx(
                "Do not make a family spend more just because they lack information. We first look for the best realistic route, then explain the trade-offs clearly.",
                "不要因为信息差，让一个家庭花本来可以不用花的钱。我们先寻找现实可行的最好路线，再把取舍讲清楚。",
                "Đừng để một gia đình phải trả nhiều hơn chỉ vì thiếu thông tin. Chúng tôi tìm tuyến tốt nhất có thể, rồi giải thích rõ các lựa chọn."
              )}
            </p>
          </div>
        </section>

        <ConsultationForm locale={locale} />
      </div>
    </main>
  );
}
