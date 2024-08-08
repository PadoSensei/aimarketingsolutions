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
    <section id="services" className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Discover Our Unique Services
          </h2>
          <p className="mt-4 text-lg md:text-xl text-zinc-200 dark:text-zinc-100 max-w-3xl mx-auto">
            Our services are designed to enhance your productivity and streamline your workflow.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center space-y-4 border-gray-800 p-6 rounded-lg">
            <div className="p-3 bg-black bg-opacity-50 rounded-full">
              <IconPersonVideo3 className="text-white h-8 w-8 opacity-75" />
            </div>
            <h3 className="text-2xl font-bold text-white text-center">AI Literacy Programs</h3>
            <p className="text-lg md:text-xl text-zinc-200 dark:text-zinc-100 text-center">
              Empower your marketing team with comprehensive AI literacy training designed to improve productivity, augment creativity, and streamline operations.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 border-gray-800 p-6 rounded-lg">
            <div className="p-3 bg-black bg-opacity-50 rounded-full">
              <IconPersonChalkboard className="text-white h-8 w-8 opacity-75" />
            </div>
            <h3 className="text-2xl font-bold text-white text-center">AI Consultancy</h3>
            <p className="text-lg md:text-xl text-zinc-200 dark:text-zinc-100 text-center">
              Get tailored AI solutions to integrate into your marketing strategies. Our experts provide end-to-end guidance to help you harness AI for growth and innovation.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 border-gray-800 p-6 rounded-lg">
            <div className="p-3 bg-black bg-opacity-50 rounded-full">
              <IconProbot className="text-white h-8 w-8 opacity-75" />
            </div>
            <h3 className="text-2xl font-bold text-white text-center">AI Mentoring</h3>
            <p className="text-lg md:text-xl text-zinc-200 dark:text-zinc-100 text-center">
              Receive personalized mentorship on implementing AI in your daily tasks, both for marketing and administrative functions, to enhance efficiency and effectiveness.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 border-gray-800 p-6 rounded-lg">
            <div className="p-3 bg-black bg-opacity-50 rounded-full">
              <IconLike className="text-white h-8 w-8 opacity-75" />
            </div>
            <h3 className="text-2xl font-bold text-white text-center">AI Workshops</h3>
            <p className="text-lg md:text-xl text-zinc-200 dark:text-zinc-100 text-center">
              Participate in interactive workshops that offer hands-on experience with AI tools and techniques, enhancing your team's efficiency and creativity.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 border-gray-800 p-6 rounded-lg">
            <div className="p-3 bg-black bg-opacity-50 rounded-full">
              <IconLike className="text-white h-8 w-8 opacity-75" />
            </div>
            <h3 className="text-2xl font-bold text-white text-center">AI Online Courses</h3>
            <p className="text-lg md:text-xl text-zinc-200 dark:text-zinc-100 text-center">
              Access self-paced online courses that break down complex AI concepts into digestible modules, available anytime to fit your schedule.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 border-gray-800 p-6 rounded-lg">
            <div className="p-3 bg-black bg-opacity-50 rounded-full">
              <IconLike className="text-white h-8 w-8 opacity-75" />
            </div>
            <h3 className="text-2xl font-bold text-white text-center">AI In-Person Courses</h3>
            <p className="text-lg md:text-xl text-zinc-200 dark:text-zinc-100 text-center">
              Join our in-depth in-person courses focusing on strategic AI applications in marketing, taught by industry experts.
            </p>
          </div>
        </div>
      </div>
        <div className='p-top-4 flex justify-center'>
          <Link className="bg-white px-6 py-2 rounded-md text-lg font-semibold" href="./services">
            Find Out More About Our Services!
          </Link>
        </div>
    </section>
  );
}


function IconProbot(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M12 .04a1.743 1.743 0 00-.537 3.401l-.631 2.579H2.456A2.456 2.456 0 000 8.476v13.029a2.456 2.456 0 002.456 2.456h19.088c1.356 0 2.456-1.1 2.456-2.456V8.476c0-1.356-1.1-2.456-2.456-2.456h-8.403l-.616-2.575A1.743 1.743 0 0011.999.04zM3.933 7.881h16.136c1.101 0 1.994.893 1.994 1.994v10.117a1.994 1.994 0 01-1.994 1.994H3.933a1.994 1.994 0 01-1.994-1.994V9.875c0-1.101.893-1.994 1.994-1.994zm3.254 2.312a4.575 4.575 0 100 9.15 4.575 4.575 0 000-9.15zm9.743 0a4.575 4.575 0 100 9.15 4.575 4.575 0 000-9.15zm-9.743 1.07a3.506 3.506 0 110 7.011 3.506 3.506 0 010-7.011zm9.743 0a3.506 3.506 0 110 7.011 3.506 3.506 0 010-7.011zm-9.743 1.663a1.843 1.843 0 100 3.686 1.843 1.843 0 000-3.686zm9.743 0a1.843 1.843 0 100 3.686 1.843 1.843 0 000-3.686zm-6.927 6.5v2.159h.706v-2.159h-.706zm1.077 0v2.159h.705v-2.159h-.705zm1.076 0v2.159h.706v-2.159h-.706zm1.077 0v2.159h.706v-2.159h-.706zm1.077.03v2.1a1.08 1.08 0 00.829-1.049v-.001c0-.51-.354-.937-.829-1.05zm-4.678.028a1.08 1.08 0 00-.731 1.021v.001c0 .474.306.876.731 1.021v-2.043z" />
    </svg>
  );
}




function IconPersonVideo3(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M14 9.5a2 2 0 11-4 0 2 2 0 014 0zm-6 5.7c0 .8.8.8.8.8h6.4s.8 0 .8-.8-.8-3.2-4-3.2-4 2.4-4 3.2z" />
      <path d="M2 2a2 2 0 00-2 2v8a2 2 0 002 2h5.243c.122-.326.295-.668.526-1H2a1 1 0 01-1-1V4a1 1 0 011-1h12a1 1 0 011 1v7.81c.353.23.656.496.91.783.059-.187.09-.386.09-.593V4a2 2 0 00-2-2H2z" />
    </svg>
  );
}


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