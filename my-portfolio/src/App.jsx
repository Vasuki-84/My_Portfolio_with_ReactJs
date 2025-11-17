import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
