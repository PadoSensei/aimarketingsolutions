import Link from 'next/link'

export default function Services () {
    return (
      <section className="flex items-center justify-center h-screen bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid gap-4 items-center">
            <div className="flex flex-col justify-center space-y-8 text-center">
              <div className="space-y-2">
                <h1 id="services" className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                  Discover Our Unique Services
                </h1>
                <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                  Our services are designed to enhance your productivity and streamline your workflow.
                </p>
              </div>
              <div className="w-full max-w-full space-y-4 mx-auto">
                <div className="grid grid-cols-2 gap-8">
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                    <div className="p-2 bg-black bg-opacity-50 rounded-full">
                      <IconPersonVideo3 className="text-white h-6 w-6 mb-2 opacity-75" />
                    </div>
                    <h2 className="text-xl font-bold text-white">AI Literacy Training</h2>
                    <p className="text-zinc-200 dark:text-zinc-100">
                    Educate teams on AI capabilities and best practices with comprehensive training tailored to business needs.
                    </p>
                    <Link className='bg-white px-4' href="./courses">Find Out More</Link>
                  </div>
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                    <div className="p-2 bg-black bg-opacity-50 rounded-full">
                      <IconPersonChalkboard className="text-white h-6 w-6 mb-2 opacity-75" />
                    </div>
                    <h2 className="text-xl font-bold text-white">AI Marketing Consulting</h2>
                    <p className="text-zinc-200 dark:text-zinc-100">
                    Get expert advice and strategic planning to seamlessly integrate AI into your marketing efforts.
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                    <div className="p-2 bg-black bg-opacity-50 rounded-full">
                      <IconProbot className="text-white h-6 w-6 mb-2 opacity-75" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Custom AI Agents</h2>
                    <p className="text-zinc-200 dark:text-zinc-100">
                    Develop AI-driven agents to automate marketing tasks and enhance customer interactions, boosting performance.
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                    <div className="p-2 bg-black bg-opacity-50 rounded-full">
                      <IconLike className="text-white h-6 w-6 mb-2 opacity-75" />
                    </div>
                    <h2 className="text-xl font-bold text-white">AI Digital Marketing Agency:</h2>
                    <p className="text-zinc-200 dark:text-zinc-100">
                    Full-service digital marketing from AI-enhanced content creation to SEO and Google Ads, optimized for your business success.
                    </p>
                  </div>
                  {/* <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                    <div className="p-2 bg-black bg-opacity-50 rounded-full">
                      <LockIcon className="text-white h-6 w-6 mb-2 opacity-75" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Reliable Security</h2>
                    <p className="text-zinc-200 dark:text-zinc-100">
                      With Reliable Security, your data is always safe and protected.
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                    <div className="p-2 bg-black bg-opacity-50 rounded-full">
                      <MergeIcon className="text-white h-6 w-6 mb-2 opacity-75" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Easy Collaboration</h2>
                    <p className="text-zinc-200 dark:text-zinc-100">
                      Easy Collaboration allows you to share and edit documents with your team in real time.
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
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


function IconPersonChalkboard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 640 512"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M192 96c26.5 0 48-21.5 48-48S218.5 0 192 0s-48 21.5-48 48 21.5 48 48 48zm-8 384V352h16v128c0 17.7 14.3 32 32 32s32-14.3 32-32V192h136c17.7 0 32-14.3 32-32s-14.3-32-32-32h-16V64h192v192H384v-32h-64v48c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H368c-26.5 0-48 21.5-48 48v80H177.1c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9l28.7-47.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32z" />
    </svg>
  );
}




  
  
  function LockIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    )
  }
  

function IconLike(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 00-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 00471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0142.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z" />
    </svg>
  );
}


  
  
  function SearchIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
  }
  
  
  function SettingsIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }