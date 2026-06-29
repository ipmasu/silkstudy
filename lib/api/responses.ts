import { NextResponse } from "next/server";
import type { ZodError } from "zod";

export function unauthorizedResponse() {
  return NextResponse.json({ message: "Admin access required." }, { status: 401 });
}

export function validationErrorResponse(error: ZodError) {
  return NextResponse.json(
    {
      message: "Validation failed.",
      issues: error.flatten().fieldErrors
    },
    { status: 400 }
  );
}

export function serverErrorResponse(error: unknown) {
  const message = error instanceof Error ? error.message : "Unexpected server error.";

  return NextResponse.json(
    {
      message: "Unexpected server error.",
      detail: process.env.NODE_ENV === "development" ? message : undefined
    },
    { status: 500 }
  );
}
