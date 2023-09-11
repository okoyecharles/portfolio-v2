import React, { useEffect, useState } from "react";
import Section from "../main/Section";
import Image from "next/image";
import { a, useTrail } from "@react-spring/web";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

interface AboutProps {
  aboutRef?: React.MutableRefObject<null>;
}

const About: React.FC<AboutProps> = ({ aboutRef }) => {
  const [springs, api] = useTrail(2, () => ({
    from: {
      y: 50,
      opacity: 0,
    },
    config: {
      tension: 200,
      friction: 28,
    },
  }));

  useIntersectionObserver(aboutRef, () => {
    api.start({
      y: 0,
      opacity: 1,
    });
  });

  return (
    <Section label="about" sectionRef={aboutRef}>
      <a.header style={springs[0]}>
        <h2>About Me</h2>
      </a.header>
      <a.div className="about__container" style={springs[1]}>
        <article className="about__content">
          <p>
            I am Okoye Charles, a frontend/backend developer based in Nigeria. I
            spend most of my time designing graphics, coding up things for the
            web, and learning algorithms.
          </p>

          <p>
            My goal is to deliver—through code—unique, and innovative solutions
            to complex problems.
          </p>

          <p>
            If my portfolio interests you, or you need an enthusiastic developer
            on your team, I am{" "}
            <a href="mailto:okoyecharles509@gmail.com">available for hire.</a>
          </p>

          <p>
            Here is an up-to-date list of my most recently used technologies:
          </p>

          <ul className="about__techList">
            <li>Javascript (ES6+)/TypeScript</li>
            <li>React</li>
            <li>Next.js 13</li>
            <li>Express.js (MongoDB)</li>
            <li>Firebase</li>
            <li>Ruby on Rails</li>
          </ul>

          <span className="extra-info">
            DO YOU HAVE A COOL WEBSITE OR APPLICATION IN MIND? <br />I WOULD LOVE TO{" "}
            <a href="#contact">HEAR ABOUT IT</a>
          </span>
        </article>
        <div className="about__image">
          <Image
            src="/OkoyeCharles.webp"
            width={500}
            height={500}
            alt="Headshot"
          />
        </div>
      </a.div>
    </Section>
  );
};

export default About;
