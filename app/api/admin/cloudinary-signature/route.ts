import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/guards";
import { unauthorizedResponse } from "@/lib/api/responses";
import { cloudinary } from "@/lib/storage/cloudinary";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const session = await requireAdmin();
  if (!session) return unauthorizedResponse();

  const body = await request.json().catch(() => ({}));
  const folder = typeof body.folder === "string" ? body.folder : "silkstudy/uploads";
  const timestamp = Math.round(Date.now() / 1000);

  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp,
      folder
    },
    process.env.CLOUDINARY_API_SECRET ?? ""
  );

  return NextResponse.json({
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    timestamp,
    folder,
    signature
  });
}
