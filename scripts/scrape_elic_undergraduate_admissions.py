from __future__ import annotations

import html
import json
import re
import time
import urllib.parse
import urllib.request
from html.parser import HTMLParser
from pathlib import Path
from typing import Any


BASE_URL = "https://china.elic.com.cn"
API_URL = f"{BASE_URL}/wp-json/wp/v2/posts"
OUTPUT_DIR = Path("outputs/elic-undergraduate-admissions")
PER_PAGE = 100
REQUEST_DELAY = 0.2


class TextExtractor(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.parts: list[str] = []

    def handle_data(self, data: str) -> None:
        value = data.strip()
        if value:
            self.parts.append(value)

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag in {"br", "p", "section", "div", "li", "tr", "h1", "h2", "h3", "h4"}:
            self.parts.append("\n")

    def text(self) -> str:
        raw = "\n".join(self.parts)
        raw = html.unescape(raw)
        raw = re.sub(r"[ \t\r\f\v]+", " ", raw)
        raw = re.sub(r"\n[ \t]+", "\n", raw)
        raw = re.sub(r"\n{3,}", "\n\n", raw)
        return raw.strip()


def fetch_json(url: str) -> Any:
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": "SilkStudy research scraper (+local data curation)",
            "Accept": "application/json",
        },
    )
    with urllib.request.urlopen(request, timeout=30) as response:
        return json.loads(response.read().decode("utf-8"))


def html_to_text(value: str) -> str:
    parser = TextExtractor()
    parser.feed(value)
    return parser.text()


def normalize_title(title_html: str) -> str:
    return html_to_text(title_html).replace("\n", " ").strip()


def compact(value: str) -> str:
    value = re.sub(r"[ \t\r\f\v]+", " ", value)
    value = re.sub(r"\n{2,}", "\n", value)
    return value.strip()


def extract_school(title: str, text: str) -> str:
    patterns = [
        r"20\d{2}年(.+?)国际学生(?:本科生|本科|本硕|本硕博)?招生简章",
        r"20\d{2}年(.+?)国际学生(?:本科生|本科|本硕|本硕博)?招生",
        r"20\d{2}年?(.+?)(?:国际学生|外国籍人士|来华留学生|来华留学).{0,30}(?:本科|学士|招生简章)",
        r"20\d{2}年?(.+?)(?:表导专业|制片管理专业|英文授课本科|全英授课|国际本科)",
        r"20\d{2}年(.+?)(?:来华留学|国际学生).{0,8}本科.{0,8}招生简章",
        r"(.+?)国际学生(?:本科生|本科|本硕|本硕博)?招生简章",
    ]
    for pattern in patterns:
        match = re.search(pattern, title)
        if match:
            school = match.group(1).strip(" ：:-")
            if school.startswith("学") and "大学" in school:
                school = school[1:]
            if school.endswith("大"):
                school = f"{school}学"
            return school

    first_lines = [line.strip() for line in text.splitlines() if line.strip()]
    for line in first_lines[:8]:
        match = re.search(r"([\u4e00-\u9fa5]{2,30}大学)", line)
        if match:
            return match.group(1)

    return ""


def section_after(text: str, headings: list[str], max_chars: int = 500) -> str:
    lines = [line.strip() for line in text.splitlines() if line.strip()]
    for index, line in enumerate(lines):
        if any(heading in line for heading in headings):
            chunk: list[str] = []
            for item in lines[index + 1 : index + 12]:
                if len(" ".join(chunk)) > max_chars:
                    break
                if any(stop in item for stop in ["申请材料", "报名材料", "费用", "奖学金", "联系方式", "招生专业", "申请流程"]) and chunk:
                    break
                chunk.append(item)
            return compact(" ".join(chunk))[:max_chars]
    return ""


def snippets_for_keywords(text: str, keywords: list[str], max_items: int = 8) -> list[str]:
    snippets: list[str] = []
    seen: set[str] = set()
    for keyword in keywords:
        for match in re.finditer(re.escape(keyword), text):
            start = max(0, match.start() - 90)
            end = min(len(text), match.end() + 220)
            snippet = compact(text[start:end])
            if snippet and snippet not in seen:
                snippets.append(snippet)
                seen.add(snippet)
            if len(snippets) >= max_items:
                return snippets
    return snippets


