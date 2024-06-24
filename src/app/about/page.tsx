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
              As a seasoned marketing professional with a strong background in omni marketing, I have always been passionate about leveraging cutting-edge technologies to drive marketing success. In recent years, I have developed a deep interest in the transformative potential of artificial intelligence (AI) in marketing.
            </p>
          </section>

          <section className="text-gray-700 leading-relaxed mb-6">
            <p className="text-lg">
              In recent years, I have developed a deep interest in the transformative potential of artificial intelligence (AI) in marketing.
            </p>
          </section>

          <section className="text-gray-700 leading-relaxed mb-6">
            <p className="text-lg">
              Recognizing the immense impact AI will have on the marketing landscape, I have dedicated myself to researching and mastering AI tools and strategies. To further my expertise, I have completed several prestigious courses, including:

            </p>
          </section>

          <section className="text-gray-700 leading-relaxed mb-8">
            <p className="text-lg mb-4">Here's how I can help elevate your marketing game:</p>
            <ul className="list-disc pl-6">
              <li>Piloting AI for Marketers by Marketing AI Institute</li>
              <li>AI for Marketers by HubSpot </li>
              <li>Career Essentials in Generative AI by Microsoft and LinkedIn</li>
            </ul>
          </section>

          <section className="text-gray-700 leading-relaxed mb-6">
            <p className="text-lg">
              These courses have equipped me with the knowledge and skills needed to effectively implement AI in marketing campaigns, from content creation and personalization to predictive analytics and automation.
            </p>
          </section>

          <section className="text-gray-700 leading-relaxed mb-6">
            <p className="text-lg">
              My mission is to help marketers like you elevate your professional level and become fiercely competitive in this fast-paced, technology-driven industry. By sharing my expertise and insights, I aim to empower you to:
            </p>
          </section>

          <section className="text-gray-700 leading-relaxed mb-8">

            <ul className="list-disc pl-6">
              <li>Understand the fundamentals of AI and its applications in marketing</li>
              <li>Identify opportunities to integrate AI into your marketing strategies </li>
              <li>Leverage AI tools to streamline workflows, boost productivity, and drive better results</li>
              <li>Develop the skills and mindset needed to thrive in an AI-powered marketing landscape</li>
              <li>Stay ahead of the curve and position yourself as a valuable asset in your organization
              </li>
            </ul>
          </section>

          <section className="text-gray-700 leading-relaxed mb-6">
            <p className="text-lg">
              Through a combination of workshops, online courses, in-person training, and personalized consultancy, I provide a comprehensive approach to AI literacy for marketers. Whether you're just starting to explore AI or looking to deepen your expertise, I offer resources and guidance tailored to your needs and goals.
            </p>
          </section>

          <section className="text-gray-700 leading-relaxed mb-6">
            <p className="text-lg">
              If you're ready to take your marketing career to the next level and harness the power of AI, I'm here to support you every step of the way. Together, we can navigate the exciting world of AI-driven marketing and unlock new opportunities for growth and success.
            </p>
          </section>

          <footer className="text-gray-700 leading-relaxed">
            <p className="text-lg">Together, let's navigate the exciting world of AI-driven marketing and unlock new opportunities for growth.</p>
            <p className="text-lg">Are you ready to position yourself at the forefront of the marketing revolution? Let's embark on this transformative journey together.</p>
          </footer>


          {/* <section className="text-gray-700 leading-relaxed mb-6">
            <p className="text-lg">
              Ludmila Domingos
              AI Marketing Strategist and Educator
            </p>
          </section> */}
        </article>
      </main>

      <Footer2 />
    </div>

  )
}