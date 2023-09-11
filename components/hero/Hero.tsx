import React, { useEffect } from "react";
import Section from "../main/Section";
import { useTrail, a, config } from "@react-spring/web";

interface heroProps {
  heroRef?: React.MutableRefObject<null>;
}

const Hero: React.FC<heroProps> = ({ heroRef }) => {
  const [springs, api] = useTrail(4, () => ({
    from: {
      y: 50,
      opacity: 0,
    },
    config: {
      tension: 235,
      friction: 28,
    },
  }));

  // Start hero animation after a second
  useEffect(() => {
    setTimeout(() => {
      api.start({
        y: 0,
        opacity: 1,
      });
    }, 1000);
  }, []);

  return (
    <Section label="hero" id="content" sectionRef={heroRef}>
      <a.h1 style={springs[0]}>Hi, my name is</a.h1>
      <a.h2 style={springs[0]}>Okoye Charles.</a.h2>
      <a.h3 style={springs[1]}>I embrace the digital world.</a.h3>
      <a.p style={springs[2]}>
        I can help you build a product, feature, or website. Look through my work and experience! If you are interested and need help on a project, I am available for hire.
      </a.p>
      <a.a href="#featured" style={springs[3]}>
        <button tabIndex={-1}>Check out my work!</button>
      </a.a>
    </Section>
  );
};

export default Hero;
