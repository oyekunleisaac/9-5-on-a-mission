import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#F6F6F7]">
      <div className="maxWidth p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 text-lg">
        {/* About Section */}
        <div className="lg:col-span-4">
          <h1 className="font-semibold text-xl mb-4">About</h1>
          <p>
            9-5 on a mission is a blog dedicated to helping individuals
            navigate the complexities of modern work life.
          </p>
          <div className="mt-4">
            <p>
              <span className="font-semibold">Email: </span>bolaadisa@gmail.com
            </p>
            <p>
              <span className="font-semibold">Phone: </span>+234 706 154 7518
            </p>
          </div>
        </div>

        {/* Logo Centered */}
        <div className="lg:col-span-4 flex justify-center items-center">
          <Image
            src={logo}
            alt="logo"
            width={200}
            height={200}
            className="w-48 h-auto object-contain"
          />
        </div>

        {/* Quick Link – placed at far right on desktop */}
        <div className="lg:col-span-4 flex flex-col items-end">
          <h1 className="font-semibold text-xl mb-4">Quick Link</h1>
          <ul className="flex flex-col gap-2 text-lg items-end">
            <li>
              Home 
            </li>
            <li>
              About 
            </li>
            <li>
              Blog 
            </li>
            <li>
              Books 
            </li>
            <li>
              Contact 
            </li>
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