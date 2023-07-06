import React from "react";

//icon
import Lottie from "lottie-react";
import anm from "../../assets/118972-scroll-button.json";

const HeroContent = () => {
  return (
    <div>
      <h2 className="text-5xl text-white font-extrabold">Hello</h2>
      <h2 className="text-5xl text-white font-extrabold pt-5 pb-8">
        I'm Rayan
      </h2>
      <p className="text-white leading-8 font-extralight">
        When I was a teenager, I was very interested in programming and drawing.
        And today I have tried to integrate them in my work by working in the
        front field. I am interested in teamwork and this interest makes me help
        to achieve team goals and play an effective role
      </p>
      <Lottie
        className="w-[150px] mt-10 bg-transparent"
        animationData={anm}
        loop={true}
      />
    </div>
  );
};

export default HeroContent;
