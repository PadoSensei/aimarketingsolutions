import React from "react";
import NavBar from "@/components/NavBar";
import Footer2 from "@/components/Footer2";
import Link from "next/link";

export default function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <NavBar />

      <main className="relative flex-grow px-4 pt-32 pb-20 overflow-hidden sm:px-8">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] translate-y-1/3 pointer-events-none" />

        <article className="relative z-10 max-w-4xl mx-auto space-y-12">
          {/* HEADER */}
          <header className="mb-16 text-center">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <div className="inline-flex items-center px-4 py-2 space-x-2 text-sm border rounded-full bg-white/5 border-white/10 text-zinc-400">
              <span>Effective Date: {currentDate}</span>
              <span className="w-1 h-1 rounded-full bg-zinc-500" />
              <span>Last Updated: {currentDate}</span>
            </div>
          </header>

          {/* MAIN CONTENT CARD */}
          <div className="p-8 space-y-12 border shadow-2xl bg-zinc-900/40 backdrop-blur-md border-white/10 rounded-3xl md:p-12">
            {/* 1. Our Commitment */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-white">
                Our Commitment
              </h2>
              <p className="text-lg leading-relaxed text-zinc-300">
                At AI Solutions, we take your privacy seriously. This policy
                explains what information we collect (
                <span className="font-semibold text-purple-400">
                  spoiler: very little
                </span>
                ), how we use it, and your rights. We work with data and AI
                tools, so we want to be completely transparent about our
                practices.
              </p>
            </section>

            {/* 2. What We Collect (Grid Layout) */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-white">
                What We Collect
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* DO NOT COLLECT */}
                <div className="p-6 border rounded-2xl bg-red-500/5 border-red-500/20">
                  <h3 className="flex items-center mb-4 font-bold text-red-400">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    We do NOT collect:
                  </h3>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li>• Email addresses (unless sent directly)</li>
                    <li>• Cookies or tracking technologies</li>
                    <li>• Analytics or behavioral data</li>
                    <li>• Personal identifiers</li>
                  </ul>
                </div>

                {/* DO COLLECT */}
                <div className="p-6 border rounded-2xl bg-green-500/5 border-green-500/20">
                  <h3 className="flex items-center mb-4 font-bold text-green-400">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    We DO collect:
                  </h3>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li>• Messages sent via our contact form</li>
                    <li>• Info you voluntarily provide</li>
                    <li>• Necessary business data for projects</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. How We Use Info */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white">
                How We Use Your Information
              </h2>

              <div className="pl-6 border-l-2 border-purple-500/30">
                <h3 className="mb-2 text-lg font-semibold text-white">
                  Contact Inquiries
                </h3>
                <p className="text-zinc-400">
                  To respond to your inquiry, schedule conversations, and
                  determine if we can help with your needs.
                </p>
              </div>

              <div className="pl-6 border-l-2 border-blue-500/30">
                <h3 className="mb-2 text-lg font-semibold text-white">
                  Client Work
                </h3>
                <p className="mb-2 text-zinc-400">
                  When working with clients, we access only the systems and data
                  you explicitly authorize to implement automation solutions.
                </p>
                <p className="font-medium text-zinc-300">We will never:</p>
                <ul className="pl-5 mt-2 space-y-1 list-disc text-zinc-400">
                  <li>Sell your information</li>
                  <li>Add you to marketing lists without permission</li>
                  <li>
                    Share your data with third parties (except as required by
                    law)
                  </li>
                  <li>Access systems without explicit authorization</li>
                </ul>
              </div>
            </section>

            {/* 4. AI & Data */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-white">
                Working With AI & Data
              </h2>
              <p className="mb-4 text-zinc-400">
                Because we implement AI-powered automation solutions for
                clients:
              </p>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 text-sm font-bold tracking-wider text-purple-400 uppercase">
                    What This Means
                  </h4>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li>We may process business data through AI tools</li>
                    <li>
                      We use reputable, secure third-party services (e.g.,
                      HubSpot)
                    </li>
                    <li>We only access authorized data</li>
                    <li>Security and privacy by design</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-bold tracking-wider text-blue-400 uppercase">
                    Your Control
                  </h4>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li>You choose which systems we access</li>
                    <li>You approve all implementations</li>
                    <li>You own your data—always</li>
                    <li>You can revoke access at any time</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 5. Data Security & Retention */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                Security & Retention
              </h2>
              <p className="text-zinc-400">
                We implement reasonable security measures (secure channels,
                access controls, limited retention). We keep contact inquiries
                for up to 12 months. Client project data is retained only as
                long as necessary or until you request deletion.
              </p>
            </section>

            {/* 6. Rights & Location */}
            <section className="p-6 border bg-white/5 rounded-2xl border-white/5">
              <h2 className="mb-4 text-xl font-bold text-white">
                Your Rights (GDPR)
              </h2>
              <p className="mb-4 text-zinc-400">
                We operate under EU data protection standards. You have the
                right to know what info we have, request corrections, request
                deletion, or withdraw consent.
              </p>
              <p className="text-sm italic text-zinc-500">
                To exercise these rights, email us at:{" "}
                <a
                  href="mailto:contact@aisolutions.irish"
                  className="text-purple-400 hover:underline"
                >
                  contact@aisolutions.irish
                </a>
              </p>
            </section>
          </div>

          {/* THE SHORT VERSION (Summary Box) */}
          <div className="p-8 text-center border bg-gradient-to-r from-purple-900/40 to-blue-900/40 border-purple-500/30 rounded-3xl md:p-10">
            <h2 className="mb-4 text-2xl font-bold text-white">
              The Short Version
            </h2>
            <p className="max-w-2xl mx-auto mb-6 text-lg text-zinc-200">
              We don't track you on this website. No cookies, no analytics, no
              email collection. When you work with us, we only access what you
              authorize, we keep it secure, and you always own your data.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 text-sm font-medium md:flex-row">
              <span className="text-purple-300">Questions? Just ask:</span>
              <a
                href="mailto:contact@aisolutions.irish"
                className="px-6 py-2 text-black transition-colors bg-white rounded-full hover:bg-gray-200"
              >
                contact@aisolutions.irish
              </a>
            </div>
          </div>
        </article>
      </main>

      <Footer2 />
    </div>
  );
}
