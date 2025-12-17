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
    <section id="services" className="py-16 bg-black md:py-24">
      <div className="container px-4 mx-auto md:px-6">
        {/* Header Section */}
        <header className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tighter text-transparent uppercase md:text-5xl bg-clip-text bg-gradient-to-r from-white to-gray-500">
            What We Actually Do
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg md:text-xl text-zinc-200 dark:text-zinc-100">
            We help small businesses stop drowning in manual work with practical
            solutions.
          </p>
        </header>

        {/* 3-Column Grid for Services */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-8 space-y-4 transition-colors duration-300 border border-gray-800 rounded-xl bg-zinc-900/50 hover:bg-zinc-900"
            >
              <div className="p-4 bg-black bg-opacity-50 border border-gray-800 rounded-full">
                <span
                  className="text-4xl"
                  role="img"
                  aria-label={service.title}
                >
                  {service.icon}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-center text-white">
                {service.title}
              </h3>
              <p className="text-lg leading-relaxed text-center text-zinc-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <Link
            className="px-8 py-3 text-lg font-bold text-black transition-colors bg-white rounded-full hover:bg-gray-200"
            href="/services"
          >
            Find Out More About How We Do It!
          </Link>
        </div>
      </div>
    </section>
  );
}
