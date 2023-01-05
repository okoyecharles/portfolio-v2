import React, { useRef } from 'react';

interface SectionProps {
  children?: React.ReactNode;
  label: string;
  id?: string;
  sectionRef?: React.MutableRefObject<null>;
}

function Section({ children, label, id, sectionRef }: SectionProps) {

  return (
    <section className={label} id={id ? id : label} ref={sectionRef}>
      { children }
    </section>
  )
}

export default Section