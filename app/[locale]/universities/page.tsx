import UniversitiesPage, { metadata } from "@/app/universities/page";

export { metadata };

type SearchParams = Promise<{
  q?: string;
  province?: string;
  city?: string;
  major?: string;
  scholarship?: string;
  sort?: string;
}>;

export default function LocalizedUniversitiesPage({ searchParams }: { searchParams: SearchParams }) {
  return <UniversitiesPage searchParams={searchParams} />;
}
