import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import iconKings from "../icon/king.png";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const location = useLocation();

  function toggleButtonNavbar() {
    setNavOpen(!navOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full top-0 left-0 z-50 transition-shadow duration-300 ${
          scroll ? "bg-slate-600 bg-opacity-90 shadow-md" : ""
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={iconKings} className="h-8" alt="Flowbite Logo" />
            <span className="self-center font-[arial] tracking-widest text-2xl font-bold whitespace-nowrap text-white">
              KINGSWEB
            </span>
          </Link>
          <button
            onClick={toggleButtonNavbar}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={navOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            {navOpen ? (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>
          <div
            className={` ${
              navOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-semibold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-3 text-xl ${
                    location.pathname === "/"
                      ? "text-blue-700 md:text-blue-700 bg-gray-200 md:bg-transparent"
                      : "text-slate-800 md:text-white"
                  } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                >
                  Rumah
                </Link>
              </li>
              <li>
                <Link
                  to="/portofolio"
                  className={`block py-2 px-3 text-xl ${
                    location.pathname === "/portofolio"
                      ? "text-blue-700 md:text-blue-700 bg-gray-200 md:bg-transparent"
                      : "text-slate-800 md:text-white"
                  } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                >
                  Portofolio
                </Link>
              </li>
              <li>
                <Link
                  to="/harga"
                  className={`block py-2 px-3 text-xl ${
                    location.pathname === "/harga"
                      ? "text-blue-700 md:text-blue-700 bg-gray-200 md:bg-transparent"
                      : "text-slate-800 md:text-white"
                  } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                >
                  Harga
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
