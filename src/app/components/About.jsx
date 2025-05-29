"use client";

import React, { useRef, useEffect, useState } from 'react';
import AnimatedText from './AnimatedText';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import { motion, useInView, useSpring, useMotionValue } from 'framer-motion';
import Skills from './Skills';

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
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  const timestamp = Date.now();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main
      id='about'
      className='relative flex w-full flex-col items-center justify-center px-4 sm:px-8 pb-10 overflow-hidden'
    >
      {/* Background blob effect */}
      <div className="absolute -z-10 top-[-10%] left-[-10%] w-[300px] h-[300px] bg-purple-600 opacity-30 blur-3xl rounded-full animate-pulse" />
      <div className="absolute -z-10 bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-pink-500 opacity-20 blur-3xl rounded-full animate-pulse" />

      {/* Animated Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="pt-16"
      >
        <AnimatedText
          text="Behind the cursor"
          className="mb-14 text-4xl sm:text-6xl lg:text-8xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 text-center"
        />
      </motion.div>

      {/* Main Grid */}
      <div className='grid grid-cols-1 md:grid-cols-8 gap-10 md:gap-16'>

        {/* About Text */}
        <motion.div
          className='md:col-span-3 flex flex-col items-start'
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='mb-4 text-3xl md:text-4xl font-serif font-bold uppercase text-white hover:underline'>
            About Me
          </h2>
          <p className='text-white/80 text-base sm:text-lg lg:text-xl'>
            Hi, I'm Archita Agrawal, currently pursuing BTech in Electronics and Communication at IIIT Kota.
            I'm passionate about clean code, design, and building sleek, interactive web interfaces.
          </p>
          <p className='my-4 text-white/80 text-base sm:text-lg lg:text-xl'>
            I’ve built projects using HTML, CSS, JavaScript, React, NextJS, and animations with Framer Motion & GSAP.
          </p>
          <p className='text-white/80 text-base sm:text-lg lg:text-xl'>
            Always eager to explore and implement fresh UI trends and motion design in my work.
          </p>
        </motion.div>

        {/* Image with glow frame */}
        <motion.div
          className='md:col-span-3 flex justify-center relative'
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {isMobile ? (
            <div className='relative p-3 rounded-2xl border-2 border-white/30 bg-black/50'>
              <div className='absolute top-2 left-2 w-full h-full rounded-2xl border-8 border-white -z-10'></div>
              <Image
                src="https://res.cloudinary.com/dqbhvzioe/image/upload/v1748533066/pfp_km67vx.jpg?v=${timestamp}"
                alt="Archita"
                className="w-full h-auto rounded-2xl"
                width={400}
                height={500}
                priority
              />
            </div>
          ) : (
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              transitionSpeed={1000}
              scale={1.05}
              gyroscope={true}
            >
              <div className='relative p-3 rounded-2xl border-2 border-white/30 bg-black/50'>
                <div className='absolute top-2 left-2 w-full h-full rounded-2xl border-8 border-white -z-10'></div>
                <Image
                  src="https://res.cloudinary.com/dqbhvzioe/image/upload/v1748473647/pfp_tbljdg.jpg"
                  alt="Archita"
                  className="w-full h-auto rounded-2xl"
                  width={400}
                  height={500}
                  priority
                />
              </div>
            </Tilt>
          )}
        </motion.div>

        {/* Stats */}
        <motion.div
          className='md:col-span-2 flex flex-col items-center md:items-end justify-evenly gap-8 mt-8 md:mt-0'
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[{ label: "Creative Components", val: 20 }, { label: "Projects Completed", val: 5 }, { label: "Lines of Code", val: 500 }].map((stat, idx) => (
            <div
              key={idx}
              className='group relative p-4 bg-gradient-to-br from-purple-600/20 to-pink-500/10 rounded-xl border border-white/20 backdrop-blur-md hover:scale-105 transition-all'
            >
              <span className='inline-block text-5xl sm:text-6xl font-bold text-white'>
                <AnimatedNumbers value={stat.val} />+
              </span>
              <h2 className='text-base sm:text-lg lg:text-xl font-medium capitalize text-white/70 text-center md:text-right'>
                {stat.label}
              </h2>
              <div className="absolute -inset-1 rounded-xl border border-pink-500 opacity-0 group-hover:opacity-50 transition-all"></div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Skills Section with fade-in */}
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
