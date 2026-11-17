"use client";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AICarousel from "@/components/AICarousel";
import AICoachingHero from "@/components/AICoachingHero";
import { useTranslation } from "@/hooks/useTranslation";
import PricingDisplay from "@/components/PricingDisplay";
import { Badge } from "@/components/Badge";

export default function AiCoachingPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen transition-colors duration-300 bg-background text-foreground">
      <NavBar />

      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <AICoachingHero />

        {/* ── Main Content ─────────────────────────────────── */}
        <div className="max-w-4xl px-6 pb-32 mx-auto">
          {/* ── Section: The Roadmap ─────────────────────────── */}
          <div className="mb-8">
            <Badge variant="solid" className="mb-5">
              {t("aiCoaching.roadmapEyebrow")}
            </Badge>

            <div className="flex flex-col justify-between gap-4 mb-3 md:flex-row md:items-end">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-foreground">
                  {t("aiCoaching.roadmapTitle")}{" "}
                  <span className="gradient-text">
                    {t("aiCoaching.roadmapTitleAccent")}
                  </span>
                </h2>
              </div>
              <div className="inline-flex items-center px-4 py-2 text-sm font-semibold border rounded-xl bg-card border-border text-foreground">
                <PricingDisplay
                  itemKey="aiCoaching"
                  prefix={t("aiCoaching.investmentPrefix") || "Investment from"}
                />
              </div>
            </div>

            <p className="max-w-2xl text-lg text-foreground/70">
              {t("aiCoaching.roadmapSubtitle")}
            </p>
          </div>

          {/* ── Carousel ─────────────────────────────────────── */}
          <div className="mb-28">
            <AICarousel />
          </div>

          {/* ── Divider ──────────────────────────────────────── */}
          <div className="mb-20 border-t border-border" />

          {/* ── Section: Booking ─────────────────────────────── */}
          <section id="book" className="space-y-8">
            <div className="space-y-3 text-center">
              <Badge variant="solid" className="mb-5">
                {t("aiCoaching.bookingEyebrow")}
              </Badge>

              <h2 className="text-4xl font-bold text-foreground">
                {t("aiCoaching.bookingTitle")}
              </h2>

              <p className="text-lg text-foreground/70">
                {t("aiCoaching.bookingSubtitle")}
              </p>
            </div>

            <div className="overflow-hidden border shadow-xl rounded-3xl border-border bg-card">
              {/* Brand accent bar */}
              <div className="w-full h-1 bg-gradient-to-r from-purple-600 to-blue-400" />

              {/* Light wrapper — Google Calendar renders best in light scheme */}
              <div className="overflow-hidden bg-white rounded-b-3xl">
                <iframe
                  src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2r6lcdEndqFrF4_2mu2yz0m0Ya4FHhKGJ5SrUO3ounqTTtwSexSLOBKP2TWDUW-2NYccLTsigM?gv=true"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  title={t("aiCoaching.calendarTitle")}
                  className="block"
                  style={{ colorScheme: "light" }}
                />
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
