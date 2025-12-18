//@ts-nocheck
import React from "react";
import Footer2 from "@/components/Footer2";
import NavBar from "@/components/NavBar";

// Reusable component for the Team Members to handle the Zig-Zag logic
const TeamProfile = ({ name, role, bio, image, linkedin, isReversed }) => {
  return (
    <div
      className={`group relative flex flex-col ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-10 p-8 md:p-12 bg-zinc-900/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-purple-500/30`}
    >
      {/* Hover Gradient Glow */}
      <div className="absolute inset-0 transition-opacity duration-500 opacity-0 pointer-events-none bg-gradient-to-br from-purple-500/5 to-blue-500/5 group-hover:opacity-100" />

      {/* Image Section */}
      <div className="relative flex-shrink-0">
        {/* Glow behind image */}
        <div className="absolute inset-0 transition-opacity duration-300 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-2xl opacity-20 group-hover:opacity-40" />
        <img
          src={image}
          alt={name}
          className="relative z-10 object-cover w-48 h-48 transition-transform duration-300 border-2 rounded-full shadow-2xl md:w-56 md:h-56 border-white/10 group-hover:scale-105"
        />
      </div>

      {/* Text Section */}
      <div
        className={`relative z-10 flex flex-col ${
          isReversed
            ? "md:items-end md:text-right"
            : "md:items-start md:text-left"
        } text-center w-full`}
      >
        <h3 className="mb-2 text-3xl font-bold text-white">{name}</h3>
        <p className="mb-6 text-lg font-semibold tracking-wide text-transparent uppercase bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          {role}
        </p>

        {/* Render bio paragraphs */}
        <div className="mb-6 space-y-4 text-lg leading-relaxed text-zinc-300">
          {bio}
        </div>

        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-bold text-white transition-all hover:text-purple-400 group/link"
        >
          <span className="border-b border-transparent group-hover/link:border-purple-400 pb-0.5 transition-all">
            Connect on LinkedIn
          </span>
          <svg
            className="w-5 h-5 ml-2 transition-transform transform group-hover/link:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

// Simple card for the bottom info sections
const InfoSection = ({ title, content }) => (
  <div className="h-full p-10 transition-colors duration-300 border rounded-2xl bg-zinc-900/30 border-white/10 hover:border-purple-500/30">
    <h2 className="pl-4 mb-6 text-2xl font-bold text-white border-l-4 border-purple-500">
      {title}
    </h2>
    <div className="space-y-4 text-lg leading-relaxed text-zinc-300">
      {content}
    </div>
  </div>
);

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <NavBar />

      <main className="relative flex-grow px-4 pt-24 pb-20 overflow-hidden sm:px-8 md:px-16 lg:px-32">
        {/* BACKGROUND BLOBS (Matches Hero) */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />

        <article className="relative z-10 max-w-6xl mx-auto space-y-20">
          {/* Header */}
          <header className="mb-20 text-center">
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white md:text-6xl">
              Who We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Are
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl leading-relaxed md:text-2xl text-zinc-400">
              We're a two-person automation consultancy based in Ireland,
              helping small businesses stop drowning in manual work.
            </p>
          </header>

          {/* TEAM SECTION */}
          <div className="flex flex-col gap-12">
            {/* 1. LUDMILA - Left Aligned */}
            <TeamProfile
              name="Ludmila Domingos"
              role="Founder | AI Strategist"
              image="/images/lu-suit.jpg"
              linkedin="https://www.linkedin.com/in/dludmila/"
              isReversed={false}
              bio={
                <>
                  <p>
                    After nearly a decade working across marketing and
                    technology in Brazil, Italy, and Ireland, Ludmila founded AI
                    Solutions to bridge the gap between advanced AI technology
                    and the practical needs of small to medium-sized businesses.
                  </p>
                  <p>
                    Her journey through different markets has given her a unique
                    perspective on the challenges small businesses face,
                    especially the overwhelming amount of manual work that
                    defeats team morale and prevents growth.
                  </p>
                </>
              }
            />

            {/* 2. PADRAIG - Right Aligned (isReversed=true) */}
            <TeamProfile
              name="Padraig O'Donoghue"
              role="Software Developer"
              image="/images/pod_suit.jpg"
              linkedin="https://www.linkedin.com/in/padraig-o-donoghue-6175101ba/"
              isReversed={true}
              bio={
                <>
                  <p>
                    Padraig is a full-stack software engineer and former History
                    & Politics teacher who loves to learn through building,
                    experimenting, and teaching.
                  </p>
                  <p>
                    His approach is straightforward: simplify the complex and
                    create practical solutions to real-world problems. Padraig
                    brings technical depth combined with a teacher's ability to
                    make technology accessible and understandable for
                    non-technical business owners.
                  </p>
                </>
              }
            />
          </div>

          {/* PHILOSOPHY & AUDIENCE GRID */}
          <div className="grid grid-cols-1 gap-8 mt-20 md:grid-cols-2">
            <InfoSection
              title="Our Philosophy"
              content={
                <>
                  <p>
                    We don't sell services we haven't used ourselves. Every tool
                    we recommend, every automation we set up — we've tested it
                    in our own business first.
                  </p>
                  <p>
                    We're not trying to be a big consultancy. We're two people
                    who know how to make technology work for small teams without
                    breaking the bank or requiring a computer science degree.
                  </p>
                </>
              }
            />

            <InfoSection
              title="Who We Work With"
              content={
                <>
                  <p>
                    We specialize in working with solo entrepreneurs and very
                    small teams (1-5 people) who are:
                  </p>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start">
                      <span className="mt-1 mr-3 text-purple-400">✓</span>
                      Overwhelmed by repetitive manual tasks
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1 mr-3 text-purple-400">✓</span>
                      Hearing about AI everywhere but don't know where to start
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1 mr-3 text-purple-400">✓</span>
                      Looking for practical, affordable solutions — not
                      expensive enterprise systems
                    </li>
                  </ul>
                </>
              }
            />
          </div>
        </article>
      </main>
      <Footer2 />
    </div>
  );
}
