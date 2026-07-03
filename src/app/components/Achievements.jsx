"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaUsers, FaCode, FaBookOpen } from "react-icons/fa";
import LineGradient from "./LineGradient";

const achievementsData = [
  {
    icon: <FaCode className="text-2xl text-cyan-400" />,
    title: "Algorithmic Problem Solving",
    desc: "Solved 500+ problems on LeetCode and 550+ across competitive platforms, with consistent focus on graphs, dynamic programming, and system-level data structures.",
    link: "https://leetcode.com/u/archita_25/",
  },
  {
    icon: <FaBookOpen className="text-2xl text-pink-400" />,
    title: "Research Publication",
    desc: "Peer-reviewed ML paper on cardiovascular risk prediction accepted at NIT Patna Conference 2026.",
  },
  {
    icon: <FaTrophy className="text-2xl text-yellow-400" />,
    title: "Competitive Coding",
    desc: "Competed in 50+ CodeChef contests, earning peak 2-Star rating; strong background in time-complexity optimization under contest constraints.",
    link: "https://www.codechef.com/users/archita_25",
  },
  {
    icon: <FaUsers className="text-2xl text-purple-400" />,
    title: "Leadership",
    desc: "Led a cross-functional team of 8 to organize 3 campus events with 200+ participants each under Odyssey Literary Club, IIIT Kota.",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-[#121212] text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-serif font-semibold text-4xl sm:text-5xl uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
  Achievements
</h2>
        <div className="flex justify-center mt-4">
          <LineGradient width="w-1/3" />
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {achievementsData.map((item, idx) => {
          const Card = (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="h-full bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all cursor-pointer"
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-white/70 text-sm">{item.desc}</p>
            </motion.div>
          );

          return item.link ? (
            <a href={item.link} target="_blank" rel="noopener noreferrer" key={idx}>
              {Card}
            </a>
          ) : (
            <div key={idx}>{Card}</div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;