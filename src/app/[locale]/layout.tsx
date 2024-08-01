import Component from "@/components/component/Component";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started

  return (
    <html>
      <body>
        {children}
        <Component></Component>
      </body>
    </html>
  );
}
