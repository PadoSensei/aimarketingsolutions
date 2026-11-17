import { describe, it, expect } from "vitest";
import {
  constructMetadata,
  getOrganizationSchema,
  getWebSiteSchema,
  SITE_URL,
  SITE_NAME,
} from "../lib/seo";

describe("SEO Utilities", () => {
  describe("constructMetadata", () => {
    it("generates default metadata with root URL and metadataBase", () => {
      const meta = constructMetadata();
      expect(meta.metadataBase?.toString()).toBe("https://www.aisolutions.irish/");
      expect(meta.description).toBeDefined();
      expect(meta.openGraph?.siteName).toBe(SITE_NAME);
      expect(meta.alternates?.canonical).toBe(SITE_URL);
      expect((meta.alternates?.languages as any)?.en).toBe(SITE_URL);
      expect((meta.alternates?.languages as any)?.["pt-BR"]).toBe(`${SITE_URL}/pt`);
    });

    it("generates custom page metadata with canonical path", () => {
      const meta = constructMetadata({
        title: "Services",
        description: "Explore our automation services.",
        path: "/services",
      });

      expect((meta.title as any)?.default).toBe("Services | AI Solutions");
      expect(meta.description).toBe("Explore our automation services.");
      expect(meta.alternates?.canonical).toBe(`${SITE_URL}/services`);
      expect((meta.alternates?.languages as any)?.en).toBe(`${SITE_URL}/services`);
      expect((meta.alternates?.languages as any)?.["pt-BR"]).toBe(`${SITE_URL}/pt/services`);
    });

    it("handles robots noIndex flag", () => {
      const indexed = constructMetadata({ noIndex: false });
      expect(indexed.robots).toEqual({ index: true, follow: true });

      const noIndexed = constructMetadata({ noIndex: true });
      expect(noIndexed.robots).toEqual({ index: false, follow: false });
    });
  });

  describe("Structured Data Schemas", () => {
    it("generates valid Organization JSON-LD schema", () => {
      const schema = getOrganizationSchema();
      expect(schema["@context"]).toBe("https://schema.org");
      expect(schema["@type"]).toBe("Organization");
      expect(schema.name).toBe(SITE_NAME);
      expect(schema.url).toBe(SITE_URL);
      expect(schema.logo).toBe(`${SITE_URL}/images/Logo-White.png`);
      expect(schema.sameAs).toContain("https://www.linkedin.com/company/103651291");
    });

    it("generates valid WebSite JSON-LD schema", () => {
      const schema = getWebSiteSchema();
      expect(schema["@context"]).toBe("https://schema.org");
      expect(schema["@type"]).toBe("WebSite");
      expect(schema.name).toBe(SITE_NAME);
      expect(schema.url).toBe(SITE_URL);
    });
  });
});
