import Link from "next/link";
import { servicesData } from "../data/servicesData";
import Button from "./Button";

export default function ServicesStump() {
  return (
    <section
      id="services"
      className="relative py-20 overflow-hidden bg-black md:py-28"
    >
      {/* Ambient glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-900/8 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/2 pointer-events-none" />

      <div className="container relative z-10 px-5 mx-auto md:px-8">
        {/* Header */}
        <header className="space-y-4 text-center mb-14">
          <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest text-purple-300 uppercase bg-purple-900/25 border border-purple-700/40 rounded-full">
            Our Services
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            What We <span className="gradient-text">Actually Do</span>
          </h2>
          <div className="w-16 h-px mx-auto bg-gradient-to-r from-purple-500 to-blue-500" />
          <p className="max-w-xl mx-auto text-base text-zinc-400 md:text-lg">
            We help small businesses stop drowning in manual work with
            practical, no-nonsense solutions.
          </p>
        </header>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group relative flex flex-col p-6 rounded-2xl bg-zinc-900/50 border border-white/8 transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-500/40 hover:shadow-[0_0_35px_rgba(147,51,234,0.1)]"
            >
              {/* Hover glow fill */}
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 pointer-events-none bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 group-hover:opacity-100 rounded-2xl" />

              <div className="relative z-10 flex flex-col items-center flex-grow space-y-4 text-center">
                {/* Icon */}
                <div className="flex items-center justify-center transition-all duration-300 border w-14 h-14 rounded-2xl bg-zinc-800/70 border-white/5 group-hover:border-purple-500/30 group-hover:bg-purple-900/20">
                  <span
                    className="text-3xl"
                    role="img"
                    aria-label={service.title}
                  >
                    {service.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white transition-colors duration-200 group-hover:text-purple-100">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="flex-grow text-sm leading-relaxed transition-colors duration-200 text-zinc-400 group-hover:text-zinc-300">
                  {service.description}
                </p>

                {/* AI Coaching CTA */}
                {service.slug === "ai-coaching" && (
                  <div className="w-full pt-2 mt-auto">
                    <Button
                      href="/ai-coaching"
                      className="justify-center w-full text-sm"
                    >
                      Sign up for AI Coaching
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-14">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white rounded-full border border-purple-700/50 hover:bg-purple-900/25 hover:border-purple-500 transition-all duration-200"
          >
            See How We Do It
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
    </section>
  );
}
