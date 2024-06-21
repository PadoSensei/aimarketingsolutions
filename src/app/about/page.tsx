import Footer2 from "@/components/Footer2"
import NavBar from "@/components/NavBar"
import Layout from "@/components/Layout"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-grow bg-gradient-to-r from-gradient-purple to-gradient-blue px-4 py-8 sm:px-8 md:px-16 lg:px-32">
        <article className="max-w-4xl mx-auto bg-white/80 rounded-lg shadow-md p-8">
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Hello, and welcome!</h1>
            <p className="text-xl text-gray-600">I'm Ludmila Domingos.</p>
          </header>
          <section className="text-gray-700 leading-relaxed mb-6">
            <p className="text-lg">
              As a seasoned marketing professional with a strong background in omni marketing, I've witnessed firsthand the transformative power of artificial intelligence (AI) in our industry. My journey from traditional marketing to AI-driven strategies has been nothing short of revolutionary, and I'm here to guide you through this exciting transition.
            </p>
          </section>

          <section className="text-gray-700 leading-relaxed mb-6">
            <p className="text-lg">
              In today's rapidly evolving market, AI isn't just a buzzword—it's a game-changer. Recognizing its immense potential, I've dedicated myself to mastering AI tools and strategies, completing prestigious courses like Piloting AI for Marketers by Marketing AI Institute, AI for Marketers by HubSpot, and Career Essentials in Generative AI by Microsoft and LinkedIn.
            </p>
          </section>

          <section className="text-gray-700 leading-relaxed mb-6">
            <p className="text-lg">
              My mission is clear: to empower marketers like you to thrive in this AI-driven landscape. Whether you're just starting to explore AI or looking to deepen your expertise, I offer the knowledge and tools you need to stay competitive and innovative.
            </p>
          </section>

          <section className="text-gray-700 leading-relaxed mb-8">
            <p className="text-lg mb-4">Here's how I can help elevate your marketing game:</p>
            <ul className="list-disc pl-6">
              <li>AI-Enhanced Marketing Workshops: Gain a deep understanding of AI fundamentals and their practical applications in marketing.</li>
              <li>Personalized Strategy Audits: I'll assess your current approach and integrate AI efficiencies to boost your results.</li>
              <li>AI Integration Guidance: From content creation to predictive analytics, learn how to leverage AI tools for streamlined workflows and improved outcomes.</li>
            </ul>
          </section>

          <footer className="text-gray-700 leading-relaxed">
            <p className="text-lg">Together, let's navigate the exciting world of AI-driven marketing and unlock new opportunities for growth.</p>
            <p className="text-lg">Are you ready to position yourself at the forefront of the marketing revolution? Let's embark on this transformative journey together.</p>
          </footer>
        </article>
      </main>

      <Footer2 />
    </div>

  )
}