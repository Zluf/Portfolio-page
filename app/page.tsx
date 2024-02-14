"use client";

import "../styles/globals.css";
import "../styles/styles.scss";
import "../styles/header.scss";
import "../styles/main.scss";

import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Education />
        <Skills />
        <Portfolio />
      </main>

      <Footer />
    </>
  );
}
