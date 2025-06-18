import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-white sticky top-0 right-0 left-0 z-50">
      <div className="maxWidth flex justify-between items-center px-8 py-2">
        {/* <Image src={logo} alt="logo" className="w-24" /> */}

        <a
          href="https://www.linkedin.com/newsletters/9-to-5-on-a-mission-7303361934005878785/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto text-[#004B84] hover:text-[#002F56]"
        >
          <FaLinkedin size={28} />
        </a>
      </div>
      <hr />
    </div>
  );
};

export default Header;