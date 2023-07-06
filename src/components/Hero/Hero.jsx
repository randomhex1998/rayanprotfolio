import React from "react";

///tools
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import Wave from "react-wavify";



//components
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <>
      <div className="bg-[#222] relative">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 pt-20 pb-56">
          <HeroImage />
          <HeroContent />
        </div>
        <Wave
          className="absolute bottom-0"
          fill="#fff"
          paused={false}
          options={{
            height: 0,
            amplitude: 40,
            speed: 0.15,
            points: 5,
          }}
        />
      </div>
    </>
  );
}

export default Hero;
