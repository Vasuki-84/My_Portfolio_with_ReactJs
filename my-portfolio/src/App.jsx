import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications/>
    </div>
  );
}

export default App;
