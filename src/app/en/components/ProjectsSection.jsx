"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Prueba 1 (debería ir el proyecto aquí)",
    description: "Prueba 1 (debería ir el proyecto aquí)",
    image: "/images/projects/tfg.png",
    tag: ["All", "Retail"],
    gitUrl: "",
    previewUrl: "",
    isResearch: true,
  },
  {
    id: 2,
    title: "Prueba 2 (debería ir el proyecto aquí)",
    description: "Prueba 2 (debería ir el proyecto aquí)",
    image: "/images/projects/buche.png",
    tag: ["All", "Healthcare"],
    gitUrl: "",
    previewUrl: "",
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
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="bg-[#0C0E12] text-white py-16 px-4 md:px-8">
      <h2 className="text-center text-4xl font-bold mb-8 md:mb-12">Mis proyectos</h2>
      <div className="flex justify-center gap-2 mb-6">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Retail" isSelected={tag === "Retail"} />
        <ProjectTag onClick={handleTagChange} name="Healthcare" isSelected={tag === "Healthcare"} />
      </div>
      <ul ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            className="flex justify-center"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              isResearch={project.isResearch}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
