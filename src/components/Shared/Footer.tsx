import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#F6F6F7]">
      <div className="maxWidth p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-8 gap-4 text-lg relative">
        <div>
          <h1 className="font-semibold text-xl mb-4">About</h1>
          <p>
            9-5 on a mission is a blog dedicated to helping individuals
            navigate the complexities of modern work life. 
          </p>
          <div className="mt-4">
            <h1>
              <span className="font-semibold">Email: </span>bolaadisa@gmail.com
            </h1>
            <h1>
              <span className="font-semibold">Phone: </span>+234 706 154 7518
            </h1>
          </div>
        </div>
        {/* Centered logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none select-none">
          <Image src={logo} alt="logo" width={90} height={90} />
        </div>
        <div className="lg:col-start-4 lg:col-end-5">
          <h1 className="font-semibold text-xl mb-4">Quick Link</h1>
          <ul className="flex flex-col gap-2 text-lg">
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Books</li>
            {/* <li>Author</li> */}
            <li>Contact</li>
          </ul>
        </div>
      </div>
      {/* Thick footer bar */}
      <div className="bg-[#e2e3e5] flex flex-col items-center justify-center px-8 py-4 mt-4">
        <span className="text-gray-700 text-base font-medium text-center">
          © 2025 9-5 on a mission. All rights reserved. &nbsp;|&nbsp; 
          Developed By{" "}
          <a
            href="https://www.enclinks.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700"
            style={{ textDecoration: "none" }}
          >
            Enclinks Technologies
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;