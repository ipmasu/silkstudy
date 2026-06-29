import { prisma } from "@/lib/prisma";
import { getCatalogUniversities, getCatalogUniversityBySlug } from "@/lib/catalog/international-university-directory";
import { getUniversity, universities, type University } from "@/lib/site-data";

type DbUniversity = Awaited<ReturnType<typeof fetchDbUniversity>>;
const hasDatabaseUrl = Boolean(process.env.DATABASE_URL);

function formatUsdRange(min?: number | null, max?: number | null) {
  if (!min && !max) return "Contact for latest tuition";
  if (min && max) return `$${min.toLocaleString()}-$${max.toLocaleString()}/year`;
  return `$${(min ?? max ?? 0).toLocaleString()}/year`;
}

async function fetchDbUniversity(slug: string) {
  if (!hasDatabaseUrl) return null;

  return prisma.university.findUnique({
    where: {
      slug,
      isPublished: true
    },
    include: {
      city: true,
      province: true,
      programs: {
        include: {
          major: true
        }
      },
      scholarships: {
        where: {
          isActive: true
        }
      },
      media: {
        orderBy: [{ type: "asc" }, { sortOrder: "asc" }]
      },
      reviews: {
        where: {
          status: "APPROVED"
        },
        orderBy: {
          createdAt: "desc"
        },
        take: 12
      }
    }
  });
}

function dbUniversityToViewModel(university: NonNullable<DbUniversity>): University {
  return {
    slug: university.slug,
    name: university.name,
    chineseName: university.chineseName ?? university.name,
    qsRanking: university.qsRanking ?? 0,
    tuition: formatUsdRange(university.tuitionMinUsd, university.tuitionMaxUsd),
    location: university.city.name,
    citySlug: university.city.slug,
    provinceSlug: university.province.slug,
    foundedYear: university.foundedYear ?? 0,
    website: university.website ?? "#",
    internationalStudents: university.internationalStudentCount
      ? `${university.internationalStudentCount.toLocaleString()}+`
      : "Contact for latest count",
    majors: university.programs.map((program) => program.major.name),
    scholarships: university.scholarships.map((scholarship) => scholarship.name),
    summary: university.summary ?? university.description ?? "University profile is being updated.",
    campusLife: {
      nearbyLiving: university.nearbyLivingSummary ?? university.campusLifeSummary ?? "Campus living guide is being updated.",
      foodAndDailyLife: university.campusLifeSummary ?? "Food and daily life information is being updated.",
      tourism: university.nearbyAttractionsSummary ?? "Nearby tourism information is being updated.",
      internshipsAndCareers: university.internshipCareerSummary ?? "Internship and career information is being updated.",
      transportAndSafety: university.safetyAndTransportSummary ?? "Transport and safety information is being updated."
    },
    media: university.media.map((item) => ({
      type: item.type,
      url: item.url,
      alt: item.alt ?? undefined,
      publicId: item.publicId ?? undefined,
      sortOrder: item.sortOrder
    })),
    reviews: university.reviews.map((review) => ({
      authorName: review.authorName,
      authorCountry: review.authorCountry ?? "International student",
      program: review.program ?? "Student",
      rating: review.rating,
      title: review.title,
      content: review.content,
      pros: review.pros ?? "Helpful academic and city experience",
      cons: review.cons ?? "Some details vary by program and campus",
      isVerified: review.isVerified
    }))
  };
}

export async function getUniversityView(slug: string) {
  try {
    const university = await fetchDbUniversity(slug);
    if (university) return dbUniversityToViewModel(university);
  } catch {
    // Static content keeps the public site available before DATABASE_URL is configured.
  }

  return getUniversity(slug);
}

export async function getUniversityCatalogView(slug: string) {
  const curated = await getUniversityView(slug);
  if (curated) return curated;

  return getCatalogUniversityBySlug(slug, universities);
}

export async function getFeaturedUniversitiesView() {
  if (!hasDatabaseUrl) return universities;

  try {
    const dbUniversities = await prisma.university.findMany({
      where: {
        isPublished: true,
        isFeatured: true
      },
      include: {
        city: true,
        province: true,
        programs: {
          include: {
            major: true
          }
        },
        scholarships: {
          where: {
            isActive: true
          }
        },
        media: {
          orderBy: [{ type: "asc" }, { sortOrder: "asc" }]
        },
        reviews: {
          where: {
            status: "APPROVED"
          },
          take: 3
        }
      },
      orderBy: [{ qsRanking: "asc" }, { name: "asc" }],
      take: 8
    });

    if (dbUniversities.length > 0) {
      const dbViews = dbUniversities.map(dbUniversityToViewModel);
      const dbSlugs = new Set(dbViews.map((university) => university.slug));
      const staticComplements = universities.filter((university) => !dbSlugs.has(university.slug));

      return [...dbViews, ...staticComplements];
    }
  } catch {
    // Static fallback is intentional for first-run development.
  }

  return universities;
}

export async function getAllUniversitiesView() {
  const featured = await getFeaturedUniversitiesView();
  return getCatalogUniversities(featured);
}
