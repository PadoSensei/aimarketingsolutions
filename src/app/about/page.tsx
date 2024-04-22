import Footer2 from "@/components/Footer2"
import NavBar from "@/components/NavBar"

// TODO - Footer not at bottom

export default function About() {
    return (
        <>
            <NavBar />
            <section className="bg-white border-gray-200 container p-12 h-full justify-center items-center space-y-6 ">
                <div className="">
                    Hello, and welcome! I'm Ludmila Domingos.
                </div>

                <div className="">
                    From the vibrant streets of Brazil to the cutting-edge corridors of global marketing, my journey over the last ten years has been nothing short of a deep dive into the evolving world of marketing. It's a world where artificial intelligence isn't just a tool—it's a revolution!
                </div>

                <div className="">
                    In today's market, every small business owner faces a new breed of competitors: those armed with advanced AI. The race isn't about who works the hardest; it's about who works the smartest. AI is fundamentally altering how we approach tasks that once drained hours of our day—from crafting perfect customer responses to managing intricate email campaigns and curating engaging social media content.
                </div>

                <div className="">
                    Facing such rapid change, you might wonder how to keep pace. That’s exactly why I’m here. With a rich background in international marketing and a keen eye for AI’s transformative powers, I offer a bridge to the future where you don't just adapt; you lead.
                </div>

                <div className="">
                    Here's what I bring to your table:
                    <ul>
                        <li>AI-Enhanced Marketing Workshops: Equip yourself with knowledge and tools from AI realms, turning every marketing challenge into an opportunity.</li>
                        <li>Tailored Marketing Strategy Audits: I'll assess your current tactics and refine them with AI efficiencies to skyrocket your results.</li>
                        <li>Custom AI Integrations: From chatbots to data analyzers, I craft AI agents that do more than just automate—they innovate.</li>
                    </ul>
                </div>
                <div className="">
                    Step into the future with me, and transform the way you do business. Let’s harness the full potential of AI together and not just meet the future but create it.
                </div>
            </section>
            {/* <Footer2 /> */}
        </>
    )
}

