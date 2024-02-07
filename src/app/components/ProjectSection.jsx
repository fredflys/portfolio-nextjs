"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const PROJECT_TAGS = ["All", "Java", "React"];
const PROJECT_DATA = [
  {
    id: 2,
    title: "Personal Wiki",
    desc: "A personal wiki for knowledge management",
    image: `/images/projects/2.png`,
    tags: ["All", "Java"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "VanPlore",
    desc: "An itinerary planner",
    image: `/images/projects/3.png`,
    tags: ["All", "React"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const handleTagClick = (tag) => {
    setTag(tag);
  };
  const filteredProjects = PROJECT_DATA.filter((project) =>
    project.tags.includes(tag)
  );
  return (
    <div className="text-white">
      <h2 className="text-center font-bold text-4xl mt-4 mb-4 ">My Projects</h2>
      <div className="flex flex-row justify-center gap-2 py-6">
        {PROJECT_TAGS.map((item, index) => (
          <ProjectTag
            key={index}
            name={item}
            onClick={handleTagClick}
            isSelected={tag === item}
          />
        ))}
      </div>
      <div className="gird md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            desc={project.desc}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
