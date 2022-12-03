import React from "react";
import projects from "../../db/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {

  return (
    <ul className="projects__grid">
      {projects.slice(3).map((project) => (
        <ProjectCard project={project} />
      ))}
    </ul>
  );
};

export default Projects;
