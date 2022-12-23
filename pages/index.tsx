import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import FeaturedProject from "../components/projects/FeaturedProject";
import Layout from "../components/main/Layout";
import Section from "../components/main/Section";
import projects from "../db/projects";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import ContactForm from "../components/contact/ContactForm";
import SkipToContent from "../components/anchors/SkipToContent";
import TestimonialsSwiper from "../components/testimonials/TestimonialsSwiper";
import Hero from "../components/hero/Hero";
import PageHead from "../components/hero/PageHead";
import useIntersectionObservers from "../hooks/useIntersectionObservers";
import About from "../components/about/About";
import FeaturedProjects from "../components/projects/FeaturedProjects";
import Projects from "../components/projects/Projects";
import Testimonials from "../components/testimonials/Testimonials";

const Home = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const featuredRef = useRef(null);
  const projectsRef = useRef(null);
  const recomendationRef = useRef(null);
  const contactRef = useRef(null);

  useIntersectionObservers([
    heroRef,
    aboutRef,
    featuredRef,
    projectsRef,
    recomendationRef,
    contactRef,
  ]);

  return (
    <>
      <PageHead />
      <SkipToContent />
      <Layout>
        <Hero heroRef={heroRef} />
        <About aboutRef={aboutRef} />
        <FeaturedProjects featuredRef={featuredRef} />
        <Projects projectsRef={projectsRef} />
        <Testimonials recomendationRef={recomendationRef} />
        <Section label="contact" sectionRef={contactRef}>
          <header>
            <h2>Contact Me</h2>
          </header>
          <p>
            If you have an application you are interested in <b>developing</b>,
            a feature that you need built or a project that needs <b>coding</b>.
            I'd love to help with it.
          </p>
          <ContactForm />
        </Section>
      </Layout>
    </>
  );
};

export default Home;
