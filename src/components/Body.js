import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Education from "./Education";
import Service from "./Service";
import Project from "./Project";
import Contact from "./Contact";
import Experience from "./Experience";
import Hero from "./Hero";

const Body = () => {
  return (
    <div className="app">
      <Hero />
      <Navbar />
      <About />
      <Experience />
      <Education />
      <Service />
      <Project />
      <Contact />
    </div>
  );
};

export default Body;
