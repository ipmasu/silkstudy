import { getLocale } from "next-intl/server";
import { SilkStudyCommunity } from "@/components/community/silkstudy-community";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "SilkStudy Community",
  description:
    "Join the SilkStudy community before studying in China. Meet friends, ask questions, join city circles, exchange beautiful things, and discover student events.",
  path: "/community"
});

export default async function CommunityPage() {
  const locale = await getLocale();
  return <SilkStudyCommunity locale={locale} />;
}

