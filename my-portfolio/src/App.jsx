import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
    </div>
  );
}

export default App;
