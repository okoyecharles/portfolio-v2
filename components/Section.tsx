import React from 'react';

interface SectionProps {
  children?: React.ReactNode;
  label: string;
}

function Section({ children, label }: SectionProps) {
  return (
    <section className={label} id={label}>
      { children }
    </section>
  )
}

export default Section