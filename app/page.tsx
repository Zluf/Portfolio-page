"use client";

import "../styles/globals.css";
import "../styles/header.scss";
import "../styles/main.scss";

import Header from "./components/Header";
import About from "../old-components/About";
import Education from "../old-components/Education";
import Skills from "../old-components/Skills";
import Footer from "../old-components/Footer";
import Portfolio from "../old-components/Portfolio";
import Head from "next/head";
import Title from "./components/Title";
import Icons from "./components/Icons";

export default function Home() {
  return (
    <section className="wrapper">
      <Title />
      {/* <Test /> */}
      {/* <Hero /> */}
      {/* <main>
        <About />
        <Education />
        <Skills />
        <Portfolio />
      </main>

      <Footer /> */}
    </section>
  );
}
