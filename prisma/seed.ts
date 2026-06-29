import {
  DegreeLevel,
  PrismaClient,
  ProgramLanguage,
  ReviewStatus,
  ScholarshipType,
  UserRole
} from "@prisma/client";
import bcrypt from "bcryptjs";
import { getCatalogUniversities } from "../lib/catalog/international-university-directory";
import { getScholarshipDetails } from "../lib/scholarship-details";
import {
  cities as siteCities,
  majors as siteMajors,
  provinces as siteProvinces,
  universities as siteUniversities,
  type University
} from "../lib/site-data";

const prisma = new PrismaClient();

const provinceZh: Record<string, string> = {
  china: "中国",
  beijing: "北京",
  shanghai: "上海",
  zhejiang: "浙江",
  jiangsu: "江苏",
  guangdong: "广东",
  hubei: "湖北",
  shaanxi: "陕西",
  sichuan: "四川",
  fujian: "福建",
  tianjin: "天津",
  shandong: "山东",
  anhui: "安徽",
  heilongjiang: "黑龙江",
  hunan: "湖南"
};

const cityZh: Record<string, string> = {
  china: "中国",
  beijing: "北京",
  shanghai: "上海",
  hangzhou: "杭州",
  nanjing: "南京",
  guangzhou: "广州",
  wuhan: "武汉",
  xian: "西安",
  chengdu: "成都",
  xiamen: "厦门",
  tianjin: "天津",
  jinan: "济南",
  hefei: "合肥",
  harbin: "哈尔滨",
  changsha: "长沙"
};

const cityProvinceSlug: Record<string, string> = {
  china: "china",
  beijing: "beijing",
  shanghai: "shanghai",
  hangzhou: "zhejiang",
  nanjing: "jiangsu",
  guangzhou: "guangdong",
  wuhan: "hubei",
  xian: "shaanxi",
  chengdu: "sichuan",
  xiamen: "fujian",
  tianjin: "tianjin",
  jinan: "shandong",
  hefei: "anhui",
  harbin: "heilongjiang",
  changsha: "hunan"
};

const majorMeta: Record<string, { slug: string; category: string; nameZh: string; futureCareer: string }> = {
  "Computer Science": {
    slug: "computer-science",
    category: "Technology",
    nameZh: "计算机科学",
    futureCareer: "Software engineering, cloud computing, product development, data platforms, and AI applications."
  },
  "Artificial Intelligence": {
    slug: "artificial-intelligence",
    category: "Technology",
    nameZh: "人工智能",
    futureCareer: "Machine learning, robotics, computer vision, intelligent systems, and research engineering."
  },
  Medicine: {
    slug: "medicine",
    category: "Health Sciences",
    nameZh: "医学",
    futureCareer: "Clinical medicine, public health, biomedical research, hospital administration, and healthcare services."
  },
  Engineering: {
    slug: "engineering",
    category: "Engineering",
    nameZh: "工程",
    futureCareer: "Manufacturing, civil engineering, electronics, energy, robotics, and industrial technology."
  },
  Business: {
    slug: "business",
    category: "Business",
    nameZh: "商科",
    futureCareer: "Finance, consulting, trade, marketing, entrepreneurship, and international business."
  },
  "Chinese Language": {
    slug: "chinese-language",
    category: "Language",
    nameZh: "汉语言",
    futureCareer: "Translation, education, China market roles, international relations, and cultural exchange."
  },
  Architecture: {
    slug: "architecture",
    category: "Design and Built Environment",
    nameZh: "建筑学",
    futureCareer: "Architecture, urban planning, interior design, construction management, and real estate development."
  },
  Aerospace: {
    slug: "aerospace",
    category: "Engineering",
    nameZh: "航空航天",
    futureCareer: "Aerospace systems, mechanical design, materials, aviation manufacturing, and research labs."
  },
  Physics: {
    slug: "physics",
    category: "Science",
    nameZh: "物理",
    futureCareer: "Research, quantum technology, semiconductor industry, data science, and advanced engineering."
  },
  "Marine Science": {
    slug: "marine-science",
    category: "Science",
    nameZh: "海洋科学",
    futureCareer: "Marine economy, ocean engineering, environmental research, logistics, and coastal development."
  }
};

