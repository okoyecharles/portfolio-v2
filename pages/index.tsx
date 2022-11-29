import Head from "next/head";
import Image from "next/image";
import React from "react";
import FeaturedProject from "../components/FeaturedProject";
import Layout from "../components/Layout";
import Section from "../components/Section";
import projects from "../db/projects";

function Home() {
  return (
    <>
      <Head>
        <title>Okoye Charles - Home</title>
      </Head>
      <Layout>
        <Section label="hero">
          <h1>Hi, my name is</h1>
          <h2>Okoye Charles.</h2>
          <h3>I embrace the digital world.</h3>
          <p>
            I can help you build a product, feature or website Look through
            some of my work and experience! If you like what you see and need
            help on a project, I am available for hire.
          </p>
          <button>Check out my work!</button>
        </Section>
        <Section label="about">
          <header>
            <h2>About Me</h2>
          </header>
          <div className="about__container">
            <article className="about_content">
              <p>Hello! My name is Okoye Charles Kosisochukwu and I'm a creative developer who loves to work on appealing websites with a passion for User Interfaces and Experience. I love spending my time coding, creating things for the web and learning new things.</p>

              <p>I'm relatively new to the software development world and since May 2022 I've been building my technical, leadership, and collaborative skills at <a href="https://www.microverse.org/?grsf=wtedvt" rel="noreferrer noopener" target="_blank">microverse</a> through collaborating and pair-programming with other students in real time.</p>

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

              <span className="extra-info">HAVE A COOL PROJECT IN MIND? I'D LOVE TO <a href="#contact" >HEAR ABOUT IT</a></span>
            </article>
            <div className="about_image">
              <Image src='/OkoyeCharles.webp' width={2960} height={2960} alt='portrait'/>
            </div>
          </div>
        </Section>
        <Section label="projects">
          <header>
            <h2>Featured Projects</h2>
          </header>
          <div className="featuredProjects">
          {projects.slice(0, 3).map((projectProp) => (
            <FeaturedProject key={projectProp.title} {...projectProp} />
          ))}
          </div>
        </Section>
      </Layout>
    </>
  );
}

export default Home;
