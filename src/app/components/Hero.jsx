
"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 sm:gap-6">
        {/* Left Side */}
        <motion.div
          className="sm:col-span-7 place-self-center text-center sm:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-white mb-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
              Hey, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Archita",
                1000,
                "Full-Stack Developer",
                1000,
                "MERN Stack Developer",
                1000,
                "AI-Integrated Web Apps",
                1000,
                "DSA Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white"
            />
          </h1>

          <p className="text-[#ADB7BE] text-sm sm:text-lg lg:text-xl mb-6 leading-relaxed">
            Full-stack developer and B.Tech Electronics &amp; Communication
            student at IIIT Kota. I build real-time, AI-powered web apps with
            React, Next.js, Node.js, MongoDB and PostgreSQL, and I&apos;ve
            shipped production work as a Software Engineer Intern at Gyanama and
            as a freelance developer for Samar Trading.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <motion.button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 w-full sm:w-fit py-3 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:-translate-y-1 transition-transform text-white shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              Hire Me
            </motion.button>

            <motion.a
              href="https://res.cloudinary.com/dqbhvzioe/image/upload/v1791902174/Archita_Agrawal_Resume_Main_Oct_lphrmx.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:-translate-y-1 transition-transform text-white shadow-md text-center"
              whileHover={{ scale: 1.05 }}
            >
              <span className="block bg-[#181818] hover:bg-slate-800 rounded-full px-5 py-2">
                View Resume
              </span>
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side: Hero Image */}
        <motion.div
          className="sm:col-span-5 place-self-center flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] lg:w-[380px] lg:h-[380px] rounded-full bg-[#181818] shadow-lg">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="https://res.cloudinary.com/dqbhvzioe/image/upload/v1748473629/1hero_rotirt.png"
                alt="hero image"
                width={400}
                height={400}
                className="w-full h-full object-contain"
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