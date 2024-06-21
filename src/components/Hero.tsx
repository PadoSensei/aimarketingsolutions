import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/images/Logo_Dark.png'

// TODO - ADD Responsiveness to order of logo and text on small screens

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-r from-gradient-purple to-gradient-blue">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="sm: order-2 md:order-1 p-4">
          <div className="max-w-xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-12">
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-800 text-center md:text-left">
                Elevate Your Marketing Career with AI-Powered Solutions
              </h1>
            </header>
            <div className="text-gray-700 leading-relaxed text-lg md:text-xl">
              <p className="mb-6 text-shadow-md">
                At AI Marketing Solutions, we empower marketers to transform their careers by harnessing the power of artificial intelligence. Our comprehensive AI literacy programs, workshops, courses, and consultancy services are tailored to boost productivity, enhance creative capacity, and streamline operations for small and medium-sized enterprises, enabling them to compete and excel in their markets.
              </p>
              <p className="text-shadow-md">
                Step into the future of marketing with our specialized training and custom AI solutions. By leveraging AI technologies, you'll gain the ability to make data-driven decisions, craft personalized strategies, and swiftly adapt to emerging trends. Let us guide you in staying ahead in today's high-tech landscape, turning possibilities into tangible achievements for your business.
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 sm: order-1 md:order-2">
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
            <Image
              src={Logo}
              alt="AI Marketing Logo"
              priority={true}
              className="object-center w-full h-full rounded-lg"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero
