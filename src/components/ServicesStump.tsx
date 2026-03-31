import Link from "next/link";
import { servicesData } from "../data/servicesData";

export default function ServicesStump() {
  return (
    <section id="services" className="relative py-20 bg-black md:py-32">
      <div className="container relative z-10 px-4 mx-auto md:px-6">
        {/* Header Section */}
        <header className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white uppercase md:text-5xl">
            What We <span className="gradient-text">Actually Do</span>
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400">
            We help small businesses stop drowning in manual work with
            practical, no-nonsense solutions.
          </p>
        </header>

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="relative p-8 transition-all duration-300 border group rounded-2xl bg-zinc-900/40 border-white/10 hover:border-purple-500/50 hover:-translate-y-2"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 group-hover:opacity-100 rounded-2xl" />

              <div className="relative z-10 flex flex-col items-center space-y-4">
                <div className="p-4 transition-transform duration-300 border rounded-full shadow-inner bg-zinc-800 border-white/5 group-hover:scale-110">
                  <span
                    className="text-4xl filter drop-shadow-lg"
                    role="img"
                    aria-label={service.title}
                  >
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-center text-white transition-colors group-hover:text-purple-200">
                  {service.title}
                </h3>
                <p className="text-lg leading-relaxed text-center transition-colors text-zinc-400 group-hover:text-zinc-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <Link
            href="/services"
            className="px-8 py-4 text-lg font-bold text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-purple-600 to-blue-600 shadow-purple-500/25 hover:shadow-purple-500/50 hover:scale-105"
          >
            Find Out More About How We Do It
          </Link>
        </div>
      </div>
    </section>
  );
}
