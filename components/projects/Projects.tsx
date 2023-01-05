import React, { useRef } from "react";
import Section from "../main/Section";
import ProjectsGrid from "./ProjectsGrid";
import { a, useSpring } from "@react-spring/web";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

interface ProjectsRef {
  projectsRef: React.MutableRefObject<null>;
}

const Projects: React.FC<ProjectsRef> = ({ projectsRef }) => {
  const headerRef = useRef(null);
  const [springs, api] = useSpring(() => ({
    from: {
      opacity: 0,
    },
    config: {
      tension: 200,
      friction: 50,
    },
  }));

  useIntersectionObserver(headerRef, () => {
    api.start({
      opacity: 1
    })
  })

  return (
    <Section label="projects" sectionRef={projectsRef}>
      <a.header ref={headerRef} style={springs}>
        <h2>More Projects</h2>
      </a.header>
      <ProjectsGrid />
    </Section>
  );
};

export default Projects;
