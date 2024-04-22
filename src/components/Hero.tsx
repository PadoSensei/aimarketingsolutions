import Link from 'next/link'
import Image from 'next/image'

//TODO - Update text 

const Hero = () => {
  return (
    <section className="w-full">
      <Image alt="AI Marketing Banner" priority={true} className="aspect-[4.8]" height="400" src="/images/Banner1.png" width="1920" />
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-2 max-w-3xl mx-auto py-6 space-y-4">
          <div className="space-y-2 text-left">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Transform Your Business with Cutting-Edge AI Marketing.</h1>
            <p className="max-w-[900px] text-gray-500 dark:text-gray-400">
              At AI Marketing Solutions, we blend advanced artificial intelligence with expert marketing strategies to catapult your business into a new era of digital excellence. From tailor-made AI literacy programs to digital marketing agency services, we equip small and medium-sized enterprises with the tools to not only compete but to dominate in their markets.
              Dive into AI-driven marketing with our specialized training, consultancy, and custom AI agents designed to streamline your operations and supercharge your growth. Embrace the future of marketing and let us help you turn possibilities into achievements.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
