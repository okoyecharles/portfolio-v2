import React, { useRef } from "react";
import Section from "../main/Section";
import ContactForm from "./ContactForm";
import { a, useSpring } from "@react-spring/web";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

interface ContactProps {
  contactRef: React.MutableRefObject<null>;
}

const Contact: React.FC<ContactProps> = ({ contactRef }) => {
  const headerRef = useRef(null);
  const [springs, api] = useSpring(() => ({
    from: {
      opacity: 0,
      y: 20
    },
    config: {
      tension: 200,
      friction: 40,
    },
  }));

  useIntersectionObserver(headerRef, () => {
    api.start({
      opacity: 1,
      y: 0
    })
  })

  return (
    <Section label="contact" sectionRef={contactRef}>
      <a.header ref={headerRef} style={springs}>
        <h2>Contact Me</h2>
      </a.header>
      <a.p style={springs}>
        If you have an application you are interested in <b>developing</b>, a
        feature that you need built or a project that needs <b>coding</b>. I&apos;d
        love to help with it.
      </a.p>
      <ContactForm />
    </Section>
  );
};

export default Contact;
