//@ts-nocheck
import Footer2 from "@/components/Footer2"
import NavBar from "@/components/NavBar"
import Layout from "@/components/Layout"

import React from 'react';

const Section = ({ title, content }) => (
  <div className="bg-white/90 rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    {content}
  </div>
);

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-grow bg-gradient-to-r from-gradient-purple to-gradient-blue px-4 py-8 sm:px-8 md:px-16 lg:px-32">
        <article className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">About AI Marketing Solutions</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Democratizing AI technology for marketing, making it accessible and practical for businesses of all sizes.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <Section
              title="About Ludmila"
              content={
                <div className="flex flex-col items-center">
                  <img src="/images/Ludmila Domingos Marketing AI verde.png" alt="Ludmila Domingos" className="w-32 h-32 object-cover rounded-full mb-4" />
                  <ul className="list-disc pl-6 text-lg text-gray-700">
                    <li>A decade of marketing experience across Brazil, Italy, and Ireland</li>
                    <li>AI integration and marketing technology expert</li>
                  </ul>
                </div>
              }
            />
            <Section
              title="Our Mission"
              content={
                <p className="text-lg text-gray-700">
                  At AI Marketing Solutions, we are passionate about empowering Small to Medium-sized Enterprises (SMEs) and marketers with the tools and knowledge they need to thrive in an increasingly AI-driven marketplace
                </p>
              }
            />

            <Section
              title="Our Services"
              content={
                <ul className="list-disc pl-6 text-lg text-gray-700">
                  <li>AI Literacy Programs</li>
                  <li>Custom AI Agent Development</li>
                  <li>AI-Powered Content Creation</li>
                  <li>Private Language Models (LLMs)</li>
                </ul>
              }
            />



            <Section
              title="Our Approach"
              content={
                <ul className="list-disc pl-6 text-lg text-gray-700">
                  <li>Making AI accessible to all businesses</li>
                  <li>Providing practical, results-driven solutions</li>
                  <li>Continuous innovation and learning</li>
                  <li>Personalized service and support</li>
                </ul>
              }
            />

            <Section
              title="Why Choose Us?"
              content={
                <ul className="list-disc pl-6 text-lg text-gray-700">
                  <li>Tailored solutions for SMEs and marketers</li>
                  <li>Proven track record of improving marketing efficiency</li>
                  <li>Comprehensive approach to AI marketing</li>
                  <li>International perspective and adaptability</li>
                </ul>
              }
            />

            <Section
              title="Our Impact"
              content={
                <ul className="list-disc pl-6 text-lg text-gray-700">
                  <li>50% improvement in marketing quality and efficiency in Brazil</li>
                  <li>50% reduction in content creation time in Ireland</li>
                  <li>Empowering SMEs to compete effectively with larger companies</li>
                </ul>
              }
            />
          </div>

          <footer className="mt-12 text-center">
            <p className="text-xl text-white">Together, let's navigate the exciting world of AI-driven marketing and unlock new opportunities for growth.</p>
          </footer>
        </article>
      </main>
      <Footer2 />
    </div>
  );
}