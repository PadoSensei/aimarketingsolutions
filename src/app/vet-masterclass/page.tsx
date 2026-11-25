"use client";
import React, { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/Badge";
import GhostButton from "@/components/GhostButton";
import { useTranslation } from "@/hooks/useTranslation";
import en from "@/locales/en.json";
import pt from "@/locales/pt.json";

export default function VetMasterclass() {
  const { t, language } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use the imported JSON directly instead of the t() hook for objects/arrays
  const data = language === "pt" ? pt : en;
  const masterclassData =
    (data as any)?.default?.vetMasterclass || (data as any)?.vetMasterclass;

  if (!mounted) return null;

  // Now these are guaranteed to be the actual arrays/objects
  const agenda = masterclassData.whatYoullSee.agenda;
  const faqItems = masterclassData.faq.items;
  const details = masterclassData.details;
  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <NavBar />
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <header className="mb-16 text-center space-y-6">
          <Badge variant="solid">{t("vetMasterclass.eyebrow")}</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            {t("vetMasterclass.title")}{" "}
            <span className="gradient-text">
              {t("vetMasterclass.titleAccent")}
            </span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            {t("vetMasterclass.intro")}
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <GhostButton href="#signup">
              {t("vetMasterclass.ctaSign")}
            </GhostButton>
            <GhostButton
              href="#program"
              className="border-border hover:bg-card"
            >
              {t("vetMasterclass.ctaProgram")}
            </GhostButton>
          </div>
        </header>

        {/* Details Grid */}
        <section className="grid md:grid-cols-2 gap-6 mb-16">
          {Object.values(details).map((value, i) => (
            <div
              key={i}
              className="p-6 bg-card border border-border rounded-2xl"
            >
              <p className="text-foreground">{value as string}</p>
            </div>
          ))}
        </section>

        {/* Agenda Section */}
        <section id="program" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t("vetMasterclass.whatYoullSee.title")}
          </h2>
          <div className="space-y-4">
            {agenda.map((item: any, i: number) => (
              <div
                key={i}
                className="flex gap-6 p-6 bg-card border border-border rounded-xl"
              >
                <span className="font-mono text-purple-600 dark:text-purple-400 font-bold shrink-0">
                  {item.time}
                </span>
                <div>
                  <h4 className="font-bold text-foreground">{item.title}</h4>
                  <p className="text-sm text-foreground/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            {t("vetMasterclass.faq.title")}
          </h2>
          <div className="space-y-4">
            {faqItems.map((item: any, i: number) => (
              <details
                key={i}
                className="group p-6 bg-card border border-border rounded-xl"
              >
                <summary className="font-bold cursor-pointer hover:text-purple-600 dark:hover:text-purple-400">
                  {item.q}
                </summary>
                <p className="mt-2 text-foreground/70">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
