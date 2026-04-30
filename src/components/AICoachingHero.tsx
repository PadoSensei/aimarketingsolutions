"use client";
import Button from "./Button";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

export default function AICoachingHero() {
  const { t } = useTranslation();

  return (
    <section className="px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden relative bg-gradient-to-br from-[#1a0040] via-[#2d0060] to-[#64149C] shadow-2xl shadow-purple-950/70 border border-purple-800/30">
        {/* Subtle noise/grain overlay for depth */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_left,_#A8E5FE22_0%,_transparent_60%)]" />

        <div className="relative flex flex-col items-center gap-0 md:flex-row">
          {/* Left Side: Content */}
          <div className="z-10 flex-1 p-8 space-y-6 md:p-14 lg:p-16">
            {/* Eyebrow label */}
            <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest text-purple-200 uppercase bg-purple-900/50 border border-purple-600/40 rounded-full">
              {t("aiCoachingHero.eyebrow")}
            </span>

            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-white leading-[1.1]">
              {t("aiCoachingHero.title")}{" "}
              <span className="gradient-text">{t("aiCoachingHero.titleAccent")}</span>
            </h1>

            <p className="max-w-md text-lg font-medium text-purple-200">
              {t("aiCoachingHero.subtitle")}
            </p>

            <p className="max-w-md text-base text-purple-300/80">
              {t("aiCoachingHero.framework")}{" "}
              <span className="font-bold text-white">
                {t("aiCoachingHero.frameworkBold")}
              </span>
            </p>

            <p className="text-base font-semibold text-[#A8E5FE]">
              {t("aiCoachingHero.transformation")}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              {/* Primary CTA */}
              <Button
                href="/about"
                className="px-8 py-3 font-bold text-purple-900 transition-all duration-200 bg-white rounded-full shadow-lg hover:bg-purple-50 shadow-purple-950/40"
              >
                {t("aiCoachingHero.ctaButton")}
              </Button>

              {/* Secondary CTA */}
              {/* <a
                href="/courses"
                className="inline-flex items-center px-8 py-3 text-base font-semibold text-white transition-all duration-200 border-2 rounded-full border-white/40 hover:border-white hover:bg-white/10"
              >
                Explore my Courses
              </a> */}
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="relative flex-1 w-full h-[340px] md:h-[520px] overflow-hidden">
            {/* Fade overlay on the left edge to blend into the card */}
            <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#2d0060] to-transparent" />

            <Image
              src="/images/AIHeroImage.jpeg"
              alt={t("aiCoachingHero.imageAlt")}
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
