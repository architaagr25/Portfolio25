import React from 'react';
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaMagic,
  FaPython,
  FaGitAlt,
  FaGithub
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiCplusplus,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiSocketdotio,
  SiJsonwebtokens,
  SiVite,
  SiChartdotjs,
  SiMysql
} from 'react-icons/si';

const skillIcons = {
  "HTML": <FaHtml5 className="text-orange-600" />,
  "CSS": <FaCss3Alt className="text-blue-600" />,
  "JavaScript": <FaJsSquare className="text-yellow-400" />,
  "React.js": <FaReact className="text-cyan-400" />,
  "Next.js": <SiNextdotjs className="text-black" />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
  "Framer Motion": <SiFramer className="text-purple-600" />,
  "GSAP": <FaMagic className="text-green-600" />,
  "Vite": <SiVite className="text-purple-500" />,
  "C++": <SiCplusplus className="text-blue-700" />,
  "Python": <FaPython className="text-yellow-500" />,
  "SQL": <SiMysql className="text-blue-600" />,
  "Node.js": <FaNodeJs className="text-green-700" />,
  "Express.js": <SiExpress className="text-gray-700" />,
  "MongoDB": <SiMongodb className="text-green-600" />,
  "PostgreSQL": <SiPostgresql className="text-blue-600" />,
  "Socket.IO": <SiSocketdotio className="text-black" />,
  "JWT": <SiJsonwebtokens className="text-pink-600" />,
  "Git": <FaGitAlt className="text-orange-600" />,
  "GitHub": <FaGithub className="text-gray-800" />,
  "Chart.js": <SiChartdotjs className="text-pink-500" />
};

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className='hidden sm:flex items-center gap-2 justify-center rounded-full
        font-semibold bg-white/80 text-black/90 py-2 px-5 text-sm
        shadow-md cursor-pointer absolute select-none whitespace-nowrap'
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
  "React.js",
  "Next.js",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "Framer Motion",
  "GSAP",
  "Vite",
  "Socket.IO",
  "JWT",
  "C++",
  "Python",
  "SQL",
  "Git",
  "GitHub",
  "Chart.js",
];

  // Golden-angle spiral layout: radius grows with sqrt(i), angle advances by
  // the golden angle (~137.5deg) each step. This spacing is mathematically
  // guaranteed to never overlap, however many skills are added, and scales
  // itself automatically instead of relying on hand-picked coordinates.
  const GOLDEN_ANGLE = 137.5;
  const RADIUS_STEP_X = 6.4; // vw per sqrt-unit of radius
  const RADIUS_STEP_Y = 4.2; // vw per sqrt-unit of radius (flatter ellipse)
  const MIN_RADIUS = 9; // vw, keeps first ring clear of the center "Web" node

  const positions = skills.reduce((acc, skill, i) => {
    const angleRad = (i * GOLDEN_ANGLE * Math.PI) / 180;
    const radiusFactor = Math.sqrt(i + 1);
    const rX = MIN_RADIUS + RADIUS_STEP_X * radiusFactor;
    const rY = MIN_RADIUS * 0.75 + RADIUS_STEP_Y * radiusFactor;
    acc[skill] = {
      x: `${(rX * Math.cos(angleRad)).toFixed(2)}vw`,
      y: `${(rY * Math.sin(angleRad)).toFixed(2)}vw`,
    };
    return acc;
  }, {});

  return (
<div className="relative w-[100vw] mt-8 py-20 pb-40 md:bg-circularLight lg:bg-circularLight min-h-[130vh]">
      <h2 className='font-bold text-7xl mt-60 w-full font-serif text-center uppercase text-white hover:underline p-2'>
        Skills
      </h2>

      {/* Desktop Circular Layout */}
      <div className='w-full min-h-full relative flex items-center justify-center'>

        <motion.div
          className='z-20 flex items-center gap-2 justify-center rounded-full
            font-semibold bg-white text-black py-4 px-8 sm:py-6 sm:px-10
            text-sm sm:text-lg shadow-lg cursor-pointer select-none'
          initial={{ scale: 1, rotate: 0 }}
          whileHover={{
            scale: 1.1,
            rotate: [0, 5, -5, 5, 0],
            transition: { duration: 0.6, repeat: Infinity }
          }}
          animate={{
            scale: [1, 1.05, 1],
            transition: { duration: 3, repeat: Infinity }
          }}
        >
          Web
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

      {/* Mobile Layout */}
      <div className="flex sm:hidden flex-wrap justify-center gap-4 px-4">
        {["Web", ...skills].map((skill, idx) => (
          <motion.div
            key={idx}
            className="bg-white/90 text-black text-sm font-medium py-2 px-4 rounded-full shadow-md cursor-pointer select-none flex items-center gap-2"
            whileHover={{ scale: 1.1 }}
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