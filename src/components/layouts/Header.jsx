import { useState, useEffect } from "react";
import Image from "../Image";
import logo from "/src/assets/logo.png";
import logoWhite from "/src/assets/logoWhite.png";
import {
  MdOutlineKeyboardArrowDown,
  MdClose,
  MdOutlineWbSunny,
  MdOutlineNightsStay,
} from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";
import Icons from "../Icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
    window.dispatchEvent(new Event("themechange"));
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-bg-light dark:bg-common py-5 relative transition-colors duration-300 text-common dark:text-white">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="relative z-40">
          <Image src={theme === "dark" ? logoWhite : logo} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-x-5 cursor-pointer">
            <li className="font-rajdhani text-base font-bold text-text-main hover:text-red duration-300">
              Home
            </li>
            <li className="font-rajdhani text-base font-bold text-text-main hover:text-red duration-300">
              About
            </li>
            <li className="font-rajdhani text-base font-bold text-text-main hover:text-red duration-300 flex items-center gap-x-1">
              Services <MdOutlineKeyboardArrowDown />
            </li>
            <li className="font-rajdhani text-base font-bold text-text-main hover:text-red duration-300 flex items-center gap-x-1">
              Blog <MdOutlineKeyboardArrowDown />
            </li>
            <li className="font-rajdhani text-base font-bold text-text-main hover:text-red duration-300 flex items-center gap-x-1">
              Project <MdOutlineKeyboardArrowDown />
            </li>
            <li className="font-rajdhani text-base font-bold text-text-main hover:text-red duration-300">
              Contact
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-x-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-text-main hover:scale-110 duration-300 text-xl mr-1"
          >
            {theme === "dark" ? <MdOutlineWbSunny /> : <MdOutlineNightsStay />}
          </button>

          <div className="hidden lg:block text-text-main [&_a]:bg-transparent [&_svg]:text-text-main">
            <Icons />
          </div>

          {/* Hamburger Icon */}
          <div
            onClick={toggleMenu}
            className="lg:hidden flex items-center justify-center bg-red rounded-full h-11 w-11 sm:h-12 sm:w-12 cursor-pointer relative z-50"
          >
            {isOpen ? (
              <MdClose className="text-white text-2xl" />
            ) : (
              <FaBarsStaggered className="text-white text-xl" />
            )}
          </div>
        </div>

        {/* Tablet Menu */}
        {isOpen && (
          <div className="fixed inset-0 z-30" onClick={toggleMenu}></div>
        )}

        <div
          className={`
          fixed top-0 right-0 h-full w-97.5 bg-card-bg shadow-2xl z-40 px-8 py-10 transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          lg:hidden
        `}
        >
          <ul className="flex flex-col gap-y-6 mt-16">
            <li className="font-rajdhani text-lg font-bold text-text-main hover:text-red duration-300">
              Home
            </li>
            <li className="font-rajdhani text-lg font-bold text-text-main hover:text-red duration-300">
              About
            </li>
            <li className="font-rajdhani text-lg font-bold text-text-main hover:text-red duration-300 flex items-center justify-between">
              Services <MdOutlineKeyboardArrowDown />
            </li>
            <li className="font-rajdhani text-lg font-bold text-text-main hover:text-red duration-300 flex items-center justify-between">
              Blog <MdOutlineKeyboardArrowDown />
            </li>
            <li className="font-rajdhani text-lg font-bold text-text-main hover:text-red duration-300 flex items-center justify-between">
              Project <MdOutlineKeyboardArrowDown />
            </li>
            <li className="font-rajdhani text-lg font-bold text-text-main hover:text-red duration-300 border-b pb-4">
              Contact
            </li>
          </ul>

          <div className="mt-8 flex justify-start text-text-main [&_a]:bg-transparent [&_svg]:text-text-main">
            <Icons />
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="fixed inset-0 z-30 lg:hidden"
            onClick={toggleMenu}
          ></div>
        )}

        <div
          className={`
    fixed top-0 right-0 h-full w-97.5 
    bg-white/80 dark:bg-common/80 backdrop-blur-md 
    shadow-2xl z-40 px-8 py-10 transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "translate-x-full"}
    lg:hidden
  `}
        >
          <ul className="flex flex-col gap-y-6 mt-16">
            <li className="font-rajdhani text-lg font-bold text-text-main">
              Home
            </li>
            <li className="font-rajdhani text-lg font-bold text-text-main">
              About
            </li>
            <li className="font-rajdhani text-lg font-bold text-text-main flex items-center justify-between">
              Services <MdOutlineKeyboardArrowDown />
            </li>
            <li className="font-rajdhani text-lg font-bold text-text-main flex items-center justify-between">
              Blog <MdOutlineKeyboardArrowDown />
            </li>
            <li className="font-rajdhani text-lg font-bold text-text-main flex items-center justify-between">
              Project <MdOutlineKeyboardArrowDown />
            </li>
            <li className="font-rajdhani text-lg font-bold text-text-main border-b pb-4">
              Contact
            </li>
          </ul>

          <div className="mt-8 flex justify-start text-text-main [&_a]:bg-transparent [&_svg]:text-text-main">
            <Icons />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
