"use client";

import React, { useEffect, useState } from "react";

const typewriterText = "Workplace success for kingdom impact";


const Hero = () => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (index < typewriterText.length) {
      timeout = setTimeout(() => {
        setDisplayed((prev) => prev + typewriterText[index]);
        setIndex((prev) => prev + 1);
      }, 80);
    } else {
      timeout = setTimeout(() => {
        setDisplayed("");
        setIndex(0);
      }, 1200);
    }

    return () => clearTimeout(timeout);
  }, [index]);

return (
  <div className="heroSec min-h-[90vh] flex items-center justify-start">
    <div className="inline-block bg-white/70 backdrop-blur-sm rounded-xl shadow-md p-2 ml-8">
      <h1 className="font-bold text-2xl whitespace-nowrap text-left">
        Guidingg faith-driven professionals to embody God&apos;s will and excel in their careers
      </h1>
      <p className="font-semibold text-xl mt-6 text-left">
        {displayed}
        <span className="animate-pulse">|</span>
      </p>
    </div>
  </div>
);
};

export default Hero;