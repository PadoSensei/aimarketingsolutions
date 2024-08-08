import Link from 'next/link'
// import Image from 'next/image'
// import Logo from '../../public/images/Logo_Dark.png'

// TODO - ADD Responsiveness to order of logo and text on small screens

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-r from-gradient-purple to-gradient-blue">
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-white text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Unlock the Power of AI in Marketing
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-8">
            Empowering Small to Medium-Sized Enterprises (SMEs) with AI-Driven Marketing Solutions
          </h2>
          <a
            href="#services"
            className="inline-block bg-white text-gradient-purple font-bold py-3 px-6 rounded-full text-lg hover:bg-gray-100 transition duration-300"
          >
            Discover How AI Can Transform Your Marketing
          </a>
          <p className="mt-12 text-lg md:text-xl max-w-3xl mx-auto md:mx-0">
            At AI Marketing Solutions, we believe that AI should be accessible to all businesses, regardless of size or budget. Our mission is to provide SMEs with the tools and expertise they need to succeed in an increasingly AI-driven marketplace.
          </p>
        </div>
        <div className="md:w-1/2 p-4">
          <iframe
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg"
            src="https://www.youtube.com/embed/I3f0Uh1SokY"
            title="Welcome to the AI Marketing Revolution!"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default Hero
