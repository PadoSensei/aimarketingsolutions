import Image from 'next/image'
import Logo from '../../public/images/Logo_Dark.png'

const ImageBlurb = () => {
    return (
        // className="bg-gradient-to-r from-gradient-purple to-gradient-blue flex justify-center align-items p-8 h-800 w-400"
        <section className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
            {/* <div className="h-80 w-3/6">
                <iframe
                    className="h-full w-full rounded-lg"
                    width="100%"
                    src="https://www.youtube.com/embed/I3f0Uh1SokY"
                    title="Welcome to the AI Marketing Revolution!" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe>

            </div> */}
             {/* <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"> */}
            <Image
              src={Logo}
              alt="AI Marketing Logo"
              priority={true}
              className="object-center w-full h-full rounded-lg"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          {/* </div> */}
        </section>
    )
}

export default ImageBlurb
