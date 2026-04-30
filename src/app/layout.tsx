import { absoluteUrl } from "@/lib/utils";
import { Metadata } from "next";
import "@/styles/index.css";
import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider } from "@/context/LanguageContext";

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
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
