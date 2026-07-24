# -*- coding: utf-8 -*-
from pathlib import Path
import os

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle


OUT_PATH = Path("output/pdf/silkstudy-low-cost-scholarship-guide-2026.pdf")
OUT_PATH.parent.mkdir(parents=True, exist_ok=True)


def register_font():
    candidates = [
        r"C:\Windows\Fonts\msyh.ttc",
        r"C:\Windows\Fonts\simhei.ttf",
        r"C:\Windows\Fonts\simsun.ttc",
    ]
    font_path = next((path for path in candidates if os.path.exists(path)), None)
    if not font_path:
        return "Helvetica", "Helvetica-Bold"

    pdfmetrics.registerFont(TTFont("SilkCN", font_path, subfontIndex=0))
    pdfmetrics.registerFont(TTFont("SilkCNBold", font_path, subfontIndex=0))
    return "SilkCN", "SilkCNBold"


FONT, BOLD = register_font()
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="TitleCN", fontName=BOLD, fontSize=23, leading=31, textColor=colors.HexColor("#111827"), spaceAfter=8))
styles.add(ParagraphStyle(name="SubtitleCN", fontName=FONT, fontSize=11.5, leading=19, textColor=colors.HexColor("#475569"), spaceAfter=14))
styles.add(ParagraphStyle(name="H1CN", fontName=BOLD, fontSize=17, leading=24, textColor=colors.HexColor("#0F172A"), spaceBefore=13, spaceAfter=8))
styles.add(ParagraphStyle(name="H2CN", fontName=BOLD, fontSize=12.2, leading=18, textColor=colors.HexColor("#92400E"), spaceBefore=8, spaceAfter=4))
styles.add(ParagraphStyle(name="BodyCN", fontName=FONT, fontSize=9.8, leading=16.2, textColor=colors.HexColor("#334155"), spaceAfter=6))
styles.add(ParagraphStyle(name="SmallCN", fontName=FONT, fontSize=8.2, leading=12, textColor=colors.HexColor("#64748B")))
styles.add(ParagraphStyle(name="QuoteCN", fontName=BOLD, fontSize=12, leading=19, textColor=colors.HexColor("#064E3B"), backColor=colors.HexColor("#ECFDF5"), borderColor=colors.HexColor("#A7F3D0"), borderWidth=0.5, borderPadding=7, spaceBefore=8, spaceAfter=8))
styles.add(ParagraphStyle(name="WarnCN", fontName=FONT, fontSize=9.2, leading=15, textColor=colors.HexColor("#78350F"), backColor=colors.HexColor("#FFFBEB"), borderColor=colors.HexColor("#FCD34D"), borderWidth=0.5, borderPadding=7, spaceBefore=8, spaceAfter=8))


def p(text, style="BodyCN"):
    return Paragraph(text, styles[style])


def bullets(items):
    return [Paragraph("• " + item, styles["BodyCN"]) for item in items]


def make_table(rows, widths=None, header=True):
    table = Table(
        [[Paragraph(str(cell), styles["H2CN" if header and row_index == 0 else "BodyCN"]) for cell in row] for row_index, row in enumerate(rows)],
        colWidths=widths,
    )
    commands = [
        ("BOX", (0, 0), (-1, -1), 0.4, colors.HexColor("#CBD5E1")),
        ("INNERGRID", (0, 0), (-1, -1), 0.25, colors.HexColor("#E2E8F0")),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 7),
        ("RIGHTPADDING", (0, 0), (-1, -1), 7),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]
    if header:
        commands.append(("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#EFF6FF")))
    table.setStyle(TableStyle(commands))
    return table


def header_footer(canvas, doc):
    canvas.saveState()
    canvas.setFont(FONT, 8)
    canvas.setFillColor(colors.HexColor("#94A3B8"))
    canvas.drawString(18 * mm, 12 * mm, "SilkStudy 2026 低成本来华留学奖学金指南")
    canvas.drawRightString(192 * mm, 12 * mm, str(doc.page))
    canvas.restoreState()


