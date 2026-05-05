"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import en from "../locales/en.json";
import pt from "../locales/pt.json";
import type { Translations } from "@/types/translations";
import { resolveTranslation } from "@/lib/resolveTranslation";

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
    let value = resolveTranslation(translations[language], key, variables);

    if (value === undefined) {
      value = resolveTranslation(translations.en, key, variables);
    }

    return value ?? key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
