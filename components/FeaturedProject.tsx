import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projectType } from "../db/projects";

const FeaturedProject: React.FC<projectType> = (props) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: any) => {
    const { target } = event;

    const rect = target.getBoundingClientRect(),
      x = event.clientX - rect.left,
      y = event.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  useEffect(() => {
    const rect = contentRef.current?.getBoundingClientRect();
    if (rect) {
      contentRef.current?.style.setProperty("--height", `${(rect.height / 1.1) * -1}px`);
    }
  }, []);

  return (
    <article className="featuredProject__container">
      <div className="featuredProject__content" ref={contentRef}>
        <h3>{props.title}</h3>
        <p onMouseMove={handleMouseMove}>{props.description}</p>
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
          >
            <FiGithub />
          </a>
          <a href={props.links.live} target="_blank" rel="noreferrer noopener">
            <FiExternalLink />
          </a>
        </div>
      </div>
      <div className="featuredProject__image">
        <a href={props.links.live} target="_blank" rel="noreferrer noopener">
          <Image
            src={props.image}
            alt={`${props.title}'s image`}
            width={+props.imgDims.width / 3}
            height={+props.imgDims.height / 3}
          />
        </a>
      </div>
    </article>
  );
};

export default FeaturedProject;
