import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#F6F6F7]">
      <div className="maxWidth p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 text-lg">

        {/* About Section */}
        <div className="lg:col-span-4 flex flex-col w-full" style={{ maxWidth: "320px" }}>
          <h1 className="font-semibold text-xl mb-4 text-left w-full">About</h1>
          <div className="w-full text-justify">
            <p>
              9-5 on a mission is a blog<br />
              dedicated to helping individuals<br />
              navigate the complexities of<br />
              modern work life.
            </p>
          </div>
          <div className="mt-4 w-full">
            <p className="w-full">
              <span className="font-semibold">Email: </span>bolaadisa@gmail.com
            </p>
            <p className="w-full">
              <span className="font-semibold">Phone: </span>+234 706 154 7518
            </p>
          </div>
        </div>

        {/* Logo Centered and Bigger */}
        <div className="lg:col-span-3 flex justify-center items-center">
          <Image
            src={logo}
            alt="logo"
            width={320}
            height={320}
            className="w-80 h-auto object-contain"
          />
        </div>

        {/* Quick Link – left on mobile, right on desktop */}
        <div className="lg:col-span-4 flex flex-col items-start text-left lg:items-end lg:text-right w-full">
          <h1 className="font-semibold text-xl mb-4 w-full">Quick Link</h1>
          <ul className="flex flex-col gap-2 text-lg w-full">
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Books</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#e2e3e5] flex flex-col items-center justify-center px-8 py-4 mt-4">
        <span className="text-gray-700 text-base font-medium text-center">
          © 2025 9-5 on a mission. All rights reserved. &nbsp;|&nbsp;
          Developed By{" "}
          <a
            href="https://www.enclinks.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700"
          >
            Enclinks Technologies
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;