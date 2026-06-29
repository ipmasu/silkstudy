import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "zh", "vi"],
  defaultLocale: "en",
  localePrefix: "as-needed"
});

export const config = {
  matcher: ["/((?!api|admin|_next|.*\\..*).*)"]
};
