import React, { useRef } from 'react'
import Section from '../main/Section'

interface heroProps {
  heroRef: React.MutableRefObject<null>
}

useRef
const Hero: React.FC<heroProps> = ({ heroRef }) => {
  return (
    <Section label="hero" id="content" sectionRef={heroRef}>
          <h1>Hi, my name is</h1>
          <h2>Okoye Charles.</h2>
          <h3>I embrace the digital world.</h3>
          <p>
            I can help you build a product, feature, or website Look through
            some of my work and experience! If you like what you see and need
            help on a project, I am available for hire.
          </p>
          <a href="#featured">
            <button tabIndex={-1}>Check out my work!</button>
          </a>
        </Section>
  )
}

export default Hero