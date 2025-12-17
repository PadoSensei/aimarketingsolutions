//@ts-nocheck
import React from "react";
import Footer2 from "@/components/Footer2";
import NavBar from "@/components/NavBar";

// Reusable component for the Team Members to handle the Zig-Zag logic
const TeamProfile = ({ name, role, bio, image, linkedin, isReversed }) => {
  return (
    <div
      className={`flex flex-col ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-8 p-6 bg-white/90 rounded-lg shadow-md`}
    >
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="object-cover w-48 h-48 border-4 border-white rounded-full shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div
        className={`flex flex-col ${
          isReversed
            ? "md:items-end md:text-right"
            : "md:items-start md:text-left"
        } text-center`}
      >
        <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
        <p className="mb-4 font-semibold text-purple-600">{role}</p>

        {/* Render bio paragraphs */}
        <div className="mb-4 space-y-3 text-gray-700">{bio}</div>

        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-medium text-blue-600 transition-colors hover:text-blue-800"
        >
          Connect on LinkedIn <span className="ml-2">→</span>
        </a>
      </div>
    </div>
  );
};

// Simple card for the bottom info sections
const InfoSection = ({ title, content }) => (
  <div className="h-full p-8 rounded-lg shadow-md bg-white/90">
    <h2 className="mb-4 text-2xl font-bold text-gray-900">{title}</h2>
    <div className="text-lg leading-relaxed text-gray-700">{content}</div>
  </div>
);

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-grow px-4 py-8 bg-gradient-to-r from-gradient-purple to-gradient-blue sm:px-8 md:px-16 lg:px-32">
        <article className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <header className="mb-16 text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Who We Are
            </h1>
            <p className="max-w-3xl mx-auto text-xl leading-relaxed text-white/90">
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
              image="/images/Ludmila Domingos Marketing AI verde.png"
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
              // TODO: Add Padraig's actual photo to your public/images folder
              image="/images/padraig-placeholder.jpg"
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
          <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2">
            <InfoSection
              title="Our Philosophy"
              content={
                <>
                  <p className="mb-4">
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
                  <p className="mb-4">
                    We specialize in working with solo entrepreneurs and very
                    small teams (1-5 people) who are:
                  </p>
                  <ul className="pl-5 space-y-2 list-disc">
                    <li>Overwhelmed by repetitive manual tasks</li>
                    <li>
                      Hearing about AI everywhere but don't know where to start
                    </li>
                    <li>
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
