import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative flex items-center min-h-screen pt-20 pb-32 overflow-hidden bg-slate-950">
      {/* BACKGROUND EFFECTS */}
      {/* 1. Purple Glow Top Left */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      {/* 2. Blue Glow Bottom Right */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container relative z-10 flex flex-col items-center gap-12 px-4 mx-auto md:flex-row">
        {/* TEXT CONTENT */}
        <div className="text-center md:w-1/2 md:text-left">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-purple-300 uppercase border rounded-full bg-purple-900/30 border-purple-500/30">
            AI Solutions
          </div>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            Stop Wasting Time on <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Repetitive Work
            </span>
          </h1>
          <h2 className="max-w-2xl mb-8 text-lg leading-relaxed text-slate-300 md:text-xl lg:text-2xl">
            We help small business owners automate manual tasks using simple,
            affordable tools—so you can focus on{" "}
            <span className="font-semibold text-white">growing</span> instead of
            grinding.
          </h2>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
            <a
              href="/contact"
              className="px-8 py-4 text-lg font-bold text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-purple-600 to-blue-600 shadow-purple-500/25 hover:shadow-purple-500/50 hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* LOGO VISUAL (The Circular Portal) */}
        <div className="relative flex justify-center w-full mt-16 md:w-1/2 md:mt-0">
          {/* 1. Ambient Glow (Behind everything) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-purple-600/20 rounded-full blur-[90px]" />

          <div className="relative z-10 flex flex-col items-center">
            {/* 2. The Circular Frame */}
            <div className="relative group">
              {/* Spinning/Pulse Glow Ring */}
              <div className="absolute transition duration-1000 rounded-full -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 blur opacity-40 group-hover:opacity-75 group-hover:duration-200 animate-tilt"></div>

              {/* Image Container */}
              <div className="relative w-[260px] h-[260px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden border-[6px] border-slate-900 shadow-2xl">
                <img
                  src="/images/Logo-White.png"
                  alt="AI Solutions Logo"
                  className="object-cover w-full h-full bg-white"
                />

                {/* Optional: Glossy Overlay Reflection for depth */}
                <div className="absolute inset-0 transition-opacity duration-700 rounded-full opacity-0 pointer-events-none bg-gradient-to-tr from-white/20 to-transparent group-hover:opacity-30" />
              </div>
            </div>

            {/* 3. Text Underneath (Free Floating) */}
            <div className="mt-8 text-center">
              <h3 className="text-3xl font-extrabold tracking-tighter text-white uppercase md:text-5xl drop-shadow-lg">
                AI{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  Solutions
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* CURVED BOTTOM SEPARATOR */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[60px] md:h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-black"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

{
  /* VIDEO CONTENT */
}
{
  /* <div className="relative flex justify-center w-full md:w-1/2"> */
}
{
  /* Glow behind video */
}
<div className="absolute inset-0 transform scale-95 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-2xl opacity-30" />;

{
  /* <div className="relative w-full overflow-hidden border shadow-2xl rounded-2xl border-slate-700 bg-slate-900">
            <iframe
              className="w-full aspect-video md:h-[400px] lg:h-[450px]"
              src="https://www.youtube.com/embed/I3f0Uh1SokY"
              title="Welcome to the AI Revolution!"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div> */
}
