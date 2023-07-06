import React from "react";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

//images
import img from "../../assets/rayan.jpg";

function Hero() {
  return (
    <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
      <MouseParallaxChild factorX={0.3} factorY={0.5}>
        <div className="ab-img">
          <img src={img} alt="" />
        </div>
      </MouseParallaxChild>
    </MouseParallaxContainer>
  );
}

export default Hero;
