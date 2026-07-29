import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { SilkStudyCommunity } from "@/components/community/silkstudy-community";
import { buildMetadata } from "@/lib/seo";
import { getCurrentLocale } from "@/lib/i18n/server-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getCurrentLocale();

  return buildMetadata({
    ...({
  title: "SilkStudy Community",
  description:
    "Join the SilkStudy community before studying in China. Meet friends, ask questions, join city circles, exchange beautiful things, and discover student events.",
  path: "/community"
}),
    locale
  });
}

export default async function CommunityPage() {
  const locale = await getLocale();
  return <SilkStudyCommunity locale={locale} />;
}

