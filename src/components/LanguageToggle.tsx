"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function LanguageToggle() {
  const { language, setLanguage } = useTranslation();

  return (
    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
      <button
        onClick={() => setLanguage("en")}
        className={`text-xs font-bold transition-colors ${
          language === "en" ? "text-purple-400" : "text-zinc-500 hover:text-white"
        }`}
      >
        EN
      </button>
      <span className="text-zinc-700">|</span>
      <button
        onClick={() => setLanguage("pt")}
        className={`text-xs font-bold transition-colors ${
          language === "pt" ? "text-purple-400" : "text-zinc-500 hover:text-white"
        }`}
      >
        PT
      </button>
    </div>
  );
}
