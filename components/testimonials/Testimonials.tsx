import React, { useRef } from 'react'
import Section from '../main/Section';
import TestimonialsSwiper from './TestimonialsSwiper';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { a, useSpring } from '@react-spring/web';

interface TestimonialsProps {
  recomendationRef: React.MutableRefObject<null>;
}

const Testimonials: React.FC<TestimonialsProps> = ({ recomendationRef }) => {
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
    <Section label="testimonials" sectionRef={recomendationRef}>
          <a.header ref={headerRef} style={springs}>
            <h2>Testimonials</h2>
          </a.header>
          <a.p style={springs}>
            I work with people from places all over the world through{" "}
            <b>remote pair-programming</b>... on amazing, high-end applications
            and websites. Continuosly improving my communicative,
            organizational, and collaborative skills.
          </a.p>
          <a.p style={springs}>
            Here are a couple commendations I&apos;ve recieved from previous
            co-workers:
          </a.p>
          <TestimonialsSwiper />
        </Section>
  )
}

export default Testimonials