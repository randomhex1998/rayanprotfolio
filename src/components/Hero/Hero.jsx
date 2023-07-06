import React from "react";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

//images
import img from "../../assets/rayan.jpg";

function Hero() {
  return (
    <div className="bg-[#222]">
      <div className="container mx-auto grid grid-cols-2 items-center py-24">
        <div>
          <MouseParallaxContainer globalFactorX={0.5} globalFactorY={0.5}>
            <MouseParallaxChild factorX={0.3} factorY={0.5}>
              <div className="ab-img">
                <img src={img} alt="" />
              </div>
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
        <div>
          <h2 className="text-5xl text-white font-extrabold">Hello</h2>
          <h2 className="text-5xl text-white font-extrabold pt-5 pb-8">
            I'm Rayan
          </h2>
          <p className="text-white leading-8 font-extralight">
            When I was a teenager, I was very interested in programming and
            drawing. And today I have tried to integrate them in my work by
            working in the front field. I am interested in teamwork and this
            interest makes me help to achieve team goals and play an effective
            role
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
