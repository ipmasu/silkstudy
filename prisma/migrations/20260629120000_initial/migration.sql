-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('STUDENT', 'COUNSELOR', 'ADMIN', 'SUPER_ADMIN');

-- CreateEnum
CREATE TYPE "DegreeLevel" AS ENUM ('LANGUAGE', 'BACHELOR', 'MASTER', 'PHD', 'NON_DEGREE');

-- CreateEnum
CREATE TYPE "ProgramLanguage" AS ENUM ('ENGLISH', 'CHINESE', 'BILINGUAL');

-- CreateEnum
CREATE TYPE "ConsultationStatus" AS ENUM ('NEW', 'CONTACTED', 'APPLIED', 'CONVERTED', 'LOST');

-- CreateEnum
CREATE TYPE "MediaType" AS ENUM ('LOGO', 'COVER', 'PHOTO', 'VIDEO');

-- CreateEnum
CREATE TYPE "ScholarshipType" AS ENUM ('CSC', 'PROVINCIAL', 'UNIVERSITY', 'CITY', 'OTHER');

-- CreateEnum
CREATE TYPE "AdminAction" AS ENUM ('CREATE', 'UPDATE', 'DELETE', 'LOGIN', 'EXPORT', 'STATUS_CHANGE');

-- CreateEnum
CREATE TYPE "ReviewStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "ExternalReviewPlatform" AS ENUM ('DOUYIN', 'TIKTOK', 'XIAOHONGSHU', 'YOUTUBE', 'GOOGLE', 'OTHER');

-- CreateEnum
CREATE TYPE "ExternalReviewImportStatus" AS ENUM ('NEEDS_SOURCE_REVIEW', 'NEEDS_PERMISSION', 'READY_FOR_MODERATION', 'IMPORTED', 'REJECTED');

-- CreateEnum
CREATE TYPE "TravelContentPlatform" AS ENUM ('QUNAR', 'XIAOHONGSHU', 'DIANPING', 'DOUYIN', 'TIKTOK', 'TRIP', 'OFFICIAL_TOURISM', 'WIKIVOYAGE', 'OTHER');

-- CreateEnum
CREATE TYPE "TravelContentStatus" AS ENUM ('NEEDS_REWRITE', 'NEEDS_SOURCE_REVIEW', 'READY_TO_PUBLISH', 'PUBLISHED', 'REJECTED');

-- CreateEnum
CREATE TYPE "CommunityPostType" AS ENUM ('MEETUP', 'TRAVEL_BUDDY', 'LANGUAGE_EXCHANGE', 'CAMPUS_LIFE', 'QUESTION', 'LOCAL_HELP');

-- CreateEnum
CREATE TYPE "CommunityPostStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'CLOSED');

