"use client";
import Link from "next/link";
import { servicesData } from "../data/servicesData";
import GhostButton from "@/components/GhostButton";
import { Badge } from "./Badge";
import { useTranslation } from "@/hooks/useTranslation";

export default function ServicesStump() {
  const { t } = useTranslation();

  return (
    <section
      id="services"
      className="relative py-20 overflow-hidden transition-colors duration-300 bg-background md:py-28"
    >
      {/* Ambient glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-900/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-500/5 dark:bg-blue-900/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/2 pointer-events-none" />

      <div className="container relative z-10 px-5 mx-auto md:px-8">
        <header className="space-y-4 text-center mb-14">
          <Badge variant="solid" className="px-4 py-1.5 border-none shadow-sm">
            {t("servicesStump.eyebrow")}
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            {t("servicesStump.title")}{" "}
            <span className="gradient-text">
              {t("servicesStump.titleAccent")}
            </span>
          </h2>
          <div className="w-16 h-px mx-auto bg-gradient-to-r from-purple-500 to-blue-500" />
          <p className="max-w-xl mx-auto text-base text-foreground/70 md:text-lg">
            {t("servicesStump.subtitle")}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group relative flex flex-col p-6 rounded-2xl bg-card border border-border transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-500/40 hover:shadow-lg"
            >
              <div className="relative z-10 flex flex-col items-center flex-grow space-y-4 text-center">
                <div className="flex items-center justify-center transition-all duration-300 border w-14 h-14 rounded-2xl bg-background border-border group-hover:border-purple-500/30 group-hover:bg-purple-900/10">
                  <span
                    className="text-3xl"
                    role="img"
                    aria-label={service.slug}
                  >
                    {service.icon}
                  </span>
                </div>

                <h3 className="text-lg font-bold transition-colors duration-200 text-foreground">
                  {t(`servicesData.${service.slug}.title`)}
                </h3>

                {/* Description is now a distinct block */}
                <p className="flex-grow block text-sm leading-relaxed text-foreground/70">
                  {t(`servicesData.${service.slug}.description`)}
                </p>

                {/* Explicitly separated CTA block outside the P tag */}
                {service.slug === "aiCoaching" && (
                  <div className="flex justify-center w-full pt-6 mt-auto">
                    <Link
                      href="/ai-coaching"
                      className="inline-flex items-center gap-2 text-sm font-bold text-purple-600 transition-all border-b-2 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 group border-purple-500/30 hover:border-purple-500"
                    >
                      {t("servicesStump.ctaCoaching")}
                      <span className="font-bold transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <GhostButton
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-foreground border rounded-full border-border hover:bg-card hover:border-purple-500 transition-all duration-200"
          >
            {t("nav.seeHowWeDoIt")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </GhostButton>
        </div>
      </div>
    </section>
  );
}
