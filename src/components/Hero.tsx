import Link from "next/link";
// import Image from 'next/image'
// import Logo from '../../public/images/Logo_Dark.png'

const Hero = () => {
  return (
    <section className="relative flex items-center min-h-screen bg-gradient-to-r from-gradient-purple to-gradient-blue">
      <div className="container flex flex-col items-center px-4 py-20 mx-auto md:flex-row">
        <div className="mb-8 text-center text-white md:w-1/2 md:text-left md:mb-0">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Stop Wasting Time on Repetitive Work
          </h1>
          <h2 className="mb-8 text-xl md:text-2xl lg:text-3xl">
            We help small business owners automate manual tasks using simple,
            affordable tools - so you can focus on growing instead of grinding
          </h2>
          <a
            href="#services"
            className="inline-block px-6 py-3 text-lg font-bold transition duration-300 bg-white rounded-full text-gradient-purple hover:bg-gray-100"
          >
            Discover How AI Can Transform Your Marketing
          </a>
          {/* <p className="max-w-3xl mx-auto mt-12 text-lg md:text-xl md:mx-0">
            At AI Marketing Solutions, we believe that AI should be accessible
            to all businesses, regardless of size or budget. Our mission is to
            provide SMEs with the tools and expertise they need to succeed in an
            increasingly AI-driven marketplace.
          </p> */}
        </div>
        <div className="p-4 md:w-1/2">
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

export default Hero;
