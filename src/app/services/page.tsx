//@ts-nocheck
import Footer2 from "@/components/Footer2"
import NavBar from "@/components/NavBar"
import Layout from "@/components/Layout"

const ServiceCard = ({ title, description, items, benefits }) => (
  <div className="bg-white/90 rounded-lg shadow-md p-6">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-lg mb-2">{description}</p>
    <ul className="list-disc pl-6 text-lg mb-2">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    <p className="text-lg font-semibold">Benefits:</p>
    <ul className="list-disc pl-6 text-lg">
      {benefits.map((benefit, index) => (
        <li key={index}>{benefit}</li>
      ))}
    </ul>
  </div>
);

export default function Services() {
  const services = [
    {
      title: "AI Literacy Programmes",
      description: "Demystify AI and harness its power for your marketing efforts",
      items: [
        "Comprehensive Courses: From AI basics to advanced applications in marketing",
        "Hands-on Workshops: Practical sessions to implement AI tools in your workflows",
        "Customized Training: Tailored programmes for your team's specific needs"
      ],
      benefits: [
        "Enhance decision-making with AI-driven insights",
        "Stay ahead of the competition with the latest AI trends",
        "Boost your team's confidence and efficiency in leveraging AI for marketing"
      ]
    },
    {
      title: "Custom AI Agent Development",
      description: "Automate and optimize your marketing processes with tailored AI solutions",
      items: [
        "Personalized AI Agents: Designed to address your specific marketing challenges",
        "Workflow Automation: Streamline repetitive tasks and focus on strategy",
        "Data Analysis: Gain deeper insights into customer behavior and preferences"
      ],
      benefits: [
        "Increase efficiency and productivity by up to 50%",
        "Make data-driven decisions with confidence",
        "Scale your marketing efforts and results"
      ]
    },
    {
      title: "AI-Powered Content Creation",
      description: "Generate high-quality, personalized content at scale",
      items: [
        "Better Content Generation: Create weeks' worth of quality content in hours, not days",
        "Multi-Format Mastery: From podcasts to blog posts, from articles to social media, video calls to action lists",
        "Personalization Engine: Tailor content to specific audience segments automatically"
      ],
      benefits: [
        "Reduce content creation time by up to 70%",
        "Maintain a consistent brand voice across all channels",
        "Increase engagement rates with AI-personalized content"
      ]
    },
    {
      title: "Private Language Models (LLMs)",
      description: "Harness the power of custom-built AI models for your specific industry and needs",
      items: [
        "Industry-Specific LLMs: Trained on data relevant to your business sector",
        "Secure and Private: Maintain control over your data and insights",
        "Continuous Learning: Models that evolve with your business"
      ],
      benefits: [
        "Get more accurate and relevant AI-generated content",
        "Protect sensitive information with private models",
        "Stay at the forefront of AI technology in your industry"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-grow bg-gradient-to-r from-gradient-purple to-gradient-blue px-4 py-8 sm:px-8 md:px-16 lg:px-32">
        <article className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-white text-center">Our Services</h2>
          <p className="text-xl mb-8 text-white text-center">
            At AI Marketing Solutions, we empower SMEs and marketers with cutting-edge AI technologies. Our services are designed to make AI accessible, practical, and impactful for businesses of all sizes
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <footer className="mt-12 text-white text-center">
            <p className="text-lg">Transform your marketing with AI-powered solutions tailored for your business. Produce better content, make data-driven decisions, and drive results - all in less time</p>
          </footer>
        </article>
      </main>
      <Footer2 />
    </div>
  );
}