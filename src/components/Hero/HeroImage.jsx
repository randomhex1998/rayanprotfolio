import React from "react";

//images
import img from "../../assets/rayan.jpg";

const HeroImage = () => {
  return (
    <div>
      <div className="ab-img flex justify-center md:justify-start mb-10 md:mb-10">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default HeroImage;
