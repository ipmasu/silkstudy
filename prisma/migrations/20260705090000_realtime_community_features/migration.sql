CREATE TABLE "GlobalCheckin" (
    "id" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "countryName" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "tagline" TEXT NOT NULL,
    "countryCharm" TEXT NOT NULL,
    "travelStudyReason" TEXT NOT NULL,
    "specialties" TEXT NOT NULL,
    "status" "ReviewStatus" NOT NULL DEFAULT 'APPROVED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GlobalCheckin_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "BeautyExchange" (
    "id" TEXT NOT NULL,
    "ownerName" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "offer" TEXT NOT NULL,
    "wish" TEXT NOT NULL,
    "story" TEXT NOT NULL,
    "shipping" TEXT NOT NULL,
    "status" "ReviewStatus" NOT NULL DEFAULT 'APPROVED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BeautyExchange_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "GlobalCheckin_countryCode_idx" ON "GlobalCheckin"("countryCode");
CREATE INDEX "GlobalCheckin_status_createdAt_idx" ON "GlobalCheckin"("status", "createdAt");
CREATE INDEX "BeautyExchange_country_idx" ON "BeautyExchange"("country");
CREATE INDEX "BeautyExchange_status_createdAt_idx" ON "BeautyExchange"("status", "createdAt");