function parseMoneyRange(value: string) {
  const numbers = value.match(/\d[\d,]*/g)?.map((item) => Number(item.replace(/,/g, ""))) ?? [];

  return {
    min: numbers[0] ?? null,
    max: numbers[1] ?? numbers[0] ?? null
  };
}

function parseCount(value: string) {
  return Number(value.match(/\d[\d,]*/)?.[0]?.replace(/,/g, "")) || null;
}

function majorSlug(major: string) {
  return majorMeta[major]?.slug ?? major.toLowerCase().replaceAll(" ", "-");
}

function titleFromSlug(slug: string) {
  if (slug === "xian") return "Xi'an";
  if (slug === "hohhot") return "Hohhot";
  if (slug === "urumqi") return "Urumqi";

  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

async function seedAdmin() {
  const email = process.env.SEED_ADMIN_EMAIL;
  const password = process.env.SEED_ADMIN_PASSWORD;

  if (!email || !password) return;

  const passwordHash = await bcrypt.hash(password, 12);

  await prisma.user.upsert({
    where: { email },
    update: {
      passwordHash,
      role: UserRole.SUPER_ADMIN,
      name: "SilkStudy Admin"
    },
    create: {
      email,
      passwordHash,
      role: UserRole.SUPER_ADMIN,
      name: "SilkStudy Admin"
    }
  });
}

async function seedProvinces() {
  const provinces = [
    {
      slug: "china",
      name: "China",
      cityCount: 1,
      universityCount: 0,
      summary: "National baseline bucket for international-student directory records that still need province and city verification."
    },
    ...siteProvinces
  ];

  for (const province of provinces) {
    await prisma.province.upsert({
      where: { slug: province.slug },
      update: {
        name: province.name,
        nameZh: provinceZh[province.slug],
        description: province.summary,
        universityCount: province.universityCount,
        isFeatured: province.slug !== "china"
      },
      create: {
        slug: province.slug,
        name: province.name,
        nameZh: provinceZh[province.slug],
        description: province.summary,
        universityCount: province.universityCount,
        isFeatured: province.slug !== "china"
      }
    });
  }
}

async function seedCities() {
  const cities = [
    {
      slug: "china",
      name: "China",
      province: "China",
      livingCost: "$500-1,200/month",
      climate: "Varies by province",
      visaConvenience: "Verify by university and city",
      summary: "National baseline bucket for university records awaiting city-level enrichment."
    },
    ...siteCities
  ];

  for (const city of cities) {
    const provinceSlug = city.slug === "china" ? "china" : cityProvinceSlug[city.slug] ?? city.province.toLowerCase().replaceAll("'", "").replaceAll(" ", "-");
    const province = await prisma.province.findUniqueOrThrow({ where: { slug: provinceSlug } });
    const livingCost = parseMoneyRange(city.livingCost);

    await prisma.city.upsert({
      where: { slug: city.slug },
      update: {
        name: city.name,
        nameZh: cityZh[city.slug],
        provinceId: province.id,
        summary: city.summary,
        livingCostMonthlyUsd: livingCost.min,
        climate: city.climate,
        visaConvenience: city.visaConvenience,
        studentReviewSummary: `Students in ${city.name} compare universities by academic fit, living cost, transport, and internship access.`
      },
      create: {
        slug: city.slug,
        name: city.name,
        nameZh: cityZh[city.slug],
        provinceId: province.id,
        summary: city.summary,
        livingCostMonthlyUsd: livingCost.min,
        climate: city.climate,
        visaConvenience: city.visaConvenience,
        studentReviewSummary: `Students in ${city.name} compare universities by academic fit, living cost, transport, and internship access.`
      }
    });
  }
}

async function seedMajors() {
  for (const major of siteMajors) {
    const meta = majorMeta[major];

    await prisma.major.upsert({
      where: { slug: majorSlug(major) },
      update: {
        name: major,
        nameZh: meta?.nameZh,
        category: meta?.category ?? "Academic Program",
        description: `Study ${major} in China through bachelor, master, PhD, and non-degree pathways.`,
        futureCareer: meta?.futureCareer,
        isFeatured: true
      },
      create: {
        slug: majorSlug(major),
        name: major,
        nameZh: meta?.nameZh,
        category: meta?.category ?? "Academic Program",
        description: `Study ${major} in China through bachelor, master, PhD, and non-degree pathways.`,
        futureCareer: meta?.futureCareer,
        isFeatured: true
      }
    });
  }
}

async function seedUniversity(university: University, options: { curated: boolean }) {
  const province = await prisma.province.upsert({
    where: { slug: university.provinceSlug },
    update: {},
    create: {
      slug: university.provinceSlug,
      name: titleFromSlug(university.provinceSlug),
      nameZh: provinceZh[university.provinceSlug],
      description: "Catalog province placeholder created from international-student university baseline data.",
      isFeatured: false
    }
  });
  const city = await prisma.city.upsert({
    where: { slug: university.citySlug },
    update: {},
    create: {
      slug: university.citySlug,
      name: university.location === "China" ? titleFromSlug(university.citySlug) : university.location,
      nameZh: cityZh[university.citySlug],
      provinceId: province.id,
      summary: "Catalog city placeholder created from international-student university baseline data.",
      climate: "Verify by city",
      visaConvenience: "Verify by university"
    }
  });
  const siteCity = siteCities.find((item) => item.slug === university.citySlug);
  const tuition = parseMoneyRange(university.tuition);
  const livingCost = siteCity ? parseMoneyRange(siteCity.livingCost).min : null;
  const verifiedRanking = university.qsRanking > 0 && university.qsRanking < 900 ? university.qsRanking : null;
  const verifiedFoundedYear = university.foundedYear > 0 ? university.foundedYear : null;
  const verifiedWebsite = university.website === "#" ? null : university.website;

  const createdUniversity = await prisma.university.upsert({
    where: { slug: university.slug },
    update: {
      name: university.name,
      chineseName: university.chineseName,
      summary: university.summary,
      description: university.summary,
      provinceId: province.id,
      cityId: city.id,
      qsRanking: verifiedRanking,
      foundedYear: verifiedFoundedYear,
      website: verifiedWebsite,
      internationalStudentCount: parseCount(university.internationalStudents),
      tuitionMinUsd: tuition.min,
      tuitionMaxUsd: tuition.max,
      dormitoryCostUsd: options.curated ? 1200 : null,
      livingCostMonthlyUsd: livingCost,
      campusLifeSummary: university.campusLife.foodAndDailyLife,
      nearbyLivingSummary: university.campusLife.nearbyLiving,
      nearbyAttractionsSummary: university.campusLife.tourism,
      internshipCareerSummary: university.campusLife.internshipsAndCareers,
      safetyAndTransportSummary: university.campusLife.transportAndSafety,
      hasEnglishPrograms: options.curated,
      hasScholarships: university.scholarships.length > 0,
      isFeatured: options.curated && (verifiedRanking ?? 999) <= 100,
      isPublished: true
    },
    create: {
      slug: university.slug,
      name: university.name,
      chineseName: university.chineseName,
      summary: university.summary,
      description: university.summary,
      provinceId: province.id,
      cityId: city.id,
      qsRanking: verifiedRanking,
      foundedYear: verifiedFoundedYear,
      website: verifiedWebsite,
      internationalStudentCount: parseCount(university.internationalStudents),
      tuitionMinUsd: tuition.min,
      tuitionMaxUsd: tuition.max,
      dormitoryCostUsd: options.curated ? 1200 : null,
      livingCostMonthlyUsd: livingCost,
      campusLifeSummary: university.campusLife.foodAndDailyLife,
      nearbyLivingSummary: university.campusLife.nearbyLiving,
      nearbyAttractionsSummary: university.campusLife.tourism,
      internshipCareerSummary: university.campusLife.internshipsAndCareers,
      safetyAndTransportSummary: university.campusLife.transportAndSafety,
      hasEnglishPrograms: options.curated,
      hasScholarships: university.scholarships.length > 0,
      isFeatured: options.curated && (verifiedRanking ?? 999) <= 100,
      isPublished: true
    }
  });

  for (const major of university.majors) {
    const createdMajor = await prisma.major.findUniqueOrThrow({ where: { slug: majorSlug(major) } });

    await prisma.universityMajor.upsert({
      where: {
        universityId_majorId_degreeLevel_programLanguage: {
          universityId: createdUniversity.id,
          majorId: createdMajor.id,
          degreeLevel: DegreeLevel.BACHELOR,
          programLanguage: ProgramLanguage.ENGLISH
        }
      },
      update: {
        tuitionUsdPerYear: tuition.min,
        isPublished: true
      },
      create: {
        universityId: createdUniversity.id,
        majorId: createdMajor.id,
        degreeLevel: DegreeLevel.BACHELOR,
        programLanguage: ProgramLanguage.ENGLISH,
        durationYears: 4,
        tuitionUsdPerYear: tuition.min,
        languageRequirement: options.curated ? "IELTS 6.0 or equivalent" : "Verify with the university international admissions office",
        ieltsRequirement: options.curated ? "6.0+ recommended" : null,
        hskRequirement: "Required for Chinese-taught programs",
        intake: "September intake",
        isPublished: true
      }
    });
  }

  for (const scholarship of getScholarshipDetails(university).filter((item) => item.type !== "To verify")) {
    const scholarshipName = scholarship.name;
    const scholarshipType = scholarship.type === "CSC"
      ? ScholarshipType.CSC
      : scholarship.type === "Provincial / Municipal"
        ? ScholarshipType.PROVINCIAL
        : scholarship.type === "Special"
          ? ScholarshipType.OTHER
          : ScholarshipType.UNIVERSITY;

    await prisma.scholarship.upsert({
      where: {
        universityId_name: {
          universityId: createdUniversity.id,
          name: scholarshipName
        }
      },
      update: {
        type: scholarshipType,
        coverage: scholarship.coverage,
        eligibility: `${scholarship.eligibility} Renewal: ${scholarship.renewal}`,
        isActive: true
      },
      create: {
        universityId: createdUniversity.id,
        name: scholarshipName,
        type: scholarshipType,
        coverage: scholarship.coverage,
        eligibility: `${scholarship.eligibility} Renewal: ${scholarship.renewal}`,
        isActive: true
      }
    });
  }

  if (options.curated) {
    for (const review of university.reviews) {
      const existingReview = await prisma.universityReview.findFirst({
        where: {
          universityId: createdUniversity.id,
          authorName: review.authorName,
          title: review.title
        }
      });

      if (!existingReview) {
        await prisma.universityReview.create({
          data: {
            universityId: createdUniversity.id,
            authorName: review.authorName,
            authorCountry: review.authorCountry,
            program: review.program,
            rating: review.rating,
            title: review.title,
            content: review.content,
            pros: review.pros,
            cons: review.cons,
            status: ReviewStatus.APPROVED,
            isVerified: review.isVerified
          }
        });
      }
    }
  }
}

async function seedConsultations() {
  const admin = process.env.SEED_ADMIN_EMAIL
    ? await prisma.user.findUnique({ where: { email: process.env.SEED_ADMIN_EMAIL } })
    : null;

  if (!admin) return;

  await prisma.consultation.upsert({
    where: { id: "seed-lead-amina" },
    update: {
      status: "NEW",
      assignedToId: admin.id
    },
    create: {
      id: "seed-lead-amina",
      firstName: "Amina",
      lastName: "Rahman",
      country: "Bangladesh",
      email: "amina@example.com",
      phone: "+8801000000000",
      targetDegree: DegreeLevel.BACHELOR,
      targetMajor: "Medicine",
      budgetUsd: 8000,
      preferredCity: "Shanghai",
      notes: "Interested in English-taught medicine and scholarship options.",
      status: "NEW",
      assignedToId: admin.id
    }
  });

  await prisma.consultation.upsert({
    where: { id: "seed-lead-daniel" },
    update: {
      status: "CONTACTED",
      assignedToId: admin.id
    },
    create: {
      id: "seed-lead-daniel",
      firstName: "Daniel",
      lastName: "Nguyen",
      country: "Vietnam",
      email: "daniel@example.com",
      phone: "+84000000000",
      targetDegree: DegreeLevel.MASTER,
      targetMajor: "Computer Science",
      budgetUsd: 10000,
      preferredCity: "Hangzhou",
      notes: "Needs shortlist for CS and AI programs with internship opportunities.",
      status: "CONTACTED",
      assignedToId: admin.id
    }
  });
}

async function main() {
  await seedAdmin();
  await seedProvinces();
  await seedCities();
  await seedMajors();

  const curatedSlugs = new Set(siteUniversities.map((university) => university.slug));

  for (const university of siteUniversities) {
    await seedUniversity(university, { curated: true });
  }

  for (const university of getCatalogUniversities(siteUniversities)) {
    if (curatedSlugs.has(university.slug)) continue;
    await seedUniversity(university, { curated: false });
  }

  await seedConsultations();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
