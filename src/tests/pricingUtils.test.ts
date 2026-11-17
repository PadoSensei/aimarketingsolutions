import { describe, it, expect } from "vitest";
import {
  getCurrencyForLocale,
  formatCurrency,
  formatDualCurrency,
  getFormattedPrice,
  PRICING_DATA,
} from "../lib/pricingUtils";

describe("pricingUtils", () => {
  describe("getCurrencyForLocale", () => {
    it("defaults to EUR for 'en' or undefined locale", () => {
      expect(getCurrencyForLocale("en")).toBe("EUR");
      expect(getCurrencyForLocale(undefined)).toBe("EUR");
      expect(getCurrencyForLocale(null)).toBe("EUR");
    });

    it("defaults to BRL for 'pt' locale", () => {
      expect(getCurrencyForLocale("pt")).toBe("BRL");
    });

    it("respects currencyOverride regardless of locale", () => {
      expect(getCurrencyForLocale("en", "BRL")).toBe("BRL");
      expect(getCurrencyForLocale("pt", "EUR")).toBe("EUR");
    });
  });

  describe("formatCurrency", () => {
    it("formats EUR correctly", () => {
      const formatted = formatCurrency(49, "EUR", "en");
      expect(formatted).toContain("€");
      expect(formatted).toContain("49");
    });

    it("formats BRL correctly", () => {
      const formatted = formatCurrency(49, "BRL", "pt");
      expect(formatted).toContain("R$");
      expect(formatted).toContain("49");
    });
  });

  describe("formatDualCurrency", () => {
    it("returns formatted string containing both EUR and BRL values", () => {
      const result = formatDualCurrency(PRICING_DATA.websites);
      expect(result).toContain("€");
      expect(result).toContain("R$");
      expect(result).toContain("/");
    });
  });

  describe("getFormattedPrice", () => {
    it("formats website price for en locale", () => {
      const price = getFormattedPrice("websites", { locale: "en" });
      expect(price).toContain("€");
      expect(price).toContain("49");
    });

    it("formats website price for pt locale", () => {
      const price = getFormattedPrice("websites", { locale: "pt" });
      expect(price).toContain("R$");
      expect(price).toContain("49");
    });

    it("supports prefix and suffix", () => {
      const price = getFormattedPrice("websites", {
        locale: "en",
        prefix: "From",
        suffix: "a month",
      });
      expect(price).toMatch(/^From.*€49.*a month$/);
    });

    it("supports currency override", () => {
      const price = getFormattedPrice("websites", {
        locale: "pt",
        currencyOverride: "EUR",
      });
      expect(price).toContain("49");
      expect(price).toContain("€");
    });

    it("supports dual currency mode", () => {
      const price = getFormattedPrice("websites", { showDual: true });
      expect(price).toContain("€");
      expect(price).toContain("R$");
    });

    it("formats AI Coaching prices", () => {
      const enCoaching = getFormattedPrice("aiCoaching", { locale: "en" });
      expect(enCoaching).toContain("€");
      expect(enCoaching).toContain("200");

      const ptCoaching = getFormattedPrice("aiCoaching", { locale: "pt" });
      expect(ptCoaching).toContain("R$");
      // Brazilian Portuguese uses period as thousand separator (1.200)
      expect(ptCoaching).toMatch(/1[.,]200/);
    });
  });
});
