import { absoluteUrl } from "@/lib/utils";
import { Metadata } from "next";
import "../styles/index.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://outstatic.com"),
  title: {
    default: "AI Solutions",
    template: "%s | Outstatic",
  },
  description: "Your expert on digital marketing",
  openGraph: {
    title: "AI Solutions",
    description: "The evolution of digital marketing.",
    url: absoluteUrl("/"),
    siteName: "Next.js",
    images: [
      {
        url: absoluteUrl("/images/og-image.png"),
        width: 1800,
        height: 1600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [{ url: "/favicon/favicon-32x32.png" }],
    apple: [{ url: "/favicon/favicon-32x32.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
