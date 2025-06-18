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
    <div className="heroSec min-h-[90vh]">
      <div className="text-center absolute rounded-xl md:w-1/2 shadow-md left-6 p-4 top-1/3 bg-white/70 backdrop-blur-sm">
        <h1 className="font-bold text-4xl">
          The Impact of Technology on the Workplace: How Technology is Changing
        </h1>
        <p className="font-semibold text-2xl mt-8">
          {displayed}
          <span className="animate-pulse">|</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;