import React from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { servicesData } from "@/data/servicesData";
import Button from "@/components/Button";

// 1. Define Interfaces
interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  slug: string;
}

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

// 2. Refactor Components
const ServiceCard = ({ icon, title, description, slug }: ServiceCardProps) => (
  <div className="group relative flex flex-col h-full p-8 rounded-2xl bg-zinc-900/50 border border-white/8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(147,51,234,0.12)]">
    <div className="absolute inset-0 transition-opacity duration-500 opacity-0 pointer-events-none bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 group-hover:opacity-100 rounded-2xl" />

    <div className="relative z-10 flex flex-col items-start flex-grow">
      <div className="flex items-center justify-center mb-5 transition-all duration-300 border w-14 h-14 rounded-2xl bg-zinc-800/70 border-white/5 group-hover:border-purple-500/30 group-hover:bg-purple-900/20">
        <span className="text-3xl">{icon}</span>
      </div>

      <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-200 group-hover:text-purple-100">
        {title}
      </h3>

      <p className="flex-grow mb-6 text-base leading-relaxed transition-colors duration-200 text-zinc-400 group-hover:text-zinc-300">
        {description}
      </p>

      {slug === "ai-coaching" && (
        <div className="w-full mt-auto">
          <Button href="/ai-coaching" className="justify-center w-full">
            Sign up!
          </Button>
        </div>
      )}
    </div>
  </div>
);

const ProcessStep = ({ number, title, description }: ProcessStepProps) => (
  <div className="relative z-10 flex flex-col items-center p-4 text-center group">
    <div className="flex items-center justify-center w-16 h-16 mb-5 rounded-full bg-zinc-900 border-2 border-zinc-700 group-hover:border-purple-500 group-hover:shadow-[0_0_24px_rgba(147,51,234,0.35)] transition-all duration-300">
      <span className="text-2xl font-extrabold gradient-text">{number}</span>
    </div>
    <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
    <p className="max-w-[220px] text-sm leading-relaxed text-zinc-400">
      {description}
    </p>
  </div>
);

// 3. Page component
export default function Services() {
  const processData: ProcessStepProps[] = [
    {
      number: "1",
      title: "Initial Conversation",
      description: "We understand exactly where you're losing time.",
    },
    {
      number: "2",
      title: "We Send You a Plan",
      description: "Specific tools and automations, tailored to your business.",
    },
    {
      number: "3",
      title: "We Do the Work",
      description: "You approve, we implement — you get your time back.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <NavBar />
      <main className="relative flex-grow px-5 pt-16 pb-24 overflow-hidden sm:px-8 md:px-12 lg:px-20">
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-purple-900/15 rounded-full blur-[130px] pointer-events-none -translate-y-1/3" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[110px] pointer-events-none translate-y-1/4" />

        <article className="relative z-10 mx-auto space-y-20 max-w-7xl">
          <section>
            <div className="mb-12 space-y-4 text-center">
              <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest text-purple-300 uppercase bg-purple-900/25 border border-purple-700/40 rounded-full">
                What We Do
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                Practical Solutions,{" "}
                <span className="gradient-text">Real Results</span>
              </h1>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {servicesData.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </section>

          <section className="relative p-8 overflow-hidden border md:p-14 rounded-3xl border-white/5 bg-zinc-900/25 backdrop-blur-sm">
            {/* ... Process steps grid ... */}
            <div className="relative z-10">
              <h2 className="mb-12 text-3xl font-bold text-center text-white">
                How It <span className="italic text-purple-400">Works</span>
              </h2>
              <div className="relative grid grid-cols-1 gap-10 md:grid-cols-3">
                {processData.map((step, index) => (
                  <ProcessStep key={index} {...step} />
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
