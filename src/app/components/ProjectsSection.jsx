"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Marvel_Universe",
    description: "An interactive Marvel-themed website built using HTML, CSS, Tailwind, and ReactJS. The project is primarily React-based and features a dynamic Hero section, where videos change on-click, along with engaging animations in the subsequent sections.",
    image: "https://res.cloudinary.com/dqbhvzioe/image/upload/v1748473588/1_wjo4bn.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/architaagr25/Marvel_Universe.git",
    previewUrl: "https://architaagr25.github.io/Marvel_Universe/",
  },
  {
    id: 2,
    title: "Sippify",
    description: "A vibrant and engaging Smoothie Bar website built with ReactJS, Tailwind CSS, and Framer Motion. This project features sleek UI animations and a smooth user experience designed to offer an immersive way for users to explore and interact with the brand.",
    image: "https://res.cloudinary.com/dqbhvzioe/image/upload/v1748473595/2_kppnuk.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/architaagr25/Sippify.git",
    previewUrl: "https://architaagr25.github.io/Sippify/",
  },
  {
    id: 3,
    title: "TravelNest",
    description: "A fully responsive and modern travel website built with React.js, Next.js 13, and Tailwind CSS. It features a clean UI/UX design, reusable components, and mobile-friendly layout—perfect for showcasing travel destinations or building a production-ready frontend.",
    image: "https://res.cloudinary.com/dqbhvzioe/image/upload/v1748473602/3_k7xkq9.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/architaagr25/TravelNest.git",
    previewUrl: "https://architaagr25.github.io/TravelNest/",
  },
 
   {
    id: 4,
    title: "Weather-Anywhere",
    description: "This Weather app is a mini HTML, CSS and JavaScript project that allows to check the temperature of any city at any time.",
    image: "https://res.cloudinary.com/dqbhvzioe/image/upload/v1748473609/4_etakcg.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/architaagr25/Weather-Anywhere.git",
    previewUrl: "https://architaagr25.github.io/Weather-Anywhere/",
  },
  {
    id: 5,
    title: "Design-System",
    description: "Reusable component library with React, TypeScript, TailwindCSS and Storybook",
    image: "https://res.cloudinary.com/dqbhvzioe/image/upload/v1748473623/6_x9jodz.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/architaagr25/design-system.git",
    previewUrl: "https://6814bf75e7c5fedb15352d58-kpltqguaqc.chromatic.com/",
  },
{
    id: 6,
    title: " Solar-System",
    description: "A 3D solar system implemented using ThreeJs, HTML, CSS and JavaScript. It involves a speed control panel and provides functionality to zoom in and out as required.",
    image: "https://res.cloudinary.com/dqbhvzioe/image/upload/v1749730091/Untitled_design_kcutq2.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/architaagr25/Solar-system.git",
    previewUrl: "https://architaagr25.github.io/Solar-system/",
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