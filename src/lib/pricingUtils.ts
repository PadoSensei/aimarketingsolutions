export type Currency = "EUR" | "BRL";
export type SupportedLocale = "en" | "pt";

export interface PriceConfig {
  EUR: number;
  BRL: number;
}

export const PRICING_DATA = {
  websites: {
    EUR: 49,
    BRL: 49,
  },
  aiCoaching: {
    EUR: 200,
    BRL: 1200, // Placeholder until confirmed
  },
} as const;

export type PricingKey = keyof typeof PRICING_DATA;

/**
 * Resolves the appropriate currency given the active language, with support for explicit overrides.
 */
export function getCurrencyForLocale(
  locale?: string | null,
  overrideCurrency?: Currency | null
): Currency {
  if (overrideCurrency === "EUR" || overrideCurrency === "BRL") {
    return overrideCurrency;
  }
  if (locale === "pt") {
    return "BRL";
  }
  return "EUR";
}

/**
 * Formats a numeric amount with the given currency symbol and locale-appropriate format.
 */
export function formatCurrency(
  amount: number,
  currency: Currency,
  locale?: string | null
): string {
  const intlLocale = locale === "pt" ? "pt-BR" : "en-IE";

  return new Intl.NumberFormat(intlLocale, {
    style: "currency",
    currency,
    maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
  }).format(amount);
}

/**
 * Returns a dual/multi-currency string representation (e.g., "€49 / R$49").
 */
export function formatDualCurrency(
  priceConfig: PriceConfig,
  primaryLocale: SupportedLocale = "en"
): string {
  const eurFormatted = formatCurrency(priceConfig.EUR, "EUR", primaryLocale);
  const brlFormatted = formatCurrency(priceConfig.BRL, "BRL", "pt");

  return `${eurFormatted} / ${brlFormatted}`;
}

/**
 * Resolves and formats the price for a specific product/service key.
 */
export function getFormattedPrice(
  itemKey: PricingKey,
  options: {
    locale?: string | null;
    currencyOverride?: Currency | null;
    showDual?: boolean;
    prefix?: string;
    suffix?: string;
  } = {}
): string {
  const priceConfig = PRICING_DATA[itemKey];
  if (!priceConfig) {
    return "";
  }

  const {
    locale = "en",
    currencyOverride,
    showDual = false,
    prefix = "",
    suffix = "",
  } = options;

  let priceStr: string;

  if (showDual) {
    priceStr = formatDualCurrency(priceConfig, (locale as SupportedLocale) || "en");
  } else {
    const currency = getCurrencyForLocale(locale, currencyOverride);
    const amount = priceConfig[currency];
    priceStr = formatCurrency(amount, currency, locale);
  }

  const parts: string[] = [];
  if (prefix) parts.push(prefix);
  parts.push(priceStr);
  if (suffix) parts.push(suffix);

  return parts.join(" ");
}
