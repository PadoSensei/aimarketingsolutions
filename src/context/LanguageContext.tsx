"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import en from "../locales/en.json";
import pt from "../locales/pt.json";
import type { Translations } from "@/types/translations";

type Language = "en" | "pt";

const translations: Record<Language, Translations> = {
  en: en as unknown as Translations,
  pt: pt as unknown as Translations,
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, variables?: Record<string, string>) => string;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null;
    if (savedLanguage === "en" || savedLanguage === "pt") {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string, variables?: Record<string, string>): string => {
    const keys = key.split(".");
    const resolve = (obj: any) => {
      return keys.reduce(
        (acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined),
        obj
      );
    };

    let value = resolve(translations[language]);

    if (value === undefined) {
      value = resolve(translations.en);
    }

    if (typeof value === "string") {
      if (variables) {
        return Object.entries(variables).reduce(
          (acc, [vKey, vValue]) => acc.replaceAll(`{{${vKey}}}`, vValue),
          value
        );
      }
      return value;
    }

    return key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
