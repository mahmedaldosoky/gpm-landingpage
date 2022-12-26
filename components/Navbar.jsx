import Link from "next/link";
import { useState } from "react"; // import state

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="bg-gray-900">
      <div className="flex items-center mx-auto w-5/6 bg-gray-900 sm:px-4  pt-6 lg:text-white justify-between lg:justify-start">
        <Link href="#" class="flex items-center">
          <img src="/images/logo.png" class=" sm:h-9" />
        </Link>
        <nav>
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="#">Products</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>
          </section>

          <div className="lg:flex flex-row hidden justify-end"> 
            <ul className="flex flex-row mr-96 space-x-8 pl-16 text-lg ">
              <li>
                <a href="/about">Products</a>
              </li>

              <li>
                <a href="/contact">Contact us</a>
              </li>
            </ul>
<div className="flex flex-row ml-64">
<button
              type="button"
              class=" flex-auto text-[#A67AFD] border-[#A67AFD] border-2 px-6 py-2 mr-3 rounded-md font-bold hidden lg:block"
            >
              Sign in
            </button>
            <button
              type="button"
              class="text-white bg-gradient-to-r from-[#8750F3] via-[#89A2FB] to-[#5ED3D0] px-6 py-2 mr-3 rounded-md font-bold hidden lg:block"
            >
              Register
            </button>
</div>
          </div>
        </nav>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </div>
    </div>
  );
};

export default Navbar;

<nav class="bg-gray-900 px-2 sm:px-4 py-2.5">
  <div class="container flex flex-wrap items-center justify-between mx-auto w-2/3">
    <Link href="#" class="flex items-center">
      <img src="/images/logo.png" class=" sm:h-9" />
    </Link>
    <div class="flex  md:order-2">
      <button
        type="button"
        class="text-[#A67AFD] border-[#A67AFD] border-2 px-6 py-2 mr-3 rounded-md font-bold hidden lg:block"
      >
        Sign in
      </button>
      <button
        type="button"
        class="text-white bg-gradient-to-r from-[#8750F3] via-[#89A2FB] to-[#5ED3D0] px-6 py-2 mr-3 rounded-md font-bold hidden lg:block"
      >
        Register
      </button>
      <button
        data-collapse-toggle="navbar-cta"
        type="button"
        class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-cta"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
    <div
      class="items-center justify-between ml-16 mr-auto hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-cta"
    >
      <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="text-white text-lg  mr-3" aria-current="page">
            Products
          </a>
        </li>
        <li>
          <a href="#" class="text-white text-lg  mr-3" aria-current="page">
            Contact us
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>;
