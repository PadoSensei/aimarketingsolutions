import Footer2 from "@/components/Footer2"
import Layout from "@/components/Layout"
import NavBar from "@/components/NavBar"

// TODO - Footer not at bottom
// TODO - Center text in screen on background card, background card sits on the gradient

export default function About() {
    return (
        <>
            <NavBar />
            {/* <Layout> */}
            <div className="h-screen lg:px-96 md:px-20 bg-gradient-to-r from-gradient-purple to-gradient-blue">
            <br />
                <div className="flex pt-2 justify-center text-2xl font-sans items-center bg-white/80 rounded p-4">
                    Hello, and welcome! I'm Ludmila Domingos.
                </div>
                <br />
                {/* <div className="text-center font-bold text-gray-600">
        "We Excellence in Solving Problems Creatively"
      </div> */}
                <div className="p-4 text-gray-600 text-md sm:text-left md:text-left text-center font-sans bg-white/80 rounded">
                    From the vibrant streets of Brazil to the cutting-edge corridors of global marketing, my journey over the last ten years has been nothing short of a deep dive into the evolving world of marketing. It's a world where artificial intelligence isn't just a tool—it's a revolution!
                </div>
                 <br />      
                <div className="text-center text-md text-gray-600 px-4 font_sans py-3 bg-white/80 rounded">
                    In today's market, every small business owner faces a new breed of competitors: those armed with advanced AI. The race isn't about who works the hardest; it's about who works the smartest. AI is fundamentally altering how we approach tasks that once drained hours of our day—from crafting perfect customer responses to managing intricate email campaigns and curating engaging social media content.
                </div>
                <br />   
                <div className="text-center text-md px-4 font-sans text-gray-600  pt-2 pb-3 bg-white/80 rounded">
                    Facing such rapid change, you might wonder how to keep pace. That’s exactly why I’m here. With a rich background in international marketing and a keen eye for AI’s transformative powers, I offer a bridge to the future where you don't just adapt; you lead.
                </div>
                <br />   
                <div className="text-center text-md px-4 font-sans text-gray-600  pt-2 pb-3 bg-white/80 rounded">
                    Here's what I bring to your table:
                {/* </div> */}

                {/* <div className="m-4 bg-white/80 rounded"> */}
                    <ul className="list-disc bg-white/80 rounded">
                        <li>AI-Enhanced Marketing Workshops: Equip yourself with knowledge and tools from AI realms, turning every marketing challenge into an opportunity.</li>
                        <li>Tailored Marketing Strategy Audits: I'll assess your current tactics and refine them with AI efficiencies to skyrocket your results.</li>
                        <li>Custom AI Integrations: From chatbots to data analyzers, I craft AI agents that do more than just automate—they innovate.</li>
                    </ul>

                </div>
                <br />   
                <div className="text-center text-md px-4 font-sans text-gray-600  pt-2 pb-3 bg-white/80 rounded">
                   <p>
                   Step into the future with me, and transform the way you do business.
                    </p> 
                    <p>
                    Let’s harness the full potential of AI together and not just meet the future but create it.
                    </p> 
                </div>
            </div>

            {/* </Layout> */}
            <Footer2 />
        </>
    )
}

{/* <sectioFrom the vibrant streets of Brazil to the cutting-edge corridors of global marketing, my journey over the last ten years has been nothing short of a deep dive into the evolving world of marketing. It's a world where artificial intelligence isn't just a tool—it's a revolution!
<div classNameName="">
    Hello, and welcome! I'm Ludmila Domingos.
</div>

<div classNameName="">
    From the vibrant streets of Brazil to the cutting-edge corridors of global marketing, my journey over the last ten years has been nothing short of a deep dive into the evolving world of marketing. It's a world where artificial intelligence isn't just a tool—it's a revolution!
</div>

<div classNameName="">
    In today's market, every small business owner faces a new breed of competitors: those armed with advanced AI. The race isn't about who works the hardest; it's about who works the smartest. AI is fundamentally altering how we approach tasks that once drained hours of our day—from crafting perfect customer responses to managing intricate email campaigns and curating engaging social media content.
</div>

<div classNameName="">
    Facing such rapid change, you might wonder how to keep pace. That’s exactly why I’m here. With a rich background in international marketing and a keen eye for AI’s transformative powers, I offer a bridge to the future where you don't just adapt; you lead.
</div>

<div classNameName="">
    Here's what I bring to your table:
    <ul>
        <li>AI-Enhanced Marketing Workshops: Equip yourself with knowledge and tools from AI realms, turning every marketing challenge into an opportunity.</li>
        <li>Tailored Marketing Strategy Audits: I'll assess your current tactics and refine them with AI efficiencies to skyrocket your results.</li>
        <li>Custom AI Integrations: From chatbots to data analyzers, I craft AI agents that do more than just automate—they innovate.</li>
    </ul>
</div>
<div classNameName="">
    Step into the future with me, and transform the way you do business. Let’s harness the full potential of AI together and not just meet the future but create it.
</div>

</section> */}