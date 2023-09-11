import React, { useRef } from "react";
import Section from "../main/Section";
import TestimonialsSwiper from "./TestimonialsSwiper";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { a, useSpring } from "@react-spring/web";

interface TestimonialsProps {
  recomendationRef: React.MutableRefObject<null>;
}

const Testimonials: React.FC<TestimonialsProps> = ({ recomendationRef }) => {
  const headerRef = useRef(null);
  const [springs, api] = useSpring(() => ({
    from: {
      opacity: 0,
      y: 20,
    },
    config: {
      tension: 200,
      friction: 40,
    },
  }));

  useIntersectionObserver(headerRef, () => {
    api.start({
      opacity: 1,
      y: 0,
    });
  });

  return (
    <Section label="testimonials" sectionRef={recomendationRef}>
      <a.header ref={headerRef} style={springs}>
        <h2>Testimonials</h2>
      </a.header>
      <div className="testimonials__content">
        <a.p style={springs}>
          I work with developers from countries around the world. While
          collaborating, I focus on improving my technical and communicative
          skills through pair programming.
        </a.p>
        <a.p style={springs}>
          Here are some testimonials I have received from colleagues:
        </a.p>
      </div>
      <TestimonialsSwiper />
    </Section>
  );
};

export default Testimonials;
