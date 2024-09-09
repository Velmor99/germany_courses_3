import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "de", "ru"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(de|en|ru)/:path*"],
};
