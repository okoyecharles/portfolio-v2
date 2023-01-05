import React, { useRef } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { AiOutlineFolder } from "react-icons/ai";
import { projectType } from "../../db/projects";
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiRubyonrails } from "react-icons/si";
import { a, useSpring } from "@react-spring/web";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const ProjectCard: React.FC<{ project: projectType }> = ({ project }) => {
  const handleMouseMove = (event: any) => {
    const { currentTarget: target } = event;

    const rect = target.getBoundingClientRect(),
      x = event.clientX - rect.left,
      y = event.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  const projectRef = useRef(null);
  const [spring, api] = useSpring(() => ({
    from: {
      y: 50,
      opacity: 0,
      scale: 0.99
    },
    config: {
      tension: 200,
      friction: 50,
    },
  }));

  useIntersectionObserver(projectRef, () => {
    api.start({
      y: 0,
      opacity: 1,
      scale: 1
    })
  }, "15%");

  return (
    <a.li className="projectCard" ref={projectRef} style={spring} >
      <div className="projectCard__container" onMouseMove={handleMouseMove}>
        <div className="projectCard__wrapper1">
          <header>
            {project.stack.includes("React") ? (
              <FaReact className="projectCard__icon react" />
            ) : project.stack.includes("Rails") ? (
              <SiRubyonrails className="projectCard__icon ror" />
            ) : project.stack.includes("JavaScript") ? (
              <SiJavascript className="projectCard__icon js" />
            ) : (
              <AiOutlineFolder className="projectCard__icon" />
            )}
            <div className="project__links">
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer noopener"
                title={`${project.title}'s source code (github)`}
              >
                <FiGithub />
              </a>
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer noopener"
                title={`${project.title}'s live link`}
              >
                <FiExternalLink />
              </a>
            </div>
          </header>
          <ul className="projectCard__techStack">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <a href={project.links.live} target="_blank" rel="noreferrer noopener" className="projectCard__wrapper2" tabIndex={-1} aria-hidden>
          <div className="projectCard__content">
            <h3>{project.title}</h3>
            <p>{project.note}</p>
          </div>
        </a>
      </div>
    </a.li>
  );
};

export default ProjectCard;
