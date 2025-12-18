import Link from "next/link";

export default function ServicesStump() {
  const services = [
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

        {/* 3-Column Grid for Services */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
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
            className="group relative inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-black transition-all bg-white rounded-full hover:bg-gray-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            href="/services"
          >
            Find Out More About How We Do It
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
