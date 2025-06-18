import Hero from "@/components/Hero";
import LatestPosts from "@/components/LatestPosts";
import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";
import { NextPage } from "next";
import React from "react";

const page: NextPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <LatestPosts />
      {/* <ContactUs /> */}
      <Footer />
    </div>
  );
};

export default page;
