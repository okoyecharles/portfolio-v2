import React, { useEffect, useState } from "react";
import Section from "../main/Section";
import Image from "next/image";
import { a, useTrail } from "@react-spring/web";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

interface AboutProps {
  aboutRef: React.MutableRefObject<null>;
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
      opacity: 1
    })
  })

  return (
    <Section label="about" sectionRef={aboutRef}>
      <a.header style={springs[0]}>
        <h2>About Me</h2>
      </a.header>
      <a.div className="about__container" style={springs[1]}>
        <article className="about__content">
          <p>
            Hello! My name is <b>Okoye Charles Kaosisochukwu</b> and I&apos;m a
            creative developer who loves to work on appealing websites with a
            passion for User Interfaces and Experience. I love spending my time
            coding, creating things for the web and learning new things.
          </p>

          <p>
            I&apos;m relatively new to the software development world and since May
            2022 I&apos;ve been building my technical, leadership, and collaborative
            skills at{" "}
            <a href="https://www.microverse.org/?grsf=wtedvt" target="_blank">
              Microverse
            </a>{" "}
            through collaborating and pair programming with other students from
            all over the world.
          </p>

          <p>
            My main aim is to create and deliver unique, high-end and innovative
            products for a variety of clients. If you are in need of an
            experienced Software Engineer, I am{" "}
            <a href="mailto:okoyecharles509@gmail.com?subject=Hire%20Okoye%20Charles!">
              available for hire.
            </a>
          </p>

          <p>Here are a few technologies I have been working with recently:</p>

          <ul className="about__techList">
            <li>Javascript (ES6+)</li>
            <li>Next.js 13</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Ruby</li>
            <li>Ruby on Rails</li>
          </ul>

          <span className="extra-info">
            HAVE A COOL WEBSITE OR APPLICATION IN MIND? I&apos;D LOVE TO{" "}
            <a href="#contact">HEAR ABOUT IT</a>
          </span>
        </article>
        <div className="about__image">
          <Image
            src="/OkoyeCharles.webp"
            width={2960}
            height={2960}
            alt="portrait"
          />
        </div>
      </a.div>
    </Section>
  );
};

export default About;