def classify_post(title: str, text: str, categories: list[int]) -> tuple[bool, str]:
    if 28 in categories and "招生简章" not in title:
        return False, "录取案例，非招生简章"
    if any(keyword in title for keyword in ["预科", "汉语进修", "专转本", "语言生"]):
        return False, "预科/语言/专转本，非本科生招生简章"
    if any(keyword in title for keyword in ["硕博项目", "进修生项目", "专项奖学金"]) and "本科" not in title:
        return False, "研究生/进修/专项奖学金，非本科生招生简章"
    if "招生简章" not in title and "招生简章" not in text[:1000]:
        return False, "不含招生简章"
    if "本科" not in title and "本科" not in text[:4000] and "学士" not in text[:4000]:
        return False, "未发现本科/学士信息"
    if re.search(r"硕士|博士|研究生", title) and "本科" not in title and "本硕博" not in title:
        return False, "标题偏研究生，排除"
    return True, "本科招生简章"


def parse_post(post: dict[str, Any]) -> dict[str, Any]:
    title = normalize_title(post["title"]["rendered"])
    text = html_to_text(post["content"]["rendered"])
    categories = list(post.get("categories") or [])
    include, reason = classify_post(title, text, categories)
    school = extract_school(title, text)

    return {
        "id": post["id"],
        "date": post["date"][:10],
        "modified": post["modified"][:10],
        "title": title,
        "schoolZh": school,
        "link": post["link"],
        "categories": categories,
        "include": include,
        "reason": reason,
        "textChars": len(text),
        "summary": {
            "eligibility": section_after(text, ["申请资格", "申请条件", "入学要求"]),
            "language": section_after(text, ["语言要求", "语言水平", "中文水平", "英文水平"]),
            "fees": section_after(text, ["费用", "收费标准", "学费"]),
            "scholarship": section_after(text, ["奖学金", "资助"]),
            "majors": section_after(text, ["招生专业目录", "招生专业", "专业目录"], max_chars=700),
            "application": section_after(text, ["申请流程", "申请方式", "报名方式", "申请时间"], max_chars=700),
        },
        "signals": snippets_for_keywords(
            text,
            ["本科申请", "年龄", "高中", "HSK", "雅思", "托福", "CSCA", "学费", "住宿", "保险", "奖学金", "申请费", "截止"],
        ),
    }


def collect_posts() -> list[dict[str, Any]]:
    posts: list[dict[str, Any]] = []
    for page in range(1, 80):
        query = urllib.parse.urlencode({"per_page": PER_PAGE, "page": page, "categories": 27})
        url = f"{API_URL}?{query}"
        try:
            batch = fetch_json(url)
        except urllib.error.HTTPError as exc:
            if exc.code == 400:
                break
            raise
        if not batch:
            break
        posts.extend(batch)
        time.sleep(REQUEST_DELAY)
    return posts


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    posts = collect_posts()
    records = [parse_post(post) for post in posts]
    included = [record for record in records if record["include"]]

    (OUTPUT_DIR / "all-category-27-posts.json").write_text(json.dumps(records, ensure_ascii=False, indent=2), encoding="utf-8")
    (OUTPUT_DIR / "undergraduate-admission-records.json").write_text(json.dumps(included, ensure_ascii=False, indent=2), encoding="utf-8")

    lines = [
        "# ELIC 本科招生简章抓取结果",
        "",
        f"- 分类 27 总文章数：{len(records)}",
        f"- 本科招生简章命中：{len(included)}",
        "",
        "| 日期 | 学校 | 标题 | 链接 |",
        "| --- | --- | --- | --- |",
    ]
    for record in included:
        lines.append(f"| {record['date']} | {record['schoolZh']} | {record['title']} | {record['link']} |")

    (OUTPUT_DIR / "README.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"Wrote {len(included)} undergraduate records from {len(records)} category-27 posts to {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
