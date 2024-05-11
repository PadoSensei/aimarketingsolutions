import Link from 'next/link'

// Orginal navbar
    // <div classNameName="Nav w-[1440px] h-[60px] relative">
    //   <div classNameName="Rectangle w-[1440px] h-[60px] left-0 top-0" />
    //   <div classNameName="Group w-[245px] h-6 top-[18px] flex justify-between">
    //     <Link href="/" classNameName="Home top-0 text-slate-500 text-sm font-normal font-['Roboto'] leading-normal">Home</Link>
    //     <Link href="/services" classNameName="Home top-0 text-slate-500 text-sm font-normal font-['Roboto'] leading-normal">Our Services</Link>
    //     <Link href="/about" classNameName="About left-[98px] top-0 text-slate-500 text-sm font-normal font-['Roboto'] leading-normal">About</Link>
    //     <Link href='/blogs' classNameName="Contact top-0 text-slate-500 text-sm font-normal font-['Roboto'] leading-normal">Blog</Link>
    //     <Link href="/contact" classNameName="Home top-0 text-slate-500 text-sm font-normal font-['Roboto'] leading-normal">Contact</Link>
    //   </div>
    //   <div classNameName="ElementButtonSmallFilled w-40 h-[26px] left-[1115px] top-[18px]">
    //     <div classNameName="Bg w-40 h-[26px] left-0 top-0 bg-indigo-950 rounded-sm" />
    //     <div classNameName="ButtonLabel w-40 left-0 top-[4px] text-center text-white text-xs font-medium font-['Roboto'] leading-[18px]">Contact</div>
    //   </div>
    // </div>
const NavBar = () => {
  return (
<nav className="bg-white border-gray-200 rounded-lg">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="/images/Logo-White.png" className="h-8" alt="Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AI Marketing Solutions</span>
  </a>

{/* Call to action button and hamburger */}
  {/* <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
      <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div> */}


  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul className="flex flex-col font-medium px-8 md:px-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="/" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="/about" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="/blog" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</a>
      </li>
      <li>
        <a href="/#services" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="/contact" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

  )
}

export default NavBar




