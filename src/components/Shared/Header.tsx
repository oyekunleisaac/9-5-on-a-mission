import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="bg-white sticky top-0 right-0 left-0 z-50">
    <div className="w-full flex justify-end items-center px-8 py-2">
        {/* <Image src={logo} alt="logo" className="w-24" /> */}

        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/newsletters/9-to-5-on-a-mission-7303361934005878785/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#004B84] hover:text-[#002F56]"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E4405F] hover:text-[#ad1457]"
            aria-label="Instagram"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-700"
            aria-label="Twitter (X)"
          >
            <FaXTwitter size={28} />
          </a>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;