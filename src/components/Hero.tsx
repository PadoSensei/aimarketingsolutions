"use client";
import Link from "next/link";
import Button from "./Button";
import { Badge } from "./Badge";
import { useTranslation } from "@/hooks/useTranslation";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative flex items-center min-h-[calc(100vh-5rem)] pb-28 overflow-hidden bg-background transition-colors duration-300">
      {/* ── Background atmosphere ───────────────────────────── */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500/20 dark:bg-purple-700/20 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-blue-500/10 dark:bg-blue-700/15 rounded-full blur-[140px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05] dark:opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10 flex flex-col items-center gap-16 px-5 mx-auto md:flex-row md:gap-12 lg:gap-20">
        {/* ── Left: Text content ──────────────────────────────── */}
        <div className="flex-1 max-w-xl mx-auto text-center md:text-left space-y-7 md:mx-0">
          {/* Badge Wrapper: Fixed height ensures title doesn't jump between EN/PT */}
          <div className="flex items-center justify-center h-10 md:justify-start">
            <Badge
              variant="solid"
              className="px-4 py-1.5 border-none shadow-sm whitespace-nowrap"
            >
              <span className="flex items-center gap-2 text-xs text-white">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex w-full h-full bg-white rounded-full opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
                </span>
                {t("hero.eyebrow")}
              </span>
            </Badge>
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="whitespace-nowrap">
              {t("hero.title")}{" "}
              <span className="text-foreground">
                {t("hero.titleConnector")}
              </span>
            </span>
            <br />
            <span className="relative inline-block">
              <span className="gradient-purple-pink">
                {t("hero.titleAccent")}
              </span>
              <span className="absolute left-0 w-full h-px -bottom-1 bg-gradient-to-r from-purple-500/80 to-pink-500/0" />
            </span>
          </h1>

          <p className="max-w-lg mx-auto text-lg leading-relaxed text-foreground/70 md:mx-0 lg:text-xl">
            {t("hero.subtitle")}{" "}
            <span className="font-semibold text-foreground">
              {t("hero.growing")}
            </span>{" "}
            {t("hero.insteadOfGrinding")}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row md:justify-start">
            <Button href="/ai-coaching">{t("hero.ctaCoaching")}</Button>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-foreground rounded-full border border-purple-700/60 hover:bg-purple-900/10 hover:border-purple-500 transition-all duration-200"
            >
              {t("hero.ctaContact")}
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
            </Link>
          </div>
        </div>

        {/* ── Right: Logo visual ──────────────────────────────── */}
        <div className="flex items-center justify-center flex-1 w-full">
          <div className="relative flex flex-col items-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[480px] md:h-[480px] bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative group">
              <div className="absolute transition-all duration-700 rounded-full -inset-2 bg-gradient-to-r from-purple-600 via-blue-500 to-pink-600 blur-lg opacity-20 group-hover:opacity-40 animate-spin-slow" />
              <div className="absolute -inset-[3px] rounded-full bg-gradient-to-br from-purple-500/40 to-blue-500/30" />
              <div className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px] rounded-full overflow-hidden bg-background shadow-2xl">
                <img
                  src="/images/Logo-White.png"
                  alt="AI Solutions Logo"
                  className="object-cover w-full h-full invert dark:invert-0"
                />
              </div>
            </div>
            <div className="text-center mt-7">
              <p className="text-2xl font-extrabold tracking-[0.15em] uppercase md:text-4xl text-foreground">
                AI <span className="gradient-text">SOLUTIONS</span>
              </p>
              <p className="mt-1 text-xs tracking-widest uppercase text-foreground/50">
                {t("hero.footerTitle")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none">
        <svg
          className="relative block w-full h-[50px] md:h-[90px] fill-background"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
