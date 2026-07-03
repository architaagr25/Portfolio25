"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import LineGradient from "./LineGradient";

const experienceData = [
  {
    role: "Freelance Software Developer",
    company: "Samar Trading",
    companyUrl: "https://samartrading.in/",
    duration: "March 2026 - June 2026",
    location: "Remote",
    points: [
      "Built an automated backend data pipeline integrating the Google Sheets API to capture and process client form submissions with near-zero data loss under concurrent multi-user load, eliminating a manual workflow entirely; validated with unit and integration tests across concurrent user scenarios.",
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

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-stretch gap-10">
        <div className="flex-1 w-full">
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

              <div className="flex flex-wrap items-center gap-3 mb-3">
                <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="text-purple-400 font-semibold hover:text-pink-400 transition-colors duration-300 underline underline-offset-4">
                  {exp.company}
                </a>

                <span className="text-[#ADB7BE]">{exp.location}</span>

                <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300 transition-all duration-300 hover:bg-purple-500 hover:text-white hover:border-purple-500">
                  Visit Website
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              </div>

              <ul className="space-y-2 list-disc list-inside text-white/80 text-sm sm:text-base">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

       <motion.div
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="w-full md:w-[300px] lg:w-[420px] flex-shrink-0"
  >
    <img
      src="https://res.cloudinary.com/dqbhvzioe/image/upload/v1783061999/Screenshot_2026-07-03_122936_aynvvp.png"
      alt="Company placeholder"
      className="w-full h-full rounded-2xl border border-white/10 shadow-lg object-cover"
    />
  </motion.div>
</div>
    </section>
  );
};

export default Experience;