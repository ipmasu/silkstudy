export type CityCulturalInspiration = {
  slug: string;
  title: string;
  zhTitle: string;
  intro: string;
  zhIntro: string;
  sourceNote: string;
  zhSourceNote: string;
  items: {
    name: string;
    zhName: string;
    category: string;
    zhCategory: string;
    district: string;
    zhDistrict: string;
    image: string;
    sourceUrl: string;
    story: string;
    zhStory: string;
    studentAngle: string;
    zhStudentAngle: string;
  }[];
};

const inspiration = (input: CityCulturalInspiration) => input;

export const cityCulturalInspirations: Record<string, CityCulturalInspiration> = {
  changsha: inspiration({
    slug: "changsha",
    title: "Changsha Through Living Local Culture",
    zhTitle: "从风物里看见长沙",
    intro:
      "Changsha is not only a famous food city. Its charm is also hidden in old landmarks, neighborhood streets, green parks, and the way young people turn ordinary evenings into city memories.",
    zhIntro:
      "长沙不只是一个以美食出圈的城市。它真正迷人的地方，也藏在老地标、街区建筑、公园散步和年轻人把普通夜晚过成城市记忆的方式里。",
    sourceNote:
      "Topic cues are organized from the public Huaxia Fengwu index and rewritten in SilkStudy's own youth-friendly voice.",
    zhSourceNote:
      "选题线索整理自华夏风物公开索引，文字由 SilkStudy 面向全球年轻人重新撰写。",
    items: [
      {
        name: "Changsha Zhongshan Pavilion",
        zhName: "长沙中山亭",
        category: "Old-city landmark",
        zhCategory: "老城地标",
        district: "Furong District",
        zhDistrict: "芙蓉区",
        image: "https://image.huaxiafengwu.com/submission/145565/banner/1711005554791",
        sourceUrl: "https://image.huaxiafengwu.com/app/wiki/3/143058/wiki-detail.html?t=1711359324953",
        story:
          "Zhongshan Pavilion gives Changsha a visible old-city anchor. Around it, students can read the city through street corners, shop signs, local snacks, and the rhythm of people meeting after class or work.",
        zhStory:
          "中山亭像是长沙老城的一个时间坐标。站在它附近，学生能从街角、招牌、小吃和下课下班后的人流里，读到这座城市并不端着的历史感。",
        studentAngle:
          "Best for a first city walk: start here, follow the streets into food lanes, then let classmates explain what locals actually love.",
        zhStudentAngle:
          "适合作为第一次 city walk 的起点：从这里出发，顺着街巷走进小吃和老店，再让本地同学讲讲长沙人真正喜欢什么。"
      },
      {
        name: "Beizheng Street Church",
        zhName: "长沙北正街教堂",
        category: "Street architecture",
        zhCategory: "街区建筑",
        district: "Kaifu District",
        zhDistrict: "开福区",
        image: "https://image.huaxiafengwu.com/submission/145564/banner/1711005242805",
        sourceUrl: "https://image.huaxiafengwu.com/app/wiki/3/143057/wiki-detail.html?t=1711353274040",
        story:
          "Beizheng Street Church adds a quiet, layered texture to Changsha. It reminds students that Chinese cities are not one-note: local life, old architecture, faith, commerce, and youth photography can share the same street.",
        zhStory:
          "北正街教堂给长沙增加了一层安静而复杂的质感。它会提醒学生：中国城市不是单一颜色的，市井生活、老建筑、信仰、商业和年轻人的拍照散步，可以同时存在于一条街上。",
        studentAngle:
          "Good for students who like photography, architecture, cafes, and slower conversations away from the loudest tourist routes.",
        zhStudentAngle:
          "适合喜欢摄影、建筑、咖啡和慢一点聊天节奏的学生，也适合从热闹路线里短暂抽身。"
      },
      {
        name: "Wangyue Park",
        zhName: "长沙望月公园",
        category: "Daily green space",
        zhCategory: "日常公园",
        district: "Yuelu District",
        zhDistrict: "岳麓区",
        image: "https://image.huaxiafengwu.com/submission/145563/banner/1711005048517",
        sourceUrl: "https://image.huaxiafengwu.com/app/wiki/3/143056/wiki-detail.html?t=1711352119656",
        story:
          "Wangyue Park shows the softer side of Changsha. For international students, parks like this matter because they make a city livable: morning walks, evening talks, language practice, and a place to breathe between classes.",
        zhStory:
          "望月公园呈现的是长沙柔软的一面。对留学生来说，这样的公园很重要，因为它让城市变得可生活：晨跑、晚间散步、中文练习、课间喘口气，都需要这样的空间。",
        studentAngle:
          "Best for students choosing Yuelu-side campuses or anyone who wants to feel how Changsha balances study, food, hills, and everyday rest.",
        zhStudentAngle:
          "适合考虑岳麓一侧学校的学生，也适合想感受长沙如何在学习、美食、山水和日常休息之间取得平衡的人。"
      }
    ]
  })
};

export function getCityCulturalInspiration(slug: string) {
  return cityCulturalInspirations[slug];
}
