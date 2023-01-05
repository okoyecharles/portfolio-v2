import React from "react";
import projects from "../../db/projects";
import ProjectCard from "./ProjectCard";

const ProjectsGrid = () => {

  return (
    <ul className="projects__grid">
      {projects.slice(4).map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </ul>
  );
};

export default ProjectsGrid;
