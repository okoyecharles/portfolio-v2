import React, { useRef } from "react";
import Layout from "../components/main/Layout";
import SkipToContent from "../components/anchors/SkipToContent";
import Hero from "../components/hero/Hero";
import PageHead from "../components/hero/PageHead";
import useIntersectionObservers from "../hooks/useIntersectionObservers";
import About from "../components/about/About";
import FeaturedProjects from "../components/projects/FeaturedProjects";
import Projects from "../components/projects/Projects";
import Testimonials from "../components/testimonials/Testimonials";
import Contact from "../components/contact/Contact";

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
        <Contact contactRef={contactRef} />
      </Layout>
    </>
  );
};

export default Home;
