import Layout from "@/components/Layout";
import NavBar from "@/components/NavBar";
import Footer2 from "@/components/Footer2";
import AICarousel from "@/components/AICarousel";
import AICoachingHero from "@/components/AICoachingHero";

export default function AiCoachingPage() {
  return (
    <Layout>
      <NavBar />

      <main className="min-h-screen text-white bg-black">
        {/* ── Hero ─────────────────────────────────────────── */}
        <AICoachingHero />

        {/* ── Main Content ─────────────────────────────────── */}
        <div className="max-w-4xl px-6 pb-32 mx-auto">
          {/* ── Section: The Roadmap ─────────────────────────── */}
          <div className="mb-8">
            {/* Section badge — mirrors Gamma's week tag chips */}
            <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest text-purple-300 uppercase bg-purple-950/60 border border-purple-800/60 rounded-full mb-5">
              4-Week Programme
            </span>

            <h2 className="mb-3 text-4xl font-bold tracking-tight text-white">
              The Coaching <span className="gradient-text">Roadmap</span>
            </h2>

            <p className="max-w-2xl text-lg text-purple-300/80">
              A proven framework designed to turn AI anxiety into strategic
              advantage — one week at a time.
            </p>
          </div>

          {/* ── Carousel ─────────────────────────────────────── */}
          <div className="mb-28">
            <AICarousel />
          </div>

          {/* ── Divider ──────────────────────────────────────── */}
          <div className="mb-20 border-t border-purple-900/40" />

          {/* ── Section: Booking ─────────────────────────────── */}
          <section id="book" className="space-y-8">
            <div className="space-y-3 text-center">
              <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest text-purple-300 uppercase bg-purple-950/60 border border-purple-800/60 rounded-full">
                Get Started
              </span>

              <h2 className="text-4xl font-bold text-white">
                Book your intro call
              </h2>

              <p className="text-lg text-purple-300/80">
                30 minutes. No pressure. Just clarity.
              </p>
            </div>

            <div className="overflow-hidden border shadow-2xl rounded-3xl border-purple-900/60 shadow-purple-950/50">
              {/* Brand accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-[#64149C] to-[#A8E5FE]" />

              {/* Light wrapper — Google Calendar renders for light backgrounds */}
              <div className="overflow-hidden bg-white rounded-b-3xl">
                <iframe
                  src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2r6lcdEndqFrF4_2mu2yz0m0Ya4FHhKGJ5SrUO3ounqTTtwSexSLOBKP2TWDUW-2NYccLTsigM?gv=true"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  title="Schedule a call with AI Solutions"
                  className="block"
                  style={{ colorScheme: "light" }}
                />
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer2 />
    </Layout>
  );
}
