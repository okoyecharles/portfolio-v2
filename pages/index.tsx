import Head from "next/head";
import Image from "next/image";
import React, { useRef, useState } from "react";
import FeaturedProject from "../components/projects/FeaturedProject";
import Layout from "../components/main/Layout";
import Section from "../components/main/Section";
import projects from "../db/projects";
import Projects from "../components/projects/Projects";
import ContactForm from "../components/contact/ContactForm";
import SkipToContent from "../components/anchors/SkipToContent";


function Home() {
  return (
    <>
      <Head>
        <title>Okoye Charles - Home</title>
      </Head>
      <SkipToContent />
      <Layout>
        <Section label="hero" id="content">
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
        <Section label="about">
          <header>
            <h2>About Me</h2>
          </header>
          <div className="about__container">
            <article className="about__content">
              <p>Hello! My name is <b>Okoye Charles Kaosisochukwu</b> and I'm a creative developer who loves to work on appealing websites with a passion for User Interfaces and Experience. I love spending my time coding, creating things for the web and learning new things.</p>

              <p>I'm relatively new to the software development world and since May 2022 I've been building my technical, leadership, and collaborative skills at <a href="https://www.microverse.org/?grsf=wtedvt" target="_blank">microverse</a> through collaborating and pair programming with other students from all over the world.</p>

              <p>My main aim is to create and deliver unique, high-end and innovative products for a variety of clients. If you are in need of an experienced Software Engineer, I am <a href="mailto:okoyecharles509@gmail.com?subject=Hire%20Okoye%20Charles!">available for hire.</a></p>

              <p>Here are a few technologies I have been working with recently:</p>

              <ul className="about__techList">
                <li>Javascript (ES6+)</li>
                <li>Next.js 13</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Ruby</li>
                <li>Ruby on Rails</li>
              </ul>

              <span className="extra-info">HAVE A COOL WEBSITE OR APPLICATION IN MIND? I'D LOVE TO <a href="#contact" >HEAR ABOUT IT</a></span>
            </article>
            <div className="about__image">
              <Image src='/OkoyeCharles.webp' width={2960} height={2960} alt='portrait'/>
            </div>
          </div>
        </Section>
        <Section label="featured">
          <header>
            <h2>Featured Projects</h2>
          </header>
          <div className="featuredProjects">
          {projects.slice(0, 3).map((projectProp) => (
            <FeaturedProject key={projectProp.title} {...projectProp} />
          ))}
          </div>
        </Section>
        <Section label="projects">
          <header>
            <h2>Other Projects</h2>
          </header>
          <Projects />
        </Section>
        <Section label="contact">
            <header>
              <h2>Contact Me</h2>
            </header>
            <p>If you have an application you are interested in <b>developing</b>, a feature that you need built or a project that needs <b>coding</b>. I'd love to help with it.</p>
            <ContactForm />
        </Section>
      </Layout>
    </>
  );
}

export default Home;