-- CreateEnum
CREATE TYPE "CommunityReportReason" AS ENUM ('SPAM', 'HARASSMENT', 'UNSAFE_MEETUP', 'PERSONAL_INFORMATION', 'MISLEADING', 'OTHER');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "passwordHash" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'STUDENT',
    "country" TEXT,
    "phone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Province" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameZh" TEXT,
    "nameVi" TEXT,
    "description" TEXT,
    "bannerImageUrl" TEXT,
    "mapPath" TEXT,
    "latitude" DECIMAL(9,6),
    "longitude" DECIMAL(9,6),
    "universityCount" INTEGER NOT NULL DEFAULT 0,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Province_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "City" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameZh" TEXT,
    "nameVi" TEXT,
    "provinceId" TEXT NOT NULL,
    "summary" TEXT,
    "livingCostMonthlyUsd" INTEGER,
    "climate" TEXT,
    "visaConvenience" TEXT,
    "studentReviewSummary" TEXT,
    "heroImageUrl" TEXT,
    "latitude" DECIMAL(9,6),
    "longitude" DECIMAL(9,6),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommunityPost" (
    "id" TEXT NOT NULL,
    "authorId" TEXT,
    "cityId" TEXT,
    "type" "CommunityPostType" NOT NULL,
    "status" "CommunityPostStatus" NOT NULL DEFAULT 'PENDING',
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "authorName" TEXT NOT NULL,
    "authorCountry" TEXT,
    "languages" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "eventDate" TIMESTAMP(3),
    "meetingArea" TEXT,
    "contactEmail" TEXT,
    "participantCap" INTEGER,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CommunityPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommunityReply" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "authorId" TEXT,
    "authorName" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "status" "ReviewStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CommunityReply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommunityReport" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "reporterId" TEXT,
    "reason" "CommunityReportReason" NOT NULL,
    "details" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CommunityReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "University" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "chineseName" TEXT,
    "summary" TEXT,
    "description" TEXT,
    "qsRanking" INTEGER,
    "nationalRanking" INTEGER,
    "foundedYear" INTEGER,
    "website" TEXT,
    "provinceId" TEXT NOT NULL,
    "cityId" TEXT NOT NULL,
    "address" TEXT,
    "internationalStudentCount" INTEGER,
    "tuitionMinUsd" INTEGER,
    "tuitionMaxUsd" INTEGER,
    "dormitoryCostUsd" INTEGER,
    "livingCostMonthlyUsd" INTEGER,
    "hasEnglishPrograms" BOOLEAN NOT NULL DEFAULT false,
    "hasScholarships" BOOLEAN NOT NULL DEFAULT false,
    "applicationFeeUsd" INTEGER,
    "admissionEmail" TEXT,
    "campusLifeSummary" TEXT,
    "nearbyLivingSummary" TEXT,
    "nearbyAttractionsSummary" TEXT,
    "internshipCareerSummary" TEXT,
    "safetyAndTransportSummary" TEXT,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "University_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UniversityReview" (
    "id" TEXT NOT NULL,
    "universityId" TEXT NOT NULL,
    "authorName" TEXT NOT NULL,
    "authorCountry" TEXT,
    "program" TEXT,
    "degreeLevel" "DegreeLevel",
    "rating" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "pros" TEXT,
    "cons" TEXT,
    "status" "ReviewStatus" NOT NULL DEFAULT 'PENDING',
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UniversityReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExternalReviewImport" (
    "id" TEXT NOT NULL,
    "universityId" TEXT,
    "platform" "ExternalReviewPlatform" NOT NULL,
    "sourceUrl" TEXT NOT NULL,
    "sourceAuthor" TEXT,
    "sourceLocale" TEXT,
    "originalText" TEXT NOT NULL,
    "translatedText" TEXT,
    "editorialSummary" TEXT,
    "consentStatus" TEXT NOT NULL DEFAULT 'UNVERIFIED',
    "status" "ExternalReviewImportStatus" NOT NULL DEFAULT 'NEEDS_SOURCE_REVIEW',
    "sourceCapturedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExternalReviewImport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TravelContentImport" (
    "id" TEXT NOT NULL,
    "provinceId" TEXT,
    "cityId" TEXT,
    "universityId" TEXT,
    "platform" "TravelContentPlatform" NOT NULL,
    "sourceUrl" TEXT NOT NULL,
    "sourceTitle" TEXT,
    "sourceAuthor" TEXT,
    "sourceLocale" TEXT,
    "originalExcerpt" TEXT NOT NULL,
    "rewrittenSummary" TEXT,
    "highlights" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "studentAngle" TEXT,
    "complianceNotes" TEXT,
    "status" "TravelContentStatus" NOT NULL DEFAULT 'NEEDS_REWRITE',
    "sourceCapturedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TravelContentImport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UniversityMedia" (
    "id" TEXT NOT NULL,
    "universityId" TEXT NOT NULL,
    "type" "MediaType" NOT NULL,
    "url" TEXT NOT NULL,
    "alt" TEXT,
    "publicId" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UniversityMedia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Major" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameZh" TEXT,
    "nameVi" TEXT,
    "category" TEXT NOT NULL,
    "description" TEXT,
    "futureCareer" TEXT,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Major_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UniversityMajor" (
    "id" TEXT NOT NULL,
    "universityId" TEXT NOT NULL,
    "majorId" TEXT NOT NULL,
    "degreeLevel" "DegreeLevel" NOT NULL,
    "programLanguage" "ProgramLanguage" NOT NULL DEFAULT 'ENGLISH',
    "durationYears" DECIMAL(3,1),
    "tuitionUsdPerYear" INTEGER,
    "applicationDeadline" TIMESTAMP(3),
    "intake" TEXT,
    "gpaRequirement" TEXT,
    "languageRequirement" TEXT,
    "hskRequirement" TEXT,
    "ieltsRequirement" TEXT,
    "toeflRequirement" TEXT,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UniversityMajor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Scholarship" (
    "id" TEXT NOT NULL,
    "universityId" TEXT,
    "name" TEXT NOT NULL,
    "type" "ScholarshipType" NOT NULL,
    "coverage" TEXT NOT NULL,
    "eligibility" TEXT,
    "applicationUrl" TEXT,
    "deadline" TIMESTAMP(3),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Scholarship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Consultation" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "targetDegree" "DegreeLevel",
    "targetMajor" TEXT,
    "budgetUsd" INTEGER,
    "preferredCity" TEXT,
    "notes" TEXT,
    "status" "ConsultationStatus" NOT NULL DEFAULT 'NEW',
    "source" TEXT NOT NULL DEFAULT 'website',
    "userId" TEXT,
    "assignedToId" TEXT,
    "universityId" TEXT,
    "cityId" TEXT,
    "majorId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Consultation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CRMNote" (
    "id" TEXT NOT NULL,
    "consultationId" TEXT NOT NULL,
    "authorId" TEXT,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CRMNote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdminLog" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "action" "AdminAction" NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" TEXT,
    "metadata" JSONB,
    "ipAddress" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AdminLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeoMetadata" (
    "id" TEXT NOT NULL,
    "metaTitle" TEXT NOT NULL,
    "metaDescription" TEXT NOT NULL,
    "canonicalUrl" TEXT,
    "ogTitle" TEXT,
    "ogDescription" TEXT,
    "ogImageUrl" TEXT,
    "jsonLd" JSONB,
    "provinceId" TEXT,
    "cityId" TEXT,
    "universityId" TEXT,
    "majorId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SeoMetadata_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "Province_slug_key" ON "Province"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "City_slug_key" ON "City"("slug");

-- CreateIndex
CREATE INDEX "City_provinceId_idx" ON "City"("provinceId");

-- CreateIndex
CREATE INDEX "CommunityPost_cityId_idx" ON "CommunityPost"("cityId");

-- CreateIndex
CREATE INDEX "CommunityPost_type_idx" ON "CommunityPost"("type");

-- CreateIndex
CREATE INDEX "CommunityPost_status_createdAt_idx" ON "CommunityPost"("status", "createdAt");

-- CreateIndex
CREATE INDEX "CommunityReply_postId_status_idx" ON "CommunityReply"("postId", "status");

-- CreateIndex
CREATE INDEX "CommunityReport_postId_idx" ON "CommunityReport"("postId");

-- CreateIndex
CREATE INDEX "CommunityReport_reason_idx" ON "CommunityReport"("reason");

-- CreateIndex
CREATE UNIQUE INDEX "University_slug_key" ON "University"("slug");

-- CreateIndex
CREATE INDEX "University_provinceId_idx" ON "University"("provinceId");

-- CreateIndex
CREATE INDEX "University_cityId_idx" ON "University"("cityId");

-- CreateIndex
CREATE INDEX "University_name_idx" ON "University"("name");

-- CreateIndex
CREATE INDEX "University_qsRanking_idx" ON "University"("qsRanking");

-- CreateIndex
CREATE INDEX "UniversityReview_universityId_idx" ON "UniversityReview"("universityId");

-- CreateIndex
CREATE INDEX "UniversityReview_status_idx" ON "UniversityReview"("status");

-- CreateIndex
CREATE INDEX "UniversityReview_rating_idx" ON "UniversityReview"("rating");

-- CreateIndex
CREATE INDEX "ExternalReviewImport_universityId_idx" ON "ExternalReviewImport"("universityId");

-- CreateIndex
CREATE INDEX "ExternalReviewImport_platform_idx" ON "ExternalReviewImport"("platform");

-- CreateIndex
CREATE INDEX "ExternalReviewImport_status_idx" ON "ExternalReviewImport"("status");

-- CreateIndex
CREATE UNIQUE INDEX "ExternalReviewImport_platform_sourceUrl_key" ON "ExternalReviewImport"("platform", "sourceUrl");

-- CreateIndex
CREATE INDEX "TravelContentImport_provinceId_idx" ON "TravelContentImport"("provinceId");

-- CreateIndex
CREATE INDEX "TravelContentImport_cityId_idx" ON "TravelContentImport"("cityId");

-- CreateIndex
CREATE INDEX "TravelContentImport_universityId_idx" ON "TravelContentImport"("universityId");

-- CreateIndex
CREATE INDEX "TravelContentImport_platform_idx" ON "TravelContentImport"("platform");

-- CreateIndex
CREATE INDEX "TravelContentImport_status_idx" ON "TravelContentImport"("status");

-- CreateIndex
CREATE UNIQUE INDEX "TravelContentImport_platform_sourceUrl_key" ON "TravelContentImport"("platform", "sourceUrl");

-- CreateIndex
CREATE INDEX "UniversityMedia_universityId_type_idx" ON "UniversityMedia"("universityId", "type");

-- CreateIndex
CREATE UNIQUE INDEX "Major_slug_key" ON "Major"("slug");

-- CreateIndex
CREATE INDEX "Major_name_idx" ON "Major"("name");

-- CreateIndex
CREATE INDEX "Major_category_idx" ON "Major"("category");

-- CreateIndex
CREATE INDEX "UniversityMajor_majorId_idx" ON "UniversityMajor"("majorId");

-- CreateIndex
CREATE INDEX "UniversityMajor_degreeLevel_idx" ON "UniversityMajor"("degreeLevel");

-- CreateIndex
CREATE UNIQUE INDEX "UniversityMajor_universityId_majorId_degreeLevel_programLan_key" ON "UniversityMajor"("universityId", "majorId", "degreeLevel", "programLanguage");

-- CreateIndex
CREATE INDEX "Scholarship_universityId_idx" ON "Scholarship"("universityId");

-- CreateIndex
CREATE INDEX "Scholarship_type_idx" ON "Scholarship"("type");

-- CreateIndex
CREATE UNIQUE INDEX "Scholarship_universityId_name_key" ON "Scholarship"("universityId", "name");

-- CreateIndex
CREATE INDEX "Consultation_email_idx" ON "Consultation"("email");

-- CreateIndex
CREATE INDEX "Consultation_status_idx" ON "Consultation"("status");

-- CreateIndex
CREATE INDEX "Consultation_createdAt_idx" ON "Consultation"("createdAt");

-- CreateIndex
CREATE INDEX "CRMNote_consultationId_idx" ON "CRMNote"("consultationId");

-- CreateIndex
CREATE INDEX "AdminLog_userId_idx" ON "AdminLog"("userId");

-- CreateIndex
CREATE INDEX "AdminLog_entityType_entityId_idx" ON "AdminLog"("entityType", "entityId");

-- CreateIndex
CREATE UNIQUE INDEX "SeoMetadata_provinceId_key" ON "SeoMetadata"("provinceId");

-- CreateIndex
CREATE UNIQUE INDEX "SeoMetadata_cityId_key" ON "SeoMetadata"("cityId");

-- CreateIndex
CREATE UNIQUE INDEX "SeoMetadata_universityId_key" ON "SeoMetadata"("universityId");

-- CreateIndex
CREATE UNIQUE INDEX "SeoMetadata_majorId_key" ON "SeoMetadata"("majorId");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "Province"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityPost" ADD CONSTRAINT "CommunityPost_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityPost" ADD CONSTRAINT "CommunityPost_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityReply" ADD CONSTRAINT "CommunityReply_postId_fkey" FOREIGN KEY ("postId") REFERENCES "CommunityPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityReply" ADD CONSTRAINT "CommunityReply_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityReport" ADD CONSTRAINT "CommunityReport_postId_fkey" FOREIGN KEY ("postId") REFERENCES "CommunityPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityReport" ADD CONSTRAINT "CommunityReport_reporterId_fkey" FOREIGN KEY ("reporterId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "University" ADD CONSTRAINT "University_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "Province"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "University" ADD CONSTRAINT "University_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UniversityReview" ADD CONSTRAINT "UniversityReview_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "University"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExternalReviewImport" ADD CONSTRAINT "ExternalReviewImport_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "University"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TravelContentImport" ADD CONSTRAINT "TravelContentImport_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "Province"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TravelContentImport" ADD CONSTRAINT "TravelContentImport_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TravelContentImport" ADD CONSTRAINT "TravelContentImport_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "University"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UniversityMedia" ADD CONSTRAINT "UniversityMedia_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "University"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UniversityMajor" ADD CONSTRAINT "UniversityMajor_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "University"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UniversityMajor" ADD CONSTRAINT "UniversityMajor_majorId_fkey" FOREIGN KEY ("majorId") REFERENCES "Major"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Scholarship" ADD CONSTRAINT "Scholarship_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "University"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consultation" ADD CONSTRAINT "Consultation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consultation" ADD CONSTRAINT "Consultation_assignedToId_fkey" FOREIGN KEY ("assignedToId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consultation" ADD CONSTRAINT "Consultation_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "University"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consultation" ADD CONSTRAINT "Consultation_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consultation" ADD CONSTRAINT "Consultation_majorId_fkey" FOREIGN KEY ("majorId") REFERENCES "Major"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CRMNote" ADD CONSTRAINT "CRMNote_consultationId_fkey" FOREIGN KEY ("consultationId") REFERENCES "Consultation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdminLog" ADD CONSTRAINT "AdminLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeoMetadata" ADD CONSTRAINT "SeoMetadata_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "Province"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeoMetadata" ADD CONSTRAINT "SeoMetadata_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeoMetadata" ADD CONSTRAINT "SeoMetadata_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "University"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeoMetadata" ADD CONSTRAINT "SeoMetadata_majorId_fkey" FOREIGN KEY ("majorId") REFERENCES "Major"("id") ON DELETE CASCADE ON UPDATE CASCADE;

