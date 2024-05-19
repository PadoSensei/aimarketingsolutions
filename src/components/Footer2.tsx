const Footer2 = () => {
    return (
      <footer className="bg-black text-white">
        <div className="max-w-screen-xl mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center">
              <h3 className="text-lg font-bold mr-4">AI Marketing Solutions™</h3>
              <p className="text-sm">All Rights Reserved 2024 ©</p>
            </div>
            <nav aria-label="Footer Navigation">
              <ul className="flex flex-col md:flex-row md:justify-end">
                <li className="mb-2 md:mb-0 md:mr-4">
                  <a href="/about" className="text-sm hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-2 md:mb-0 md:mr-4">
                  <a href="#services" className="text-sm hover:underline">
                    Services
                  </a>
                </li>
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
  