import { Metadata } from "next";
import "@/styles/index.css";
import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider } from "@/context/LanguageContext";
import Script from "next/script";
import { constructMetadata, getOrganizationSchema, getWebSiteSchema } from "@/lib/seo";
import JsonLd from "@/components/SEO";

export const metadata: Metadata = {
  ...constructMetadata({
    title: undefined,
    description:
      "We help small businesses automate manual tasks using simple, affordable tools — so you can focus on growing instead of grinding.",
    path: "/",
  }),
  metadataBase: new URL("https://www.aisolutions.irish"),
  openGraph: {
    ...constructMetadata({ path: "/" }).openGraph,
    description: "Grow without the grind.",
  },
  twitter: {
    ...constructMetadata({ path: "/" }).twitter,
    description: "Grow without the grind.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = getOrganizationSchema();
  const webSiteSchema = getWebSiteSchema();

  return (
    <html lang="en">
      <head>
        <JsonLd data={[orgSchema, webSiteSchema]} />
      </head>
      <body>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-VWH1WT3KDF"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VWH1WT3KDF');
            `,
          }}
        />
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
