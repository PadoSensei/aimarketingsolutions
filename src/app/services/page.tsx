//@ts-nocheck
import React from "react";
import Footer2 from "@/components/Footer2";
import NavBar from "@/components/NavBar";
import Link from "next/link";

// 1. REFACTORED SERVICE CARD (Dark Glass + Hover Glow)
const ServiceCard = ({ icon, title, description }) => (
  <div className="group relative h-full p-8 rounded-2xl bg-zinc-900/40 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
    {/* Inner Glow Gradient on Hover */}
    <div className="absolute inset-0 transition-opacity duration-500 opacity-0 pointer-events-none bg-gradient-to-br from-purple-500/5 to-blue-500/5 group-hover:opacity-100 rounded-2xl" />

    <div className="relative z-10 flex flex-col items-start">
      <div className="p-4 mb-6 transition-transform duration-300 border rounded-full shadow-inner bg-zinc-800/50 border-white/5 group-hover:scale-110">
        <span className="text-4xl filter drop-shadow-lg">{icon}</span>
      </div>
      <h3 className="mb-4 text-2xl font-bold text-white transition-colors group-hover:text-purple-200">
        {title}
      </h3>
      <p className="text-lg leading-relaxed transition-colors text-zinc-400 group-hover:text-zinc-300">
        {description}
      </p>
    </div>
  </div>
);

// 2. REFACTORED PROCESS STEP (Neon Indicators)
const ProcessStep = ({ number, title, description }) => (
  <div className="relative z-10 flex flex-col items-center p-4 text-center group">
    {/* Number Circle */}
    <div className="flex items-center justify-center w-20 h-20 mb-6 text-3xl font-bold text-white bg-zinc-900 border-4 border-zinc-800 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-purple-500 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 relative">
      <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-400">
        {number}
      </span>
    </div>
    <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
    <p className="max-w-sm text-lg leading-relaxed text-zinc-400">
      {description}
    </p>
  </div>
);

export default function Services() {
  const servicesData = [
    {
      icon: "📋",
      title: "Process Automation",
      description:
        "We identify what's eating your time and set up automations using tools you already have (or cheap ones you can learn quickly).",
    },
    {
      icon: "🔗",
      title: "System Integration",
      description:
        "We connect your existing software so data flows automatically - no more copying and pasting between apps.",
    },
    {
      icon: "🛠️",
      title: "Off-the-Shelf Solutions",
      description:
        "We use proven, affordable tools that already exist - no need to reinvent the wheel. We identify the right software for your needs.",
    },
  ];

  const processData = [
    {
      number: "1",
      title: "Initial Conversation",
      description: "We understand where you're wasting time",
    },
    {
      number: "2",
      title: "We Send You a Plan",
      description: "Specific tools and automations we would implement",
    },
    {
      number: "3",
      title: "We Do the Work",
      description: "You approve, we implement, you get your time back",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <NavBar />

      <main className="relative flex-grow px-4 pt-32 pb-20 overflow-hidden sm:px-8 md:px-16 lg:px-32">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none translate-y-1/3" />

        <article className="relative z-10 mx-auto space-y-24 max-w-7xl">
          {/* SECTION 1: WHAT WE ACTUALLY DO */}
          <section>
            <div className="mb-16 text-center">
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                What We{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  Actually Do
                </span>
              </h1>
              <p className="max-w-2xl mx-auto text-xl text-zinc-400">
                Practical, results-driven solutions to reclaim your time.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {servicesData.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </section>

          {/* SECTION 2: HOW IT WORKS */}
          <section className="relative p-8 overflow-hidden border md:p-16 rounded-3xl bg-zinc-900/30 border-white/5 backdrop-blur-md">
            {/* Subtle Grid Background inside the card */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none"></div>

            <h2 className="mb-16 text-3xl font-bold text-center text-white md:text-5xl">
              How It <span className="italic text-purple-400">Works</span>
            </h2>

            <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
              {/* Connector Line (The "Data Pipe") */}
              {/* Positioned at top-10 to align with the center of the 20x20 (80px) circles */}
              <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-1 bg-gradient-to-r from-purple-900 via-purple-500 to-blue-500 rounded-full opacity-30" />

              {processData.map((step, index) => (
                <ProcessStep key={index} {...step} />
              ))}
            </div>
          </section>

          {/* SECTION 3: CTA */}
          <section className="pb-8 text-center">
            <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
              <Link
                href="/contact"
                className="block px-12 py-4 text-xl font-bold text-white transition-all duration-200 rounded-full bg-slate-950 hover:bg-slate-900 hover:scale-105"
              >
                Start Working Smarter Now
              </Link>
            </div>
            <p className="mt-4 text-sm text-zinc-500">
              No complex setup required. We handle the heavy lifting.
            </p>
          </section>
        </article>
      </main>

      <Footer2 />
    </div>
  );
}
