"use client";

import "../styles/globals.css";
import "../styles/header.scss";
import "../styles/main.scss";

import Header from "../old-components/Header";
import Hero from "./components/Hero";
import About from "../old-components/About";
import Education from "../old-components/Education";
import Skills from "../old-components/Skills";
import Footer from "../old-components/Footer";
import Portfolio from "../old-components/Portfolio";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      {/* <main>
        <About />
        <Education />
        <Skills />
        <Portfolio />
      </main>

      <Footer /> */}
    </>
  );
}
