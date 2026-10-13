"use client";

import React, { useRef, useEffect, useState } from "react";
import AnimatedText from "./AnimatedText";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import Skills from "./Skills";

// Animated counter
const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current && Number(latest.toFixed(0)) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
    return () => unsubscribe();
  }, [springValue, value]);

  return <span ref={ref}>0</span>;
};

const stats = [
  { label: "Problems Solved", val: 550 },
  { label: "CodeChef Contests", val: 50 },
  { label: "Professional Roles", val: 2 },
];

const ProfileImage = () => (
  <div className="relative p-3 rounded-2xl border-2 border-white/30 bg-black/50">
    <div className="absolute top-2 left-2 w-full h-full rounded-2xl border-8 border-white -z-10"></div>
    <Image
      src="https://res.cloudinary.com/dqbhvzioe/image/upload/q_auto/f_auto/v1776445792/pfp_tedpe9.jpg"
      alt="Archita"
      className="w-full h-auto rounded-2xl"
      width={400}
      height={500}
      priority
    />
  </div>
);

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main
      id="about"
      className="relative flex w-full flex-col items-center justify-center px-4 sm:px-8 pb-10 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute -z-10 top-[-10%] left-[-10%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-purple-600 opacity-30 blur-3xl rounded-full animate-pulse" />
      <div className="absolute -z-10 bottom-[-10%] right-[-10%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-pink-500 opacity-20 blur-3xl rounded-full animate-pulse" />

      {/* Animated Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="pt-16 w-full"
      >
        <AnimatedText
          text="Behind the cursor"
          className="mb-10 sm:mb-14 text-4xl sm:text-6xl lg:text-8xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 text-center"
        />
      </motion.div>

      {/* Main Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-8 gap-8 md:gap-12 items-center">
        {/* About Text */}
        <motion.div
          className="md:col-span-3 flex flex-col items-start"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-serif font-bold uppercase text-white hover:underline">
            About Me
          </h2>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed">
            Hi, I&apos;m Archita Agrawal, a B.Tech student in Electronics and
            Communication Engineering at IIIT Kota (CGPA 8.64), based in Bhopal,
            with a love for clean code and smooth, interactive web experiences.
          </p>
          <p className="my-4 text-white/80 text-base sm:text-lg leading-relaxed">
            I work across the stack with React.js, Next.js, TypeScript,
            Node.js, Express.js, MongoDB and PostgreSQL, and I build real-time
            features with Socket.IO and AI features with the Google Gemini API.
          </p>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed">
            I&apos;ve interned as a Software Engineer at Gyanama, freelanced
            for Samar Trading, published ML research at NIT Patna 2026, and
            finished as an Odoo Hackathon 2026 finalist.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="md:col-span-3 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-full max-w-[320px] sm:max-w-[360px]">
            {isMobile ? (
              <ProfileImage />
            ) : (
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                transitionSpeed={1000}
                scale={1.05}
                gyroscope={true}
              >
                <ProfileImage />
              </Tilt>
            )}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="md:col-span-2 grid grid-cols-3 md:grid-cols-1 gap-3 sm:gap-4 md:gap-8 md:justify-items-end"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative w-full md:w-auto p-3 sm:p-4 bg-gradient-to-br from-purple-600/20 to-pink-500/10 rounded-xl border border-white/20 backdrop-blur-md hover:scale-105 transition-all flex flex-col items-center md:items-end"
            >
              <span className="inline-block text-3xl sm:text-5xl lg:text-6xl font-bold text-white">
                <AnimatedNumbers value={stat.val} />+
              </span>
              <h3 className="text-xs sm:text-base lg:text-xl font-medium capitalize text-white/70 text-center md:text-right">
                {stat.label}
              </h3>
              <div className="absolute -inset-1 rounded-xl border border-pink-500 opacity-0 group-hover:opacity-50 transition-all pointer-events-none"></div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Skills />
      </motion.div>
    </main>
  );
};

export default About;