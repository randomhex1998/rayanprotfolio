import React from "react";
import Title from "../../Helpers/functions";
import ResumeItem from "./ResumeItem";

//icons
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { TbBrandJavascript } from "react-icons/tb";
import { RiBootstrapFill } from "react-icons/ri";

function Resume() {
  return (
    <div className="mb-5">
      <Title>Certificates</Title>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-x-32 gap-y-7 py-12 ">
          <ResumeItem title="HTML" inst="SoloLearn">
            <AiFillHtml5 />
          </ResumeItem>
          <ResumeItem title="Css" inst="SoloLearn">
            <BiLogoCss3 />
          </ResumeItem>
          <ResumeItem title="JavaScript Intermediate" inst="SoloLearn">
            <TbBrandJavascript />
          </ResumeItem>
          <ResumeItem title="HTML" inst="SoloLearn">
            <RiBootstrapFill />
          </ResumeItem>
        </div>
      </div>
    </div>
  );
}

export default Resume;
