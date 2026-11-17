"use client";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import {
  Currency,
  PricingKey,
  getFormattedPrice,
  PRICING_DATA,
} from "@/lib/pricingUtils";

export interface PricingDisplayProps {
  itemKey: PricingKey;
  currencyOverride?: Currency;
  showDual?: boolean;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const PricingDisplay: React.FC<PricingDisplayProps> = ({
  itemKey,
  currencyOverride,
  showDual = false,
  prefix,
  suffix,
  className = "",
}) => {
  const { language } = useTranslation();

  const formattedPrice = getFormattedPrice(itemKey, {
    locale: language,
    currencyOverride,
    showDual,
    prefix,
    suffix,
  });

  return <div className={className}>{formattedPrice}</div>;
};

export default PricingDisplay;
