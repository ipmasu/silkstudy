import { ReviewModerationPage } from "@/components/admin/review-moderation-page";

const fallbackReviews = [
  {
    authorName: "Amina R.",
    rating: 5,
    status: "APPROVED",
    title: "Academic pressure is real, but the city opens many doors",
    content: "The campus is beautiful and the international office helped me settle in.",
    isVerified: true,
    university: { name: "Peking University" }
  },
  {
    authorName: "Lucas P.",
    rating: 4,
    status: "PENDING",
    title: "A good balance of study and lifestyle",
    content: "Hangzhou is beautiful and not as overwhelming as bigger cities.",
    isVerified: false,
    university: { name: "Zhejiang University" }
  }
];

export default function AdminReviewsPage() {
  return <ReviewModerationPage fallbackReviews={fallbackReviews} />;
}
