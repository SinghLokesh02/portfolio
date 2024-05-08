import React,{useState} from "react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  console.log(navbarOpen);
  return (
    <div>
      <nav className="bg-gray-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center justify-between w-full">
              {" "}
              {/* Adjusted here */}
              <div className="head">
                <h1 className="text-white font-bold text-xl">KULDEEP</h1>
              </div>
              {/* Moved here */}
              <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                <div className="others-link flex gap-x-5">
                  <a
                    href="#hero"
                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-white hover:border-white"
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-white hover:border-white"
                  >
                    About
                  </a>
                  <a
                    href="#experience"
                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-white hover:border-white"
                  >
                    Experience
                  </a>
                  <a
                    href="#education"
                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-white hover:border-white"
                  >
                    Education
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-white hover:border-white"
                  >
                    Services
                  </a>
                  <a
                    href="#project"
                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-white hover:border-white"
                  >
                    Project
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-white hover:border-white"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button onClick={()=> setNavbarOpen(!navbarOpen) }
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={`${navbarOpen ? "block" : "hidden"} sm:hidden `} id="mobile-menu">
          {/* Navbar one and close and open on click */}
          <div className="px-2 pt-2 pb-3 space-y-1 transition-all duration-500">
            <a
              href="#hero"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-800"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-800"
            >
              About
            </a>
            <a
              href="#experience"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-800"
            >
              Experience
            </a>
             
            <a
              href="#education"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-800"
            >
              Education
            </a>
            <a
              href="#services"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-800"
            >
              Services
            </a>
            <a
              href="#project"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-800"
            >
              Project
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-800"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
