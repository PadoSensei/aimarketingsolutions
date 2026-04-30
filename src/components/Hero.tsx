"use client";
import Link from "next/link";
import Button from "./Button";
import { useTranslation } from "@/hooks/useTranslation";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative flex items-center min-h-[calc(100vh-5rem)] pb-28 overflow-hidden bg-black">
      {/* ── Background atmosphere ───────────────────────────── */}
      {/* Top-left purple bloom */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-700/20 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      {/* Bottom-right blue bloom */}
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-blue-700/15 rounded-full blur-[140px] translate-x-1/3 translate-y-1/3 pointer-events-none" />
      {/* Subtle center grid — adds texture without noise */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10 flex flex-col items-center gap-16 px-5 mx-auto md:flex-row md:gap-12 lg:gap-20">
        {/* ── Left: Text content ──────────────────────────────── */}
        <div className="flex-1 max-w-xl mx-auto text-center md:text-left space-y-7 md:mx-0">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold tracking-widest text-purple-300 uppercase border rounded-full bg-purple-900/20 border-purple-600/25">
            {/* Pulsing dot */}
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex w-full h-full bg-purple-400 rounded-full opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-purple-500" />
            </span>
            {t("hero.eyebrow")}
          </div>

          {/* H1 */}
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t("hero.title")}
            <br className="hidden sm:block" />
            {t("hero.on")}{" "}
            <span className="relative inline-block">
              <span className="gradient-purple-pink">{t("hero.titleAccent")}</span>
              {/* Underline accent */}
              <span className="absolute left-0 w-full h-px -bottom-1 bg-gradient-to-r from-purple-500/80 to-pink-500/0" />
            </span>
          </h1>

          {/* Subheading */}
          <p className="max-w-lg mx-auto text-lg leading-relaxed text-zinc-400 md:mx-0 lg:text-xl">
            {t("hero.subtitle")}{" "}
            <span className="font-semibold text-white">{t("hero.growing")}</span>{" "}
            {t("hero.insteadOfGrinding")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row md:justify-start">
            <Button href="/ai-coaching">{t("hero.ctaCoaching")}</Button>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-zinc-300 transition-all duration-200 border rounded-full border-white/10 hover:border-white/25 hover:text-white hover:bg-white/5"
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

          {/* Social proof nudge */}
          {/* <p className="pt-1 text-xs text-zinc-600">
            Based in Ireland · Serving clients globally
          </p> */}
        </div>

        {/* ── Right: Logo visual ──────────────────────────────── */}
        <div className="flex items-center justify-center flex-1 w-full">
          {/* Outer glow ring */}
          <div className="relative flex flex-col items-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[480px] md:h-[480px] bg-purple-600/15 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative group">
              {/* Animated gradient halo */}
              <div className="absolute transition-all duration-700 rounded-full -inset-2 bg-gradient-to-r from-purple-600 via-blue-500 to-pink-600 blur-lg opacity-30 group-hover:opacity-55 animate-spin-slow" />

              {/* Thin ring */}
              <div className="absolute -inset-[3px] rounded-full bg-gradient-to-br from-purple-500/60 to-blue-500/40" />

              {/* Logo circle */}
              <div className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px] rounded-full overflow-hidden bg-white shadow-2xl shadow-purple-950/60">
                <img
                  src="/images/Logo-White.png"
                  alt="AI Solutions Logo"
                  className="object-cover w-full h-full"
                />
                {/* Subtle shine overlay on hover */}
                <div className="absolute inset-0 transition-opacity duration-700 rounded-full opacity-0 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent group-hover:opacity-100" />
              </div>
            </div>

            {/* Wordmark below logo */}
            <div className="text-center mt-7">
              <p className="text-2xl font-extrabold tracking-[0.15em] uppercase md:text-4xl drop-shadow-xl">
                <span className="text-white">AI</span>{" "}
                <span className="gradient-text">SOLUTIONS</span>
              </p>
              <p className="mt-1 text-xs tracking-widest uppercase text-zinc-600">
                {t("hero.footerTitle")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Curved bottom separator into black ─────────────── */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none">
        <svg
          className="relative block w-full h-[50px] md:h-[90px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-black"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
