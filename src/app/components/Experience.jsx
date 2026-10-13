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
    duration: "May 2026 - August 2026",
    location: "Remote",
    image:
      "https://res.cloudinary.com/dqbhvzioe/image/upload/v1783061999/Screenshot_2026-07-03_122936_aynvvp.png",
    points: [
      "Designed and implemented an automated backend data pipeline integrating the Google Sheets API to capture and process client form submissions with near-zero data loss under concurrent multi-user load, eliminating a manual workflow entirely; validated with unit and integration tests across concurrent user scenarios.",
      "Built and documented RESTful API endpoints with schema-based input validation and structured error handling, reducing integration issues reported by downstream collaborators; decomposed the codebase into 10+ component modules with strict interface contracts and separation of concerns to enable parallel development.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Gyanama",
    companyUrl: "https://gyanama.com/",
    duration: "January 2026 - June 2026",
    location: "Remote",
    image: "https://res.cloudinary.com/dqbhvzioe/image/upload/v1791901305/Screenshot_2026-10-13_195009_fs8fsq.png",
    points: [
      "Built and shipped the production marketing website for Gyanama's AI school operating system, translating features like AI attendance calling and student health scores into a responsive, conversion-focused site with React 18, TypeScript, and Vite, styled with Tailwind CSS and shadcn/ui.",
      "Implemented scroll-driven animations and interactive product showcases with Framer Motion, and integrated a Cal.com scheduling widget with an email-form fallback across 9 routed pages.",
      "Built reusable, accessible UI components and optimized the production build with lazy-loading, code-splitting, and an SEO-tuned build pipeline, improving Core Web Vitals and load times across devices.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 bg-[#121212] text-white overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 sm:mb-12 px-4"
      >
        <h2 className="font-serif font-semibold text-3xl sm:text-5xl uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
          Work Experience
        </h2>
        <div className="flex justify-center mt-4">
          <LineGradient width="w-1/2 sm:w-1/3" />
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-12 md:gap-16">
        {experienceData.map((exp, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row md:items-stretch gap-6 md:gap-10"
          >
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="relative flex-1 min-w-0 pl-6 sm:pl-8 border-l-2 border-purple-500/40"
            >
              <span className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <FaBriefcase className="text-[10px] text-white" />
              </span>

              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-baseline gap-1">
                <h3 className="text-lg sm:text-2xl font-bold break-words">
                  {exp.role}
                </h3>
                <span className="text-xs sm:text-sm text-[#ADB7BE] whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-1 mb-3">
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 font-semibold hover:text-pink-400 transition-colors duration-300 underline underline-offset-4"
                >
                  {exp.company}
                </a>

                {exp.location && (
                  <span className="text-[#ADB7BE] text-sm sm:text-base">
                    {exp.location}
                  </span>
                )}

                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300 transition-all duration-300 hover:bg-purple-500 hover:text-white hover:border-purple-500"
                >
                  Visit Website
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              </div>

              <ul className="space-y-2 list-disc pl-5 text-white/80 text-sm sm:text-base leading-relaxed">
                {exp.points.map((point, i) => (
                  <li key={i} className="break-words">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="w-full md:w-[300px] lg:w-[420px] flex-shrink-0"
            >
              {exp.image ? (
                <img
                  src={exp.image}
                  alt={`${exp.company} experience`}
                  className="w-full aspect-video md:aspect-auto md:h-full rounded-2xl border border-white/10 shadow-lg object-cover"
                />
              ) : (
                <div className="w-full aspect-video md:aspect-auto md:h-full min-h-[180px] rounded-2xl border-2 border-dashed border-white/20 bg-white/5 flex items-center justify-center text-white/40 text-sm">
                  Photo placeholder
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;