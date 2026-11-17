"use client";
import React from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import GhostButton from "@/components/GhostButton";
import { Badge } from "@/components/Badge";
import { servicesData } from "@/data/servicesData";
import { useTranslation } from "@/hooks/useTranslation";
import PricingDisplay from "@/components/PricingDisplay";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  slug: string;
}

const ServiceCard = ({ icon, title, description, slug }: ServiceCardProps) => {
  const { t } = useTranslation();

  // Define link mapping
  const linkMap: Record<string, string> = {
    websites: "/services#websites",
    aiCoaching: "/ai-coaching",
    consulting: "/contact",
    automation: "/services#automation",
  };

  return (
    <div className="relative flex flex-col h-full p-8 transition-all duration-300 border group rounded-2xl bg-card border-border hover:border-purple-500/40">
      <div className="relative z-10 flex flex-col items-center flex-grow text-center">
        {/* Icon */}
        <div className="flex items-center justify-center mb-5 transition-all duration-300 border w-14 h-14 rounded-2xl bg-background border-border group-hover:border-purple-500/30 group-hover:bg-purple-900/10">
          <span className="text-3xl" role="img" aria-label={title}>
            {icon}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold transition-colors text-foreground">
          {title}
        </h3>

        {/* Description */}
        <p className="flex-grow mb-6 text-sm leading-relaxed text-foreground/70">
          {description}
        </p>

        {/* Subtle Link/CTA */}
        {slug === "aiCoaching" ? (
          <div className="flex justify-center w-full pt-6 mt-auto">
            <GhostButton href={linkMap[slug] || "/ai-coaching"}>
              {t("servicesStump.ctaCoaching")}
              <span className="font-bold transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </GhostButton>
          </div>
        ) : (
          // This empty div ensures the card structure remains consistent
          // without showing a button for the other services
          <div className="pt-6 mt-auto" />
        )}
      </div>
    </div>
  );
};
const ProcessStep = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => (
  <div className="relative z-10 flex flex-col items-center p-4 text-center group">
    <div className="flex items-center justify-center w-16 h-16 mb-5 transition-all duration-300 border-2 rounded-full bg-background border-border group-hover:border-purple-500">
      <span className="text-2xl font-extrabold gradient-text">{number}</span>
    </div>
    <h3 className="mb-2 text-lg font-bold text-foreground">{title}</h3>
    <p className="max-w-[220px] text-sm leading-relaxed text-foreground/70">
      {description}
    </p>
  </div>
);

export default function Services() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300 bg-background">
      <NavBar />
      <main className="relative flex-grow px-5 pt-16 pb-24 overflow-hidden sm:px-8 md:px-12 lg:px-20">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-purple-500/10 dark:bg-purple-900/10 rounded-full blur-[130px] pointer-events-none -translate-y-1/3" />

        <article className="relative z-10 mx-auto space-y-20 max-w-7xl">
          <section>
            <div className="mb-12 space-y-4 text-center">
              <Badge variant="solid" className="mb-4">
                {t("services.eyebrow")}
              </Badge>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                {t("services.title")}{" "}
                <span className="gradient-text">
                  {t("services.titleAccent")}
                </span>
              </h1>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {servicesData.map((service, index) => (
                <ServiceCard
                  key={index}
                  {...service}
                  title={t(`servicesData.${service.slug}.title`)}
                  description={t(`servicesData.${service.slug}.description`)}
                />
              ))}
            </div>
          </section>

          <section className="relative p-8 overflow-hidden border md:p-14 rounded-3xl border-border bg-card">
            <div className="relative z-10">
              <h2 className="mb-12 text-3xl font-bold text-center text-foreground">
                {t("services.howItWorks")}{" "}
                <span className="italic text-purple-600 dark:text-purple-400">
                  {t("services.howItWorksAccent")}
                </span>
              </h2>

              <div className="relative grid grid-cols-1 gap-10 md:grid-cols-3">
                {[0, 1, 2].map((i) => (
                  <ProcessStep
                    key={i}
                    number={(i + 1).toString()}
                    title={t(`services.process.${i}.title`)}
                    description={t(`services.process.${i}.description`)}
                  />
                ))}
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
