const Footer2 = () => {
  return (
    <footer className="text-white bg-black">
      <div className="max-w-screen-xl px-4 py-8 mx-auto md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* LEFT SECTION: Brand and Copyright */}
          {/* Changed 'flex justify-evenly' to 'flex flex-col' for vertical stacking */}
          {/* Added 'items-center md:items-start' to center text on mobile and align left on desktop */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="text-lg font-bold">AI Marketing Solutions™</h3>
            {/* Removed mr-4 (no longer needed) and added mt-2 for vertical spacing */}
            <p className="mt-2 text-sm text-gray-400">
              All Rights Reserved 2024 ©
            </p>
          </div>

          <nav aria-label="Footer Navigation">
            <ul className="flex flex-col items-center sm:flex-row justify-evenly md:flex-row md:justify-end">
              <li className="mb-2 md:mb-0 md:mr-4">
                <a href="/about" className="text-sm hover:underline">
                  About
                </a>
              </li>
              {/* <li className="mb-2 md:mb-0 md:mr-4">
                  <a href="/services" className="text-sm hover:underline">
                    Services
                  </a>
                </li> */}
              <li>
                <a href="/contact" className="text-sm hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
