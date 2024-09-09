import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { LayoutCmp } from "@/layout/Layout";
import { routing } from "@/i18n/routing";
import { unstable_setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return routing.locales.map((locale: string) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <LayoutCmp lang={locale}>{children}</LayoutCmp>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
