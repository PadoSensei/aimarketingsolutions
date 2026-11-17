"use client";
import React from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import JsonLd from "@/components/SEO";
import { Badge } from "@/components/Badge";
interface TeamProfileProps {
  id: string; // Added for schema anchor
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
  reversed?: boolean;
  cta?: { label: string; href: string };
}

const TeamProfile = ({
  id,
  name,
  role,
  bio,
  image,
  linkedin,
  reversed,
  cta,
}: TeamProfileProps) => {
  const { t } = useTranslation();
  return (
    <div
      id={id}
      className={`group relative flex flex-col ${
        reversed ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-10 p-8 md:p-12 bg-card border border-border rounded-3xl overflow-hidden transition-all duration-300 hover:border-purple-500/30 scroll-mt-24`}
    >
      <div className="absolute inset-0 transition-opacity duration-500 opacity-0 pointer-events-none bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 group-hover:opacity-100" />

      <div className="relative flex-shrink-0">
        <Image
          src={image}
          alt={name}
          width={208}
          height={208}
          className="relative z-10 object-cover border-4 rounded-full shadow-xl w-44 h-44 md:w-52 md:h-52 border-background"
        />
      </div>

      <div
        className={`relative z-10 flex flex-col w-full ${
          reversed
            ? "md:items-end md:text-right"
            : "md:items-start md:text-left"
        } text-center`}
      >
        <Badge variant="solid" className="mb-4">
          {role}
        </Badge>
        <h3 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">
          {name}
        </h3>
        <div className="mb-6 space-y-3 text-base leading-relaxed text-foreground/70">
          {bio.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div
          className={`mt-6 flex flex-wrap items-center gap-4 w-full ${
            reversed
              ? "md:flex-row-reverse md:justify-start"
              : "md:justify-between"
          } justify-center`}
        >
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 text-foreground/70 hover:text-foreground"
          >
            <span className="pb-px border-b border-border hover:border-foreground">
              {t("about.linkedinConnect")}
            </span>
          </a>
          {cta && (
            <Link
              href={cta.href}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-all group border-b-2 border-purple-500/30 hover:border-purple-500"
            >
              {cta.label}
              <span className="font-bold transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const InfoSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col h-full p-8 transition-all duration-300 border md:p-10 rounded-3xl border-border bg-card">
    <h2 className="flex items-center gap-3 mb-6 text-xl font-bold text-foreground">
      <span className="block w-1 h-6 rounded-full bg-gradient-to-b from-purple-500 to-blue-500" />
      {title}
    </h2>
    <div className="flex-grow space-y-4 text-base leading-relaxed text-foreground/70">
      {children}
    </div>
  </div>
);

export default function About() {
  const { t } = useTranslation();

  const personSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.aisolutions.irish/about#ludmila",
        name: "Ludmila Domingos",
        jobTitle: "Founder",
        worksFor: { "@id": "https://www.aisolutions.irish/#org" },
        image: "https://www.aisolutions.irish/images/lu-suit.jpg",
        knowsLanguage: ["pt-BR", "en"],
        sameAs: ["https://www.linkedin.com/in/dludmila/"],
      },
      {
        "@type": "Person",
        "@id": "https://www.aisolutions.irish/about#padraig",
        name: "Padraig O'Donoghue",
        jobTitle: "Software Developer",
        worksFor: { "@id": "https://www.aisolutions.irish/#org" },
        image: "https://www.aisolutions.irish/images/pod_suit.jpg",
        sameAs: ["https://www.linkedin.com/in/padraig-o-donoghue-6175101ba/"],
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300 bg-background">
      <NavBar />
      <JsonLd data={personSchema} />
      <main className="relative flex-grow px-5 pt-12 pb-24 overflow-hidden sm:px-8 md:px-14 lg:px-24">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-900/15 rounded-full blur-[130px] pointer-events-none" />

        <article className="relative z-10 max-w-5xl mx-auto space-y-16">
          <header className="py-12 space-y-5 text-center">
            <Badge variant="solid" className="mb-4">
              {t("about.eyebrow")}
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {t("about.title")}{" "}
              <span className="gradient-text">{t("about.titleAccent")}</span>
            </h1>
          </header>

          <div className="space-y-8">
            <TeamProfile
              id="ludmila"
              name={t("about.ludmila.name")}
              role={t("about.ludmila.role")}
              image="/images/lu-suit.jpg"
              linkedin="https://www.linkedin.com/in/dludmila/"
              cta={{ label: t("about.signUpCoaching"), href: "/ai-coaching" }}
              bio={t("about.ludmila.bio")}
            />
            <TeamProfile
              id="padraig"
              name={t("about.padraig.name")}
              role={t("about.padraig.role")}
              image="/images/pod_suit.jpg"
              linkedin="https://www.linkedin.com/in/padraig-o-donoghue-6175101ba/"
              reversed
              bio={t("about.padraig.bio")}
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <InfoSection title={t("about.philosophy.title")}>
              {t("about.philosophy.content")
                .split("\n\n")
                .map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
            </InfoSection>

            <InfoSection title={t("about.whoWeWorkWithTitle")}>
              <p>{t("about.whoWeWorkWithIntro")}</p>
              <ul className="mt-4 space-y-2">
                {(t("about.whoWeWorkWithItems") as unknown as string[]).map(
                  (item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-purple-500 dark:text-purple-400">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </InfoSection>

            {/* NEW SECTION */}
            <InfoSection title={t("about.based.title")}>
              <p className="text-foreground/70">{t("about.based.content")}</p>
            </InfoSection>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
