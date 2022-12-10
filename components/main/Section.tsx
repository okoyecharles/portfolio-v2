import React from 'react';

interface SectionProps {
  children?: React.ReactNode;
  label: string;
  id?: string;
}

function Section({ children, label, id }: SectionProps) {
  return (
    <section className={label} id={id ? id : label}>
      { children }
    </section>
  )
}

export default Section