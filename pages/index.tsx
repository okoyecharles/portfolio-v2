import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";

function Home() {
  return (
    <>
      <Head>
        <title>Okoye Charles - Home</title>
      </Head>
      <Layout>
        <Section className="hero">
          <h1>Hi, my name is</h1>
          <h2>Okoye Charles.</h2>
          <h3>I embrace the digital world.</h3>
          <p>I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and need help on a project, I am available for hire.</p>
          <button>
            Check out my work!
          </button>
        </Section>
        <Section className="projects__preview">
          <header>
            <h2>Featured Projects</h2>
          </header>
        </Section>
      </Layout>
    </>
  );
}

export default Home;
