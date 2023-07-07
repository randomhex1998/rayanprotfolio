import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Do from "../components/What I Do/Do";
import Skills from "../components/Skills/Skills";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Do />
      <Skills/>
    </div>
  );
}

export default Home;
