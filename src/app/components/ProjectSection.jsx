"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const PROJECT_TAGS = ["All", "Java", "React"];
const PROJECT_DATA = [
  {
    id: 1,
    title: "Speedy",
    desc: "A command line tool for downloading files from the internet built with Java.",
    image: `/images/projects/1.png`,
    tags: ["All", "Java"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Personal Wiki",
    desc: "A personal wiki for knowledge management built with Spring Boot and Vue.js. Users can create, edit and delete articles and organize them into categories.",
    image: `/images/projects/3.png`,
    tags: ["All", "Java"],
    gitUrl: "https://github.com/fredflys/springboot-vue-wiki",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "VanPlorer",
    desc: "An itinerary planner built with React Native, Express and PostgreSQL. It allows users to plan their trips and add places to their favorites.",
    image: `/images/projects/2.png`,
    tags: ["All", "React"],
    gitUrl: "https://github.com/fredflys/capstone-project-Group4",
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
    <div id="projects" className="text-white">
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
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
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
