import { Metadata } from "next";
import { absoluteUrl } from "./utils";

export const SITE_URL = "https://www.aisolutions.irish";
export const SITE_NAME = "AI Solutions";
export const DEFAULT_OG_IMAGE = "/images/og-image.png";

export interface ConstructMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

/**
 * Helper to construct standard Next.js Metadata with canonicals and hreflang alternates.
 */
export function constructMetadata({
  title,
  description = "We help small businesses automate manual tasks using simple, affordable tools — so you can focus on growing instead of grinding.",
  path = "",
  image = DEFAULT_OG_IMAGE,
  noIndex = false,
}: ConstructMetadataOptions = {}): Metadata {
  const url = path === "" || path === "/" ? SITE_URL : absoluteUrl(path);
  const ptPath = path === "" || path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  const ptUrl = `${SITE_URL}/pt${ptPath}`;
  const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);

  return {
    title: title
      ? {
          default: `${title} | ${SITE_NAME}`,
          template: `%s | ${SITE_NAME}`,
        }
      : {
          default: SITE_NAME,
          template: `%s | ${SITE_NAME}`,
        },
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: {
        en: url,
        "pt-BR": ptUrl,
      },
    },
    openGraph: {
      title: title ? `${title} | ${SITE_NAME}` : SITE_NAME,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: imageUrl,
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
      title: title ? `${title} | ${SITE_NAME}` : SITE_NAME,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  };
}

/**
 * Root Organization JSON-LD Schema
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/Logo-White.png`,
    sameAs: ["https://www.linkedin.com/company/103651291"],
  };
}

/**
 * Root WebSite JSON-LD Schema
 */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
  };
}
