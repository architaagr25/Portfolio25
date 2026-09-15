"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 2,
    title: "Mentora-ai",
    description: "Mentora AI is a real-time tutoring platform with a Socket.IO pipeline that streams responses word by word, plus a Gemini-powered engine that scores how well someone actually understands a concept, not just whether they got the answer right.",
    image: "https://res.cloudinary.com/dqbhvzioe/image/upload/v1789504546/Untitled_design_2_or4yjd.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/architaagr25/mentora-ai.git",
    previewUrl: "https://mentora-ai-khaki.vercel.app/",
  },
  {
    id: 1,
    title: "PawConnect",
    description: "PawConnect is a community-driven rescue and adoption platform built to give every stray animal a second chance. Citizens report strays with a photo and live location, volunteers coordinate rescues through real-time chat, and adopters can browse rescued animals and apply to give them a forever home — with the entire lifecycle tracked transparently.",
    image: "https://res.cloudinary.com/dqbhvzioe/image/upload/q_auto/f_auto/v1776440034/Untitled_design_1_kvz8sg.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ArchitaAgrawal25/PawConnect.git",
    previewUrl: "https://pawconnect-bay.vercel.app/",
  },
  {
  id: 10,
  title: "Heart Disease Prediction",
  description: "A Random Forest model predicting cardiovascular risk, tuned via Grid Search and 5-Fold Cross-Validation to reach 85.87% accuracy and a 0.9167 ROC-AUC score. Research accepted at NIT Patna Conference 2026.",
  image: "https://res.cloudinary.com/dqbhvzioe/image/upload/v1783063406/Untitled_design_1_birmp7.jpg",
  tag: ["All", "Web"],
  gitUrl: "https://github.com/jigyasa0712/Heart-Disease-Prediction.git",
  previewUrl: "#",
},
  {
    id: 9,
    title: "LoanLens",
    description: "A loan EMI calculator with a real-time shared workspace, every open browser tab stays in sync instantly using the BroadcastChannel API, with amortization schedules, a what-if sensitivity grid, prepayment planning, and cross-tab undo/redo. No server, no polling.",
    image: "https://res.cloudinary.com/dqbhvzioe/image/upload/v1783053801/Untitled_design_2_x8ibmo.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/architaagr25/loanlens.git",
    previewUrl: "https://loanlens-ruddy.vercel.app/",
  },
  {
    id: 1,
    title: "AWS Route 53 clone",
    description:"A full-stack, responsive clone of the AWS Route 53 console built with Next.js and FastAPI, supporting complete hosted zone management, DNS record CRUD with type-specific validation, and BIND zone file import/export. ",
    image: "https://res.cloudinary.com/dqbhvzioe/image/upload/v1783058652/Untitled_design_oikkyh.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/architaagr25/AWS-Route53-Clone.git",
    previewUrl: " https://aws-route53-clone-rosy.vercel.app/",
  },
  {
    id: 2,
    title: "Marvel_Universe",
    description: "An interactive Marvel-themed website built using HTML, CSS, Tailwind, and ReactJS. The project is primarily React-based and features a dynamic Hero section, where videos change on-click, along with engaging animations in the subsequent sections.",
    image: "https://res.cloudinary.com/dqbhvzioe/image/upload/v1748473588/1_wjo4bn.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/architaagr25/Marvel_Universe.git",
    previewUrl: "https://architaagr25.github.io/Marvel_Universe/",
  },
  {
    id: 3,
    title: "Sippify",
    description: "A vibrant and engaging Smoothie Bar website built with ReactJS, Tailwind CSS, and Framer Motion. This project features sleek UI animations and a smooth user experience designed to offer an immersive way for users to explore and interact with the brand.",
    image: "https://res.cloudinary.com/dqbhvzioe/image/upload/v1748473595/2_kppnuk.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/architaagr25/Sippify.git",
    previewUrl: "https://architaagr25.github.io/Sippify/",
  },
  {
    id: 4,
    title: "TravelNest",
    description: "A fully responsive and modern travel website built with React.js, Next.js 13, and Tailwind CSS. It features a clean UI/UX design, reusable components, and mobile-friendly layout—perfect for showcasing travel destinations or building a production-ready frontend.",
    image: "https://res.cloudinary.com/dqbhvzioe/image/upload/v1748473602/3_k7xkq9.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/architaagr25/TravelNest.git",
    previewUrl: "https://architaagr25.github.io/TravelNest/",
  },
 
  {
    id: 8,
    title: " AppDost Clone",
    description: "A react based website using tailwind css for comprehensive IT solutions. From mobile apps to enterprise software, it brings innovation and excellence to every project with its expert team of developers.",
    image: "https://res.cloudinary.com/dqbhvzioe/image/upload/v1761485165/Untitled_design_wfzhlj.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/architaagr25/AppDost_clone.git",
    previewUrl: "https://appdostclone-git-main-archita-agrawals-projects.vercel.app/",
  },
  
];


const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 mt-25 mb-8  py-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
       {/*<ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
         */} 
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
