//github.com/bhumikvaru/portfolio

import React from "react";
import Logo from "../assets/logos/fullname1.png";

const Footer = () => {
  return (
    <div
      id="footer"
      name="footer"
      className="w-full h-[250px] flex justify-center items-center p-4 bg-[#121212]"
    >
      <div
        id="footerContent"
        className=" text-4xl mx-auto px-8 flex flex-col justify-center h-full"
      >
        <a
          href="https://github.com/bhumikvaru/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            Designed &amp; Built by <h2>Bhumik Varu</h2>{" "}
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
