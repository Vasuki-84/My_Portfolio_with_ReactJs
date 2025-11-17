import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
