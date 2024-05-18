import Link from 'next/link'
import Image from 'next/image'

//TODO - Update text 

const Hero = () => {
  return (
    <section className="relative bg-gray-900 min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:order-1">
          <div className="max-w-xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-12">
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-800 text-center md:text-left">
                Transform Your Business with Cutting-Edge AI Marketing Solutions.
              </h1>
            </header>
            <div className="text-gray-700 leading-relaxed text-lg md:text-xl">
              <p className="mb-6 text-shadow-md">
                At AI Marketing Solutions, we blend advanced artificial intelligence with expert marketing strategies to catapult your business into a new era of digital excellence. From tailor-made AI literacy programs to digital marketing agency services, we equip small and medium-sized enterprises with the tools to not only compete but to dominate in their markets.
              </p>
              <p className="text-shadow-md">
                Dive into AI-driven marketing with our specialized training, consultancy, and custom AI agents designed to streamline your operations and supercharge your growth. Embrace the future of marketing and let us help you turn possibilities into achievements.
              </p>
            </div>
          </div>
        </div>
        <div className="md:order-2">
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
            <Image
              src="/images/Banner2.jpg"
              alt="AI Marketing Banner"
              priority={true}
              className="object-center w-full h-full"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero
