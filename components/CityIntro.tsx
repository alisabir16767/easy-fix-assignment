"use client";

import { motion } from "framer-motion";
import React from "react";
import Typewriter from 'typewriter-effect';

const CityIntro = () => {
  const handleBookNowClick = () => {
    window.location.href = "https://easyfixexpert.com/Karaikudi/Daikin/AC#booking";
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-violet-50">
      <div
        className="absolute top-0 left-0 w-full h-full z-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 py-12 sm:px-10 lg:px-20 gap-10">
        
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 text-[#000000]">
            Welcome to{" "}
            <Typewriter
              options={{
                strings: [
                  'Daikin AC in Karaikudi',
                  'தாய்கின் ஏசி கரைக்குடியில்',
                  'Best Cooling Solutions',
                  'சிறந்த குளிர்வித்தல் தீர்வுகள்'
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                wrapperClassName: "bg-gradient-to-r from-purple-800 to-pink-400 bg-clip-text text-transparent inline-block"
              }}
            />
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#000000] mb-6 max-w-2xl leading-relaxed">
            Known for its heritage buildings and Chettinad cuisine, Karaikudi residents trust us
            for quick AC servicing even during the scorching Tamil Nadu summers.
          </p>
          <div className="flex flex-row flex-wrap gap-4 items-center justify-center sm:justify-start">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={handleBookNowClick}
    className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#8A2BE2] to-[#DA70D6] text-white font-semibold border-none rounded-lg shadow-lg"
  >
    <i className="bi bi-calendar-check me-2"></i> Book Now
  </motion.button>

  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-6 py-3 sm:px-8 sm:py-4 text-white font-semibold border-none rounded-lg shadow-lg"
    style={{
      background: "linear-gradient(135deg, rgb(0, 102, 255) 0%, rgb(0, 204, 255) 100%)"
    }}
  >
    <i className="bi bi-envelope me-2"></i> Contact Us
  </motion.button>
</div>


       
        </div>
        

        <div className="flex-1 relative">
  <motion.img
    src="https://plus.unsplash.com/premium_photo-1682126012378-859ca7a9f4cf?w=800&q=80"
    alt="AC Image"
    className="w-full h-auto max-w-md mx-auto rounded-lg shadow-xl"
    whileHover={{
      rotateX: 10,
      rotateY: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 800, damping: 15 }
    }}
    whileTap={{
      rotateX: 0,
      rotateY: 0,
      scale: 0.98
    }}
    animate={{
      scale: [1, 1.05, 1], 
    }}
    transition={{
      repeat: Infinity,
      repeatType: "reverse",
      duration: 2, 
      ease: "easeInOut",
    }}
  />
  

</div>


      </div>
    </div>
  );
};

export default CityIntro;
