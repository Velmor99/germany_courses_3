import { LayoutCmp } from "@/components/Layout/Layout";

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
        <LayoutCmp>{children}</LayoutCmp>
      </body>
    </html>
  );
}