story = [
    p("2026 来中国留学低成本路线指南", "TitleCN"),
    p("如何争取免学费、生活费补助，并找到适合自己的中国大学", "SubtitleCN"),
    p("SilkStudy 免费指南｜给国际学生和家长的第一份路线图", "SmallCN"),
    Spacer(1, 6 * mm),
    p("核心观点", "H1CN"),
    p("中国留学并不一定意味着高额自费。对一部分条件匹配的学生来说，通过国家级、省市级、学校级和专项奖学金组合，确实有机会显著降低成本，甚至争取到学费全免，并获得住宿或生活补助。", "QuoteCN"),
    p("但这份指南不会承诺“人人免费”。奖学金结果取决于国籍、成绩、学历层次、专业方向、语言能力、学校名额、申请时间和当年政策。所有具体项目、金额、截止日期和录取结果，必须以学校及相关主管部门当年的官方通知为准。", "WarnCN"),
    p("为什么我们强调“先找奖学金，再选学校”", "H1CN"),
]
story += bullets([
    "很多学生一开始只看排名或热门城市，忽略了更适合自己的学校和奖学金名额。",
    "中国高校数量多、地区差异大，有些学校的国际学生奖学金、地方奖学金或专项名额并没有被足够多的学生了解。",
    "真正聪明的路线，不是盲目追最贵城市和最高排名，而是在“学校质量、录取概率、奖学金覆盖、城市成本、专业匹配”之间找到平衡。",
    "如果家庭预算有限，应该从第一步就把“免学费、住宿支持、生活补助”的可能性放进规划，而不是等到拿到自费录取后才寻找补救方案。",
])
story += [
    p("合规说明：我们能做什么，不能说什么", "H1CN"),
    make_table(
        [
            ["可以这样理解", "不能这样理解"],
            ["我们熟悉来华留学政策、奖学金层级和学校申请路径，可以帮助学生优先核验低成本机会。", "不能理解为任何学生都能保证获得奖学金。"],
            ["我们会基于公开招生简章、学校官方通知、过往经验和学校沟通渠道，帮助学生筛选可能性。", "不能理解为绕过学校审核、替代官方录取或拥有特殊录取承诺。"],
            ["我们可以帮助学生准备材料、优化学校组合、提醒时间线、降低信息差。", "不能理解为伪造材料、夸大成绩、承诺内部名额或规避官方要求。"],
            ["我们会尽量帮学生少花钱、少走弯路。", "不能理解为所有申请都零成本；报名费、体检、认证、签证、保险、机票等仍可能需要学生承担。"],
        ],
        widths=[82 * mm, 82 * mm],
    ),
    PageBreak(),
    p("中国奖学金通常有哪些层级", "H1CN"),
    make_table(
        [
            ["层级", "可能覆盖内容", "适合关注点"],
            ["国家级奖学金", "部分项目可能覆盖学费、住宿、保险及生活费。", "竞争强，材料和时间线要早准备，必须核验当年可申请项目。"],
            ["省市级奖学金", "可能提供学费减免、一次性奖励、第一年补助或年度支持。", "与城市和学校所在地区有关，适合和低生活成本城市一起比较。"],
            ["学校级奖学金", "学校自设奖学金、新生奖学金、校长奖学金、国际学生奖学金等。", "名额和标准差异很大，常常是信息差最大的部分。"],
            ["专项奖学金", "可能面向特定国家、专业、合作项目、中文学习者或国际交流项目。", "需要结合学生国籍、专业、语言和学校合作关系来核验。"],
        ],
        widths=[32 * mm, 67 * mm, 67 * mm],
    ),
    p("什么样的学生更值得优先做全额/高覆盖评估", "H1CN"),
]
story += bullets([
    "成绩稳定，有完整成绩单和毕业证明，材料真实性清楚。",
    "愿意学习中文，或已经具备一定中文基础；部分项目对中文能力有明显偏好。",
    "专业目标明确，例如医学、工程、农业、师范、中文、AI、经贸等方向。",
    "愿意接受非一线城市或区域重点大学，用更低城市成本换取更高性价比。",
    "能提前 6-12 个月准备材料，不错过奖学金和学校申请窗口。",
    "愿意根据实际条件做学校梯度，而不是只盯一个最热门学校。",
])
story += [
    p("低成本路线的正确思路", "H1CN"),
    make_table(
        [
            ["步骤", "要做的事"],
            ["1. 先判断预算底线", "明确家庭最多能承担多少，包括申请费、材料费、签证、机票、保险和最初生活费。"],
            ["2. 先查奖学金层级", "不急着定学校，先按国家、省市、学校、专项四层核验可能机会。"],
            ["3. 建立学校梯度", "设置冲刺、匹配、稳妥三类学校，避免只申请高竞争学校。"],
            ["4. 比较城市成本", "同样奖学金金额，在长沙、南宁、太原、昆明等城市和在一线城市的压力完全不同。"],
            ["5. 准备真实材料", "成绩单、毕业证明、护照、体检、无犯罪记录、语言证明、学习计划、推荐信都要真实、完整、按时。"],
            ["6. 持续核验官方通知", "每个奖学金最终都要看当年学校官网、招生简章和申请系统。"],
        ],
        widths=[36 * mm, 130 * mm],
    ),
    PageBreak(),
    p("学生最容易犯的 8 个错误", "H1CN"),
]
story += bullets([
    "误以为只有顶尖名校才有奖学金，忽略了区域重点大学和专业强校。",
    "只问“哪个学校最好”，没有问“哪个学校最适合我的条件和预算”。",
    "等到截止日期临近才准备材料，错过奖学金评审窗口。",
    "用同一份学习计划申请所有学校，没有说明为什么适合该学校和专业。",
    "只看学费，不看住宿、城市生活费、保险、交通和第一年安置成本。",
    "没有核验授课语言，导致中文水平或英语材料不匹配。",
    "轻信“包录取、包奖学金”的违规承诺。",
    "材料不真实或不一致，影响学校审核和后续签证。",
])
story += [
    p("SilkStudy 的合规服务流程", "H1CN"),
    make_table(
        [
            ["阶段", "我们做什么", "学生需要做什么"],
            ["免费初评", "了解国家、成绩、预算、专业、语言和城市偏好，判断是否值得优先冲高覆盖奖学金。", "如实填写背景，不夸大成绩和预算。"],
            ["路线筛选", "基于公开政策、学校信息和沟通资源，整理可能学校与奖学金方向。", "确认自己能接受的城市、专业语言和学校层次。"],
            ["材料规划", "列出材料清单、时间线、学习计划重点和风险点。", "准备真实文件，按要求翻译、公证或认证。"],
            ["申请推进", "协助跟进申请系统、学校要求、奖学金材料和后续沟通。", "及时补充信息，保持邮箱和电话畅通。"],
            ["结果确认", "帮助学生理解录取、奖学金覆盖范围、住宿、签证和报到要求。", "以学校官方录取和奖学金通知为准，理性决定是否接受。"],
        ],
        widths=[25 * mm, 76 * mm, 65 * mm],
    ),
    p("重要提醒", "H1CN"),
    p("如果一个机构承诺“百分之百全额奖学金”“不用审核”“内部名额”“不用真实材料”，学生和家长都应该保持警惕。真正长期可靠的路径，是尊重学校规则、尊重官方流程，并把信息差变成认真准备的优势。", "WarnCN"),
    p("免费评估前，请先准备这些信息", "H1CN"),
]
story += bullets([
    "你的国家/地区、年龄、当前学历和预计毕业时间。",
    "最近 2-3 年成绩单或 GPA，是否有语言成绩。",
    "目标学历：中文语言、本科、硕士、博士或非学历项目。",
    "目标专业，以及能否接受相关或相近专业。",
    "家庭年度预算，是否必须争取免学费或生活费补助。",
    "是否接受二线/三线城市，是否愿意学习中文。",
    "护照、体检、无犯罪记录等材料是否可以按时准备。",
])
story += [
    p("最后一句话", "H1CN"),
    p("来中国留学不应该只是“花钱买一个机会”。如果学生条件、时间和学校路线匹配，中国的奖学金体系确实可能帮助很多家庭大幅降低成本。SilkStudy 希望做的，是先帮你看见这些可能性，再用合规、真实、可执行的方式，把可能性一步步变成申请方案。", "QuoteCN"),
    Spacer(1, 8 * mm),
    p("下一步：在 SilkStudy 提交免费咨询表，写清楚你的国家、专业、预算和“是否希望争取免学费 + 生活费补助”。我们会先从奖学金可能性开始评估。", "BodyCN"),
]


doc = SimpleDocTemplate(
    str(OUT_PATH),
    pagesize=A4,
    rightMargin=18 * mm,
    leftMargin=18 * mm,
    topMargin=17 * mm,
    bottomMargin=18 * mm,
)
doc.build(story, onFirstPage=header_footer, onLaterPages=header_footer)
print(OUT_PATH.resolve())
