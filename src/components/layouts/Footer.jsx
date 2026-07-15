import { useState, useEffect } from "react";
import Icons from "../Icons";
import Image from "../Image";
import logo from "/src/assets/logo.png";
import logoWhite from "/src/assets/logoWhite.png";
import { CiMail } from "react-icons/ci";
import { HiMail } from "react-icons/hi";
import { IoLocationSharp, IoCall } from "react-icons/io5";

const Footer = () => {
  const [theme, setTheme] = useState(
    document.documentElement.classList.contains("dark") ? "dark" : "light",
  );

  useEffect(() => {
    const updateTheme = () => {
      setTheme(localStorage.getItem("theme") || "light");
    };

    window.addEventListener("themechange", updateTheme);

    return () => window.removeEventListener("themechange", updateTheme);
  }, []);

  return (
    <div className="bg-[#F4F4F4] dark:bg-bg-dark-main py-15 px-5 lg:px-0 transition-colors duration-300">
      <div className="container flex flex-col lg:flex-row items-start justify-between">
        <div className="w-[50%]">
          <Image key={theme} src={theme === "dark" ? logoWhite : logo} />
          <h2 className="text-[30px] lg:text-[50px] text-common dark:text-white font-rajdhani w-100 lg:leading-15 py-8 transition-colors duration-300">
            <span className="font-bold">Get Ready</span> To <br />
            Create Great
          </h2>
          <div className="flex items-center border-b border-b-[#D9DDE0] dark:border-b-white/10 pb-4 w-65 lg:w-82.5 mb-10 lg:mb-0 transition-colors duration-300">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 bg-transparent placeholder:text-[#5D6570]/60 dark:placeholder:text-white outline-none transition-colors duration-300"
            />
            <CiMail className="text-common dark:text-white transition-colors duration-300" />
          </div>
        </div>
        <div className="w-[50%]">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-y-10 lg:gap-y-0">
            <div className="">
              <h4 className="font-rajdhani font-bold text-2xl text-common dark:text-white pb-8 transition-colors duration-300">
                Quick Link
              </h4>
              <ul>
                <li className="font-rubik text-base text-common dark:text-[#9F9F9F] hover:dark:text-white pt-4 cursor-pointer transition-colors duration-300">
                  About Me
                </li>
                <li className="font-rubik text-base text-common dark:text-[#9F9F9F] hover:dark:text-white pt-4 cursor-pointer transition-colors duration-300">
                  Service
                </li>
                <li className="font-rubik text-base text-common dark:text-[#9F9F9F] hover:dark:text-white pt-4 cursor-pointer transition-colors duration-300">
                  Contact Us
                </li>
                <li className="font-rubik text-base text-common dark:text-[#9F9F9F] hover:dark:text-white pt-4 cursor-pointer transition-colors duration-300">
                  Blog Post
                </li>
                <li className="font-rubik text-base text-common dark:text-[#9F9F9F] hover:dark:text-white pt-4 cursor-pointer transition-colors duration-300">
                  Pricing
                </li>
              </ul>
            </div>
            <div className="">
              <h4 className="font-rajdhani font-bold text-2xl text-common dark:text-white pb-10 transition-colors duration-300">
                Contact
              </h4>
              <div className="flex items-center">
                <div className="flex items-center justify-center rounded-full border-2 border-[#D9DDE0] dark:border-white/10 h-10 w-10 text-common dark:text-white transition-colors duration-300">
                  <HiMail />
                </div>
                <p className="text-base font-rubik text-common dark:text-[#9F9F9F] ml-3 transition-colors duration-300">
                  nafiz125@gmail.com
                </p>
              </div>
              <div className="flex items-center mt-3">
                <div className="flex items-center justify-center rounded-full border-2 border-[#D9DDE0] dark:border-white/10 h-10 w-10 text-common dark:text-white transition-colors duration-300">
                  <IoLocationSharp />
                </div>
                <p className="text-base font-rubik text-common dark:text-[#9F9F9F] ml-3 transition-colors duration-300">
                  3891 Ranchview Dr. Richardson
                </p>
              </div>
              <div className="flex items-center mt-3 mb-8">
                <div className="flex items-center justify-center rounded-full border-2 border-[#D9DDE0] dark:border-white/10 h-10 w-10 text-common dark:text-white transition-colors duration-300">
                  <IoCall />
                </div>
                <p className="text-base font-rubik text-common dark:text-[#9F9F9F] ml-3 transition-colors duration-300">
                  01245789321
                </p>
              </div>
              <Icons />
            </div>
          </div>
        </div>
      </div>
      <div className="container lg:flex md:flex justify-between items-center py-7 border-t border-[#D9DDE0] dark:border-white/10 lg:mt-31.75 mt-15 transition-colors duration-300">
        <p className="text-[11px] lg:text-sm text-[#5D6570] dark:text-[#9F9F9F] font-rubik leading-7.5 text-center lg:text-start transition-colors duration-300">
          © InversWeb 2026 | All Rights Reserved
        </p>
        <p className="text-[12px] lg:text-sm text-common dark:text-[#9F9F9F] font-rubik leading-7.5 text-center lg:text-start transition-colors duration-300">
          Trams & Condition Privacy Policy Contact Us
        </p>
      </div>
    </div>
  );
};

export default Footer;
