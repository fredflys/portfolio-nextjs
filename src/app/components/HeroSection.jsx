"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Yifei",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "a web developer",
        1000,
        "",
        1000,
        "",
        1000,
      ]}
      wrapper="span"
      speed={30}
      // style={{ fontSize: "1em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

const HeroSection = () => {
  return (
    <section>
      {/* About Me */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 sm:grid-cols-12"
      >
        <div className="col-span-7 place-content-center text-center sm:text-left">
          {/* Name */}
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            {/* no gradient can be put on text so we take a detour here
            make bg gradient and text transparent and then clip the bg to text */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <Introduction />
          </h1>
          {/* Description */}
          <p className="text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl">
            This a random paragraph This a random paragraph This a random
            paragraph This a random paragraph
          </p>
          {/* Buttons */}
          <div>
            <button
              className="px-6 py-3 rounded-full mr-4
           hover:bg-slate-200 text-white
          w-full sm:w-fit
          bg-gradient-to-br from-primary-500 via-transition-500 to-secondary-500"
            >
              Hire Me
            </button>
            <button
              className="px-1 py-1 rounded-full
          hover:bg-slate-800 text-white mt-3 
          w-full sm:w-fit
          bg-gradient-to-br from-primary-500 via-transition-500 to-secondary-500"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div
            className="rounded-full bg-[#181818] w-[250px] h-[250px]             
            lg:w-[400px] lg:h-[400px] 
            relative"
          >
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              width={390}
              height={390}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default HeroSection;
