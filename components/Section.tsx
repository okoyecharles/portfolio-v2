import React from 'react';

interface SectionProps {
  children?: React.ReactNode;
  className: string;
}

function Section({ children, className }: SectionProps) {
  return (
    <section className={className}>
      { children }
    </section>
  )
}

export default Section