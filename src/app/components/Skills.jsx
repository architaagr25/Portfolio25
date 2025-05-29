import React from 'react';
import { motion } from "framer-motion";

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaMagic } from 'react-icons/fa';
import { SiNextdotjs, SiFigma, SiTailwindcss, SiFramer, SiCplusplus, SiPandas, SiNumpy, SiTypescript } from 'react-icons/si';

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
    "Pandas", "NumPy", "TypeScript",
  ];

  const positions = {
    HTML: { x: "10vw", y: "0vw" },
    CSS: { x: "6vw", y: "10vw" },
    JavaScript: { x: "-6vw", y: "10vw" },
    ReactJS: { x: "-10vw", y: "0vw" },
    NextJS: { x: "-14vw", y: "-10vw" },
    Figma: { x: "-6vw", y: "-14vw" },
    "Tailwind CSS": { x: "6vw", y: "-14vw" },
    "Framer-motion": { x: "14vw", y: "-10vw" },
    GSAP: { x: "0vw", y: "16vw" },
    "C++": { x: "18vw", y: "0vw" },
    Pandas: { x: "12vw", y: "12vw" },
    NumPy: { x: "-12vw", y: "12vw" },
    TypeScript: { x: "-20vw", y: "0vw" },
  };

  return (
  
    <div className="relative w-full mt-8 py-20 lg:bg-circularLight min-h-screen"> {/* Added lg:bg-circularLight and min-h-screen here */}
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
          <span className="text-xl">{skillIcons["Web"]}</span> Web
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