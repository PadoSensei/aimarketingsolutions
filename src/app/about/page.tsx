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
                From the vibrant streets of Brazil to the cutting-edge corridors of global marketing, my journey over the last ten years has been nothing short of a deep dive into the evolving world of marketing. It's a world where artificial intelligence isn't just a tool—it's a revolution!
              </p>
            </section>
            <section className="text-gray-700 leading-relaxed mb-6">
              <p className="text-base">
                In today's market, every small business owner faces a new breed of competitors: those armed with advanced AI. The race isn't about who works the hardest; it's about who works the smartest. AI is fundamentally altering how we approach tasks that once drained hours of our day—from crafting perfect customer responses to managing intricate email campaigns and curating engaging social media content.
              </p>
            </section>
            <section className="text-gray-700 leading-relaxed mb-6">
              <p className="text-sm">
                Facing such rapid change, you might wonder how to keep pace. That's exactly why I'm here. With a rich background in international marketing and a keen eye for AI's transformative powers, I offer a bridge to the future where you don't just adapt; you lead.
              </p>
            </section>
            <section className="text-gray-700 leading-relaxed mb-8">
              <p className="text-base mb-4">Here's what I bring to your table:</p>
              <ul className="list-disc pl-6">
                <li>AI-Enhanced Marketing Workshops: Equip yourself with knowledge and tools from AI realms, turning every marketing challenge into an opportunity.</li>
                <li>Tailored Marketing Strategy Audits: I'll assess your current tactics and refine them with AI efficiencies to skyrocket your results.</li>
                <li>Custom AI Integrations: From chatbots to data analyzers, I craft AI agents that do more than just automate—they innovate.</li>
              </ul>
            </section>
            <footer className="text-gray-700 leading-relaxed">
              <p className="text-lg">Step into the future with me, and transform the way you do business.</p>
              <p className="text-base">Let's harness the full potential of AI together and not just meet the future but create it.</p>
            </footer>
          </article>
        </main>
      
        <Footer2 />
      </div>
      
    )
}