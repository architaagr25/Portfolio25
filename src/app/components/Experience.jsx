"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import LineGradient from "./LineGradient";

const experienceData = [
  {
    role: "Freelance Software Developer",
    company: "Samar Trading",
    comapnyUrl: "https://samartrading.in/",
    duration: "March 2026 - June 2026",
    location: "Remote",
    points: [
      "Built an automated backend data pipeline integrating the Google Sheets API to capture and process client form submissions with near-zero data loss under concurrent multi-user load — eliminating a manual workflow entirely; validated with unit and integration tests across concurrent user scenarios.",
      "Optimised production deployment performance by resolving render-blocking bottlenecks, improving Lighthouse scores by ~40%; structured 10+ component modules with strict interface contracts and separation of concerns to enable parallel development.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-[#121212] text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-serif font-semibold text-4xl sm:text-5xl uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
  Work Experience
</h2>
        <div className="flex justify-center mt-4">
          <LineGradient width="w-1/3" />
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-6">
        {experienceData.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="relative pl-8 border-l-2 border-purple-500/40 pb-10 last:pb-0"
          >
            <span className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <FaBriefcase className="text-[10px] text-white" />
            </span>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
              <h3 className="text-xl sm:text-2xl font-bold">{exp.role}</h3>
              <span className="text-sm text-[#ADB7BE]">{exp.duration}</span>
            </div>
            <p className="text-purple-400 font-medium mb-3">
              {exp.company} · {exp.location}
            </p>

            <ul className="space-y-2 list-disc list-inside text-white/80 text-sm sm:text-base">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;