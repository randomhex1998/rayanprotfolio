import React from "react";

//helper function
import Titles from "../../Helpers/functions";

//icons
import { AiOutlineCode } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiOutlineDesktop } from "react-icons/ai";
import { SiGooglemarketingplatform } from "react-icons/si";

function Do() {
  return (
    <div>
      <div className="container mx-auto flex flex-col justify-center items-center">
        <Titles>What I Do</Titles>
        <div className="grid grid-cols-1 justify-center gap-20 md:grid-cols-2 md:gap-5 mt-16">
          <div className="w-[80%]">
            <h3 className="text-4xl">{<AiOutlineCode />}</h3>
            <p>Clean coder and follow standard coding principles</p>
          </div>
          <div className="w-[80%]">
            <h3 className="text-4xl">{<AiOutlineCodepen />}</h3>
            <p>
              Implementation of various projects in different fields and
              subjects
            </p>
          </div>
          <div className="w-[80%]">
            <h3 className="text-4xl">
              <AiOutlineDesktop />
            </h3>
            <p>Responsive website design using media query and frameworks</p>
          </div>
          <div className="w-[80%]">
            <h3 className="text-4xl">
              <SiGooglemarketingplatform />
            </h3>
            <p>Using the latest and latest technologies of website design</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Do;
