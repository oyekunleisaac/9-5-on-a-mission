import React from "react";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-[#F6F6F7]">
      <div className="maxWidth p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-8 gap-4 text-lg">
        <div>
          <h1 className="font-semibold text-xl mb-4">About</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <div className="mt-4">
            <h1>
              <span className="font-semibold">Email: </span>info@template.net
            </h1>
            <h1>
              <span className="font-semibold">Phone: </span>88123456789
            </h1>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-xl mb-4">Quick Link</h1>
          <ul className="flex flex-col gap-2 text-lg">
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Archived</li>
            <li>Author</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold text-xl mb-4">Category</h1>
          <ul className="flex flex-col gap-2 text-lg">
            <li>Lifestyle</li>
            <li>Technology</li>
            <li>Travel</li>
            <li>Business</li>
            <li>Economy</li>
            <li>Sports</li>
          </ul>
        </div>
        <div className="bg-white text-center p-4 py-8 rounded-2xl h-fit">
          <h1 className="font-semibold text-xl mb-4">Weekly Newsletter</h1>
          <p>Get blog articles and offers via email</p>
          <form action="">
            <div className="border-2 flex justify-between items-center p-2 rounded-lg mt-4">
              <input
                className="border-none outline-none text-sm"
                placeholder="Your Email"
                type="text"
              />
              <IoMailOutline />
            </div>
            <button
              className="w-full bg-[#4B6BFB] font-semibold mt-3 py-3 text-white rounded-xl"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
