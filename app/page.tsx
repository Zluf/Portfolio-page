"use client";

import "../styles/globals.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <>
      <Header />
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
