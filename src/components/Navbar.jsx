import React from "react";
import logo from "../assets/logos/logo.png";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import CV from "../assets/CV.pdf"; // Adjust the path as needed
import { useState } from "react";
import Logo from "../assets/logos/logo-script.png";

const saveFile = () => {
  fetch(CV).then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "CV.pdf";
      alink.click();
    });
  });
};
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      className="fixed w-full h-[90px] flex justify-between items-center px-4 bg-gray-900 z-50 text-white"
      id="Navbar"
    >
      <div>
        <img src={Logo} alt="Logo" className="w-[75px]" />
      </div>

      {/* menu */}
      <div className="hidden md:flex">
        <ul className="hidden md:flex">
          {["home", "about", "skills", "work", "contact"].map((item) => (
            <li key={item} className="px-4">
              <Link to={item} smooth={true} duration={500}>
                <span className="hover:border-b-2 hover:border-white transition-all duration-200">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
              </Link>
            </li>
          ))}
          <li className="px-4">
            <button
              onClick={saveFile}
              className="font-mono text-cyan-400 border-cyan-400 border-2 px-4 py-1 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              <span>Download CV</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Hamburger */}
      <button
        className="md:hidden z-10 flex flex-col h-12 w-12 justify-center items-center group"
        onClick={handleClick}
      >
        <div
          className={`h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300 ${
            nav
              ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300 ${
            nav ? "opacity-0" : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300 ${
            nav
              ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
      </button>

      {/* Mobile menu */}
      <ul
        className={`${
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-gray-900 text-white flex flex-col justify-center items-center"
        } transition-all delay-150 duration-300 overflow-hidden w-full`}
      >
        <img src={Logo} alt="Logo" className="w-[100px] mb-8" />
        {["home", "about", "skills", "work", "contact"].map((item) => (
          <li key={item} className="py-6 text-4xl">
            <Link onClick={handleClick} to={item} smooth={true} duration={500}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
        <li className="mt-6">
          <button
            onClick={saveFile}
            className="font-mono text-cyan-400 border-cyan-400 border-2 px-4 py-1 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
          >
            Download CV
          </button>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {[
            {
              name: "Linkedin",
              icon: FaLinkedin,
              bg: "bg-blue-600",
              link: "https://www.linkedin.com/in/bhumik-varu/",
            },
            {
              name: "Github",
              icon: FaGithub,
              bg: "bg-gray-800",
              link: "https://github.com/bhumikvaru",
            },
            {
              name: "Email",
              icon: HiOutlineMail,
              bg: "bg-blue-400",
              link: "mailto:bhumik97@gmail.com",
            },
            {
              name: "Instagram",
              icon: FaInstagram,
              bg: "bg-pink-600",
              link: "https://www.instagram.com/bhumik.varu/",
            },
          ].map((item) => (
            <li
              key={item.name}
              className={`w-[180px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-10px] duration-300 ${item.bg}`}
            >
              <a
                className="flex justify-between items-center w-full text-white"
                href={item.link}
                rel="noreferrer"
                target="_blank"
              >
                {item.name}
                <item.icon size={30} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
