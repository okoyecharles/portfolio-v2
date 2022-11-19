import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { projectType } from "../db/projects";

const FeaturedProject: React.FC<projectType> = props => {
  return (
    <article className="featuredProject__container">
      <div className="featuredProject__content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <ul className="featuredProject__techStack">
          {props.stack.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <div className="featuredProject__links">
          <a href={props.links.github}>
            <FaGithub />
          </a>
          <a href={props.links.live}>
            <FiExternalLink />
          </a>
        </div>
      </div>
      <div className="featuredProject__image">
      <img
        src={props.image}
        alt={`${props.title}'s image`}
        width={+props.imgDims.width / 3}
        height={+props.imgDims.height / 3}
      />
      </div>
    </article>
  );
};

export default FeaturedProject;
