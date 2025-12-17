//@ts-nocheck
import Footer2 from "@/components/Footer2";
import NavBar from "@/components/NavBar";

// Simple Card for the "What We Do" section
const ServiceCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-start h-full p-8 transition-transform duration-300 shadow-lg bg-white/95 rounded-xl hover:-translate-y-1">
    <div className="mb-6 text-5xl">{icon}</div>
    <h3 className="mb-4 text-2xl font-bold text-gray-900">{title}</h3>
    <p className="text-lg leading-relaxed text-gray-700">{description}</p>
  </div>
);

// Step item for "How It Works"
const ProcessStep = ({ number, title, description }) => (
  <div className="flex flex-col items-center p-4 text-center">
    <div className="flex items-center justify-center w-16 h-16 mb-6 text-2xl font-bold text-purple-700 bg-white border-4 border-purple-200 rounded-full shadow-md">
      {number}
    </div>
    <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
    <p className="max-w-sm text-lg text-white/90">{description}</p>
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
        "We use proven, affordable tools that already exist - no need to reinvent the wheel. We identify the right software for your needs, set it up, and show you how to use it.",
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
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-grow px-4 py-12 bg-gradient-to-r from-gradient-purple to-gradient-blue sm:px-8 md:px-16 lg:px-32">
        <article className="mx-auto space-y-20 max-w-7xl">
          {/* SECTION 1: WHAT WE ACTUALLY DO */}
          <section>
            <h1 className="mb-12 text-4xl font-bold text-center text-white md:text-5xl">
              What We Actually Do
            </h1>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {servicesData.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </section>

          {/* SECTION 2: HOW IT WORKS */}
          <section className="p-8 border bg-white/10 rounded-3xl md:p-12 border-white/20">
            <h2 className="mb-12 text-3xl font-bold text-center text-white md:text-4xl">
              How It Works
            </h2>
            <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
              {/* Optional connector line for desktop */}
              <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-1 bg-white/30 -z-10" />

              {processData.map((step, index) => (
                <ProcessStep key={index} {...step} />
              ))}
            </div>
          </section>

          {/* SECTION 3: CTA */}
          <section className="pb-8 text-center">
            <a
              href="/contact"
              className="inline-block px-12 py-4 text-xl font-bold text-purple-700 transition-all duration-200 bg-white rounded-full shadow-xl hover:bg-gray-100 hover:scale-105"
            >
              Contact Us
            </a>
          </section>
        </article>
      </main>

      <Footer2 />
    </div>
  );
}
