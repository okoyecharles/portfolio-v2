import React, { useRef } from "react";
import Section from "../main/Section";
import projects from "../../db/projects";
import FeaturedProject from "./FeaturedProject";
import { a, useSpring } from "@react-spring/web";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

interface FeaturedProjectsProps {
  featuredRef: React.MutableRefObject<null>;
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ featuredRef }) => {
  const headerRef = useRef(null);
  const [spring, api] = useSpring(() => ({
    from: {
      opacity: 0,
    },
    config: {
      tension: 200,
      friction: 40,
    },
  }));

  useIntersectionObserver(headerRef, () => {
    api.start({
      opacity: 1
    })
  });

  return (
    <Section label="featured" sectionRef={featuredRef}>
      <a.header ref={headerRef} style={spring}>
        <h2>Featured Projects</h2>
      </a.header>
      <div className="featuredProjects">
        {projects.slice(0, 4).map((projectProp) => (
          <FeaturedProject key={projectProp.title} {...projectProp} />
        ))}
      </div>
    </Section>
  );
};

export default FeaturedProjects;
