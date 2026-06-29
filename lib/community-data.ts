export type CommunityPostView = {
  id: string;
  type: "MEETUP" | "TRAVEL_BUDDY" | "LANGUAGE_EXCHANGE" | "CAMPUS_LIFE" | "QUESTION" | "LOCAL_HELP";
  title: string;
  content: string;
  authorName: string;
  authorCountry: string;
  citySlug: string;
  cityName: string;
  languages: string[];
  eventDate?: string;
  meetingArea?: string;
  replyCount: number;
};

export const communityPostFallbacks: CommunityPostView[] = [
  {
    id: "beijing-language-exchange",
    type: "LANGUAGE_EXCHANGE",
    title: "Mandarin and English exchange near Wudaokou",
    content: "A relaxed weekly coffee meetup for international students and local students. Beginners are welcome; the goal is conversation, friendship, and helping each other settle into Beijing.",
    authorName: "Maya",
    authorCountry: "Kenya",
    citySlug: "beijing",
    cityName: "Beijing",
    languages: ["English", "Mandarin"],
    meetingArea: "Wudaokou public cafe area",
    replyCount: 8
  },
  {
    id: "shanghai-weekend-walk",
    type: "MEETUP",
    title: "Saturday architecture walk and affordable lunch",
    content: "Looking for a small group to explore historic streets, take photos, and share a local lunch. Public places only and everyone pays their own costs.",
    authorName: "Lucas",
    authorCountry: "Brazil",
    citySlug: "shanghai",
    cityName: "Shanghai",
    languages: ["English", "Portuguese", "Mandarin"],
    eventDate: "2026-06-13T02:00:00.000Z",
    meetingArea: "People's Square metro station",
    replyCount: 5
  },
  {
    id: "chengdu-travel-buddy",
    type: "TRAVEL_BUDDY",
    title: "Weekend trip from Chengdu to Dujiangyan",
    content: "Two graduate students planning a daytime train trip to Dujiangyan. We want to meet other students interested in history, nature, and practicing Chinese.",
    authorName: "Amina",
    authorCountry: "Morocco",
    citySlug: "chengdu",
    cityName: "Chengdu",
    languages: ["Arabic", "French", "English", "Mandarin"],
    eventDate: "2026-06-20T00:30:00.000Z",
    meetingArea: "Chengdu railway station public concourse",
    replyCount: 12
  },
  {
    id: "hangzhou-new-student-help",
    type: "LOCAL_HELP",
    title: "New student checklist: transit card, SIM, and daily essentials",
    content: "I recently completed registration in Hangzhou and can share a simple checklist for the first week. Please keep questions in the public replies so future students can benefit too.",
    authorName: "Thanh",
    authorCountry: "Vietnam",
    citySlug: "hangzhou",
    cityName: "Hangzhou",
    languages: ["Vietnamese", "English", "Mandarin"],
    meetingArea: "Online discussion",
    replyCount: 16
  }
];

