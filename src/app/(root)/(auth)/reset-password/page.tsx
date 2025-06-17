import { NextPage } from "next";
import React from "react";
import img from "../../../../../public/bg.jpg";
import logo from "../../../../../public/logo.png";
import Image from "next/image";

const page: NextPage = () => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col gap-8 min-h-screen justify-center items-center text-white">
        <div className="lg:w-1/2 w-full text-center font-inter bg-[#004B84]  h-screen flex flex-col justify-center items-center">
          <Image
            src={logo}
            alt="logo"
            className="w-36 bg-white mb-4"
            placeholder="blur"
          />
          <h1 className="text-3xl font-bold">Reset Password</h1>
          <h1 className="font-semibold text-xl">
            Kindly provide the email address you used to register
          </h1>
          <form
            action=""
            className="my-6 text-left w-2/3 font-semibold text-xl"
          >
            <div className="grid items-center gap-1.5 mb-4">
              <label htmlFor="email">Email Address</label>
              <input
                className="p-2 border-2 rounded-xl"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <button className="bg-white w-full mt-4 rounded-xl py-4 text-[#004B84]">
              Reset Password
            </button>
          </form>
        </div>
        <div className="lg:w-1/2 lg:block hidden">
          <Image src={img} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default page;
