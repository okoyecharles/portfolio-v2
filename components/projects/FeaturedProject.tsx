import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projectType } from "../../db/projects";
import { a, useSpring } from "@react-spring/web";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const FeaturedProject: React.FC<projectType> = (props) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef(null);

  const handleMouseMove = (event: any) => {
    const { currentTarget: target } = event;

    const rect = target.getBoundingClientRect(),
      x = event.clientX - rect.left,
      y = event.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  useEffect(() => {
    const rect = contentRef.current?.getBoundingClientRect();
    if (rect) {
      contentRef.current?.style.setProperty("--height", `${(rect.height / 1.05) * -1}px`);
    }
  }, []);

  const [spring, api] = useSpring(() => ({
    from: {
      y: 50,
      opacity: 0
    },
    config: {
      tension: 200,
      friction: 50,
    },
  }));

  useIntersectionObserver(containerRef, () => {
    api.start({
      y: 0,
      opacity: 1
    })
  }, "15%");

  return (
    <a.article className="featuredProject__container" ref={containerRef} style={spring}>
      <div className="featuredProject__content" ref={contentRef}>
        <h3>{props.title}</h3>
        <p onMouseMove={handleMouseMove} dangerouslySetInnerHTML={{__html: props.description}} />
        <ul className="featuredProject__techStack">
          {props.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="featuredProject__links">
          <a
            href={props.links.github}
            target="_blank"
            rel="noreferrer noopener"
            title={`${props.title}'s source code (github)`}
          >
            <FiGithub />
          </a>
          <a href={props.links.live} target="_blank" rel="noreferrer noopener" title={`${props.title}'s live link`}>
            <FiExternalLink />
          </a>
        </div>
      </div>
      <div className="featuredProject__image">
        <a href={props.links.live} target="_blank" rel="noreferrer noopener" tabIndex={-1}>
          <Image
            src={props.image}
            alt={`${props.title}'s image`}
            width={+props.imgDims.width}
            height={+props.imgDims.height}
          />
        </a>
      </div>
    </a.article>
  );
};

export default FeaturedProject;
