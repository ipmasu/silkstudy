import { NextResponse, type NextRequest } from "next/server";
import { isAppLocale } from "@/lib/i18n/routing";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const firstSegment = request.nextUrl.pathname.split("/").filter(Boolean)[0];
  const locale = firstSegment && isAppLocale(firstSegment) ? firstSegment : "en";

  requestHeaders.set("x-next-intl-locale", locale);

  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });
}

export const config = {
  matcher: ["/((?!api|admin|_next|.*\\..*).*)"]
};
