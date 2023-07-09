import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Do from "../components/What I Do/Do";
import Skills from "../components/Skills/Skills";
import Footer from "../components/Footer/Footer";
import Resume from "../components/Resume/Resume";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Do />
      <Skills/>
      <Resume/>
      <Footer/>
    </div>
  );
}

export default Home;
