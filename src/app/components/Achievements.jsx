"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaCode, FaBookOpen } from "react-icons/fa";
import LineGradient from "./LineGradient";

const achievementsData = [
  {
    icon: <FaCode className="text-xl sm:text-2xl text-cyan-400" />,
    title: "Algorithmic Problem Solving",
    desc: "Solved 500+ problems on LeetCode and 550+ across competitive platforms, with consistent focus on graphs, dynamic programming, and system-level data structures.",
    link: "https://leetcode.com/u/archita_25/",
  },
  {
    icon: <FaTrophy className="text-xl sm:text-2xl text-yellow-400" />,
    title: "Competitive Coding",
    desc: "Competed in 50+ CodeChef contests, earning a peak 3-Star rating. Strong background in time-complexity optimization under contest constraints.",
    link: "https://www.codechef.com/users/archita_25",
  },
  {
    icon: <FaBookOpen className="text-xl sm:text-2xl text-pink-400" />,
    title: "Research Publication",
    desc: "Peer-reviewed ML paper on cardiovascular risk prediction accepted at NIT Patna Conference 2026.",
  },
  {
    icon: <FaMedal className="text-xl sm:text-2xl text-purple-400" />,
    title: "Odoo Hackathon 2026 Finalist",
    desc: "Top 13% of 20,363 registrations. In the 24-hour finale, co-built DealFlow360, a quote-to-cash platform in Spring Boot and React with discount approvals, subscription billing, and warehouse allocation.",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-16 sm:py-20 bg-[#121212] text-white overflow-hidden"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 sm:mb-12 px-4"
      >
        <h2 className="font-serif font-semibold text-3xl sm:text-5xl uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
          Achievements
        </h2>
        <div className="flex justify-center mt-4">
          <LineGradient width="w-1/2 sm:w-1/3" />
        </div>
      </motion.div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {achievementsData.map((item, idx) => {
          const Card = (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`h-full bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6 hover:border-purple-500/50 transition-all ${
                item.link ? "cursor-pointer" : ""
              }`}
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="font-semibold text-base sm:text-lg mb-2 break-words">
                {item.title}
              </h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed break-words">
                {item.desc}
              </p>
            </motion.div>
          );

          return item.link ? (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              className="block h-full"
            >
              {Card}
            </a>
          ) : (
            <div key={idx} className="h-full">
              {Card}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;