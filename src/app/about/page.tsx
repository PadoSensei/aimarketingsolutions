"use client";
import React from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Button from "@/components/Button";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

// 1. Define Props Interfaces
interface TeamProfileProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
  reversed?: boolean;
  cta?: {
    label: string;
    href: string;
  };
}

interface InfoSectionProps {
  title: string;
  children: React.ReactNode;
}

// 2. Apply Interfaces to Components
const TeamProfile = ({
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
      className={`group relative flex flex-col ${
        reversed ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-10 p-8 md:p-12 bg-zinc-900/40 border border-white/10 rounded-3xl overflow-hidden transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_0_50px_rgba(147,51,234,0.07)]`}
    >
      <div className="absolute inset-0 transition-opacity duration-500 opacity-0 pointer-events-none bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 group-hover:opacity-100" />

      <div className="relative flex-shrink-0">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#A8E5FE] to-[#64149C] blur-2xl opacity-20 group-hover:opacity-35 transition-opacity duration-300" />
        <div className="absolute -inset-[2px] rounded-full bg-gradient-to-br from-[#A8E5FE] to-[#64149C] opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
        <Image
          src={image}
          alt={name}
          width={208}
          height={208}
          className="relative z-10 object-cover w-44 h-44 md:w-52 md:h-52 rounded-full border-2 border-black shadow-2xl transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div
        className={`relative z-10 flex flex-col w-full ${
          reversed ? "md:items-end md:text-right" : "md:items-start md:text-left"
        } text-center`}
      >
        <span className="inline-block px-3 py-1 mx-auto mb-4 text-xs font-bold tracking-widest text-purple-300 uppercase border rounded-full bg-purple-900/30 border-purple-700/40 w-fit md:mx-0">
          {role}
        </span>
        <h3 className="mb-5 text-2xl font-bold text-white md:text-3xl">
          {name}
        </h3>
        <div className="mb-6 space-y-3 text-base leading-relaxed transition-colors duration-200 text-zinc-400 group-hover:text-zinc-300">
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
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 text-zinc-400 hover:text-white group/link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-purple-400"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="pb-px transition-all border-b border-transparent group-hover/link:border-white">
              {t("about.linkedinConnect")}
            </span>
          </a>

          {cta && (
            <Button href={cta.href} className="px-6 py-2.5 text-sm w-fit">
              {cta.label}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const InfoSection = ({ title, children }: InfoSectionProps) => (
  <div className="flex flex-col h-full p-8 md:p-10 rounded-3xl border border-white/10 bg-zinc-900/30 hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(147,51,234,0.06)] transition-all duration-300">
    <h2 className="flex items-center gap-3 mb-6 text-xl font-bold text-white">
      <span className="block w-1 h-6 rounded-full bg-gradient-to-b from-[#A8E5FE] to-[#64149C]" />
      {title}
    </h2>
    <div className="flex-grow space-y-4 text-base leading-relaxed text-zinc-400">
      {children}
    </div>
  </div>
);

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <NavBar />
      <main className="relative flex-grow px-5 pt-12 pb-24 overflow-hidden sm:px-8 md:px-14 lg:px-24">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-900/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[110px] pointer-events-none" />

        <article className="relative z-10 max-w-5xl mx-auto space-y-16">
          <header className="py-12 space-y-5 text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest text-purple-300 uppercase bg-purple-900/25 border border-purple-700/40 rounded-full">
              {t("about.eyebrow")}
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              {t("about.title")} <span className="gradient-text">{t("about.titleAccent")}</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg leading-relaxed text-zinc-400 md:text-xl">
              {t("about.subtitle")}
            </p>
          </header>

          {/* TEAM */}
          <div className="space-y-8">
            <TeamProfile
              name={t("about.ludmila.name")}
              role={t("about.ludmila.role")}
              image="/images/lu-suit.jpg"
              linkedin="https://www.linkedin.com/in/dludmila/"
              cta={{
                label: t("about.signUpCoaching"),
                href: "/ai-coaching",
              }}
              bio={t("about.ludmila.bio")}
            />

            <TeamProfile
              name={t("about.padraig.name")}
              role={t("about.padraig.role")}
              image="/images/pod_suit.jpg"
              linkedin="https://www.linkedin.com/in/padraig-o-donoghue-6175101ba/"
              reversed
              bio={t("about.padraig.bio")}
            />
          </div>

          {/* INFO */}
          <div className="grid gap-6 md:grid-cols-2">
            <InfoSection title={t("about.philosophy.title")}>
              {t("about.philosophy.content").split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </InfoSection>

            <InfoSection title={t("about.whoWeWorkWithTitle")}>
              <p>{t("about.whoWeWorkWithIntro")}</p>
              <ul className="mt-4 space-y-2">
                {(t("about.whoWeWorkWithItems") as unknown as string[]).map(
                  (item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-purple-400">✓</span>
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </InfoSection>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
