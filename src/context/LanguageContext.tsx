"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import en from "../locales/en.json";
import pt from "../locales/pt.json";

type Language = "en" | "pt";
type Translations = typeof en;

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

const translations: Record<Language, Translations> = { en, pt };

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  // Load language from localStorage if available
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "pt")) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];

    for (const k of keys) {
      if (value !== undefined && value[k] !== undefined) {
        value = value[k];
      } else {
        // Fallback to English if translation is missing in the current language
        let fallbackValue: any = translations["en"];
        for (const fk of keys) {
          if (fallbackValue !== undefined && fallbackValue[fk] !== undefined) {
            fallbackValue = fallbackValue[fk];
          } else {
            return key; // Return the key itself if both fail
          }
        }
        return typeof fallbackValue === "string" ? fallbackValue : key;
      }
    }

    return typeof value === "string" ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
