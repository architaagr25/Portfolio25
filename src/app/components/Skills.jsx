import React from 'react';
import { motion } from "framer-motion";

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaMagic } from 'react-icons/fa';
import { SiNextdotjs, SiFigma, SiTailwindcss, SiFramer, SiCplusplus, SiPandas, SiNumpy, SiTypescript, SiThreejs } from 'react-icons/si';

const skillIcons = {
  HTML: <FaHtml5 className="text-orange-600" />,
  CSS: <FaCss3Alt className="text-blue-600" />,
  JavaScript: <FaJsSquare className="text-yellow-400" />,
  ReactJS: <FaReact className="text-cyan-400" />,
  NextJS: <SiNextdotjs className="text-black" />,
  Figma: <SiFigma className="text-pink-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
  "Framer-motion": <SiFramer className="text-purple-600" />,
  GSAP: <FaMagic className="text-green-600" />,
  "C++": <SiCplusplus className="text-blue-700" />,
  Pandas: <SiPandas className="text-gray-700" />,
  NumPy: <SiNumpy className="text-blue-800" />,
  TypeScript: <SiTypescript className="text-blue-600" />,
  "Three.js": <SiThreejs className="text-black" />,
  Web: <FaNodeJs className="text-green-700" />

};

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className='hidden sm:flex items-center gap-2 justify-center rounded-full
        font-semibold bg-white/80 text-black/90 py-2 px-5 text-sm
        shadow-md cursor-pointer absolute select-none'
      initial={{ x: 0, y: 0, scale: 1, rotate: 0 }}
      whileInView={{ x, y }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      whileHover={{
        scale: 1.1,
        rotate: [0, 5, -5, 5, 0],
        transition: { duration: 0.6, repeat: Infinity, ease: "easeInOut" }
      }}
      animate={{
        scale: [1, 1.05, 1],
        transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      <span className="text-lg">{skillIcons[name] || null}</span>
      {name}
    </motion.div>
  );
};

const Skills = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "ReactJS", "NextJS",
    "Figma", "Tailwind CSS", "Framer-motion", "GSAP", "C++",
    "Pandas", "NumPy", "TypeScript","Three.js",
  ];

  const positions = {
    HTML: { x: "10.5vw", y: "0vw" },
    CSS: { x: "13vw", y: "9vw" },
    JavaScript: { x: "-14vw", y: "9vw" },
    ReactJS: { x: "-10.5vw", y: "0vw" },
    NextJS: { x: "0vw", y: "-21vw" },
    Figma: { x: "-12vw", y: "-14vw" },
    "Tailwind CSS": { x: "0vw", y: "-11vw" },
    "Framer-motion": { x: "12vw", y: "-14vw" },
    GSAP: { x: "0vw", y: "18vw" },
    "C++": { x: "22vw", y: "-9vw" },
    Pandas: { x: "22vw", y: "5vw" },
    NumPy: { x: "-22vw", y: "5vw" },
    TypeScript: { x: "-22vw", y: "-9vw" },
    "Three.js": { x: "0vw", y: "-27vw" },
  };

  return (
  
    <div className="relative w-[100vw] mt-8 py-20 md:bg-circularLight lg:bg-circularLight min-h-screen"> {/* Added lg:bg-circularLight and min-h-screen here */}
      <h2 className='font-bold text-7xl mt-60 w-full font-serif text-center uppercase text-white hover:underline p-2'>Skills</h2>

      {/* Desktop Circular Layout */}
      <div className='w-full min-h-full relative flex items-center justify-center'> {/* Changed min-h-screen to min-h-full */}
        <motion.div
          className='z-20 flex items-center gap-2 justify-center rounded-full
            font-semibold bg-white text-black py-4 px-8 sm:py-6 sm:px-10
            text-sm sm:text-lg shadow-lg cursor-pointer select-none'
          initial={{ scale: 1, rotate: 0 }}
          whileHover={{
            scale: 1.1,
            rotate: [0, 5, -5, 5, 0],
            transition: { duration: 0.6, repeat: Infinity, ease: "easeInOut" }
          }}
          animate={{
            scale: [1, 1.05, 1],
            transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <span className="text-xl"></span> Web
        </motion.div>

        {skills.map((skill, idx) => (
          <Skill
            key={idx}
            name={skill}
            x={positions[skill]?.x || "0vw"}
            y={positions[skill]?.y || "0vw"}
          />
        ))}
      </div>

      {/* Mobile stacked layout */}
      <div className="flex sm:hidden flex-wrap justify-center gap-4 px-4">
        {["Web", ...skills].map((skill, idx) => (
          <motion.div
            key={idx}
            className="bg-white/90 text-black text-sm font-medium py-2 px-4 rounded-full shadow-md cursor-pointer select-none flex items-center gap-2 justify-center"
            whileHover={{ scale: 1.1, boxShadow: "0 0 8px rgba(0,0,0,0.3)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-base">{skillIcons[skill] || null}</span>
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;