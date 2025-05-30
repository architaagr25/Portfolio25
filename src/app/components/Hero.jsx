"use client";

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12 gap-6'>

        {/* Left Side */}
        <motion.div
          className='col-span-7 place-self-center text-center sm:text-left'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600'>
              Hey, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Archita",
                1000,
                "Frontend Developer",
                1000,
                "Tech Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className='text-white'
            />
          </h1>

          <p className='text-[#ADB7BE] text-base mb-6 sm:text-lg lg:text-xl'>
           Frontend enthusiast with a flair for sleek designs and smooth interactions. 
           Always exploring, building, and leveling up. Let’s create something awesome together.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <motion.button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className='px-6 w-full sm:w-fit py-3 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 hover:-translate-y-1 transition-transform text-white shadow-lg'
              whileHover={{ scale: 1.05 }}
            >
              Hire Me
            </motion.button>

            <motion.button
              className='px-1 py-1 w-full sm:w-fit rounded-full mt-3 sm:mt-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 hover:-translate-y-1 transition-transform text-white shadow-md'
              whileHover={{ scale: 1.05 }}
            >
              <a
                href="https://res.cloudinary.com/dqbhvzioe/image/upload/v1748546096/resume_may2025_lx7uyb.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="block bg-[#181818] hover:bg-slate-800 rounded-full px-5 py-2">
                  View Resume
                </span>
              </a>
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side: Hero Image - floating image */}
        <motion.div
          className='col-span-5 place-self-center mt-6 lg:mt-0 flex justify-center'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div className='relative w-[380px] h-[380px] rounded-full bg-[#181818] shadow-lg'>
            <motion.div
              className='absolute  transform -translate-x-1/2 -translate-y-1/2'
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image
                src="https://res.cloudinary.com/dqbhvzioe/image/upload/v1748473629/1hero_rotirt.png"
                alt="hero image"
                width={400}
                height={400}
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
