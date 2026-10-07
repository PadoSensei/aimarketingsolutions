import { absoluteUrl } from "@/lib/utils";
import { Metadata } from "next";
import "@/styles/index.css";
import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider } from "@/context/LanguageContext";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://aisolutions.irish"),
  title: {
    default: "AI Solutions",
    template: "%s | AI Solutions",
  },
  description:
    "We help small businesses automate manual tasks using simple, affordable tools — so you can focus on growing instead of grinding.",
  openGraph: {
    title: "AI Solutions",
    description: "Grow without the grind.",
    url: absoluteUrl("/"),
    siteName: "AI Solutions",
    images: [
      {
        url: absoluteUrl("/images/og-image.png"),
        width: 1800,
        height: 1600,
        alt: "AI Solutions — Automation & AI Coaching",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Solutions",
    description: "Grow without the grind.",
    images: [absoluteUrl("/images/og-image.png")],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
