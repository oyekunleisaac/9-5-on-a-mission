"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";


const Footer = () => {
  const [showModal, setShowModal] = useState(false);

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
              <li>
                <Link href="/" className="hover:underline">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">About</Link>
              </li>
              <li>
                <Link href="/all-posts" className="hover:underline">Blog</Link>
              </li>
              <li>
                <Link href="/devotionals" className="hover:underline">Devotionals</Link>
              </li>
              <li className="w-full lg:text-right">
                <button
                  className="hover:underline bg-transparent border-none p-0 m-0 text-left lg:text-right w-full"
                  onClick={() => setShowModal(true)}
                >
                  Contact
                </button>
              </li>
            </ul>

        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 transition-opacity duration-300">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full text-center relative
            transform transition-all duration-300
            scale-95 opacity-0
            animate-modal-in"
          >
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="font-bold text-2xl mb-4 text-blue-700">Contact Us</h2>
            <p className="mb-6 text-gray-700">Connect with us on social media:</p>
            <div className="flex justify-center gap-6 mb-4">
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="32" height="32" fill="currentColor" className="text-pink-500 hover:text-pink-700" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="32" height="32" fill="currentColor" className="text-blue-700 hover:text-blue-900" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.07-.93-1.5-1.5-1.5s-1.5.43-1.5 1.5v4.5h-3v-9h3v1.29c.41-.63 1.36-1.29 2.5-1.29 2.07 0 3.5 1.34 3.5 4.09v5.91z"/>
                </svg>
              </a>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X">
                <svg width="32" height="32" fill="currentColor" className="text-black hover:text-gray-700" viewBox="0 0 24 24">
                  <path d="M17.53 3H21L14.19 10.19L22 21H15.66L10.67 14.43L4.99 21H1.99L9.13 13.36L2 3H8.53L13.07 9.03L17.53 3ZM16.41 19H18.19L7.62 5H5.73L16.41 19Z"/>
                </svg>
              </a>
            </div>
            <div className="text-gray-600">
              <p><span className="font-semibold">Email:</span> bolaadisa@gmail.com</p>
              <p><span className="font-semibold">Phone:</span> +234 706 154 7518</p>
            </div>
          </div>
        </div>
      )}

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