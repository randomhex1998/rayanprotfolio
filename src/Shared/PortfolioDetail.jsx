import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";

//icons
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillLaptopFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function ProjectDetail() {
  const id = useParams();
  const dd = data[id.id - 1];
  const { Title, Img, Desc, Techs, Src, Demo } = dd;
  return (
    <div className="flex justify-center items-center w-full">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-20">
          <div className="md:col-span-2 overflow-hidden rounded-xl">
            <img src={Img} className="w-full h-auto" alt="" />
          </div>
          <div className="md:col-span-1 border  bg-white rounded-2xl p-5 shadow-inner w-full md:w-[70%]">
            <h2 className="font-bold">Description</h2>
            <div className="flex gap-3 items-center pt-4">
              <BsFillPersonFill /> Rayan
            </div>
            <div className="flex gap-3 items-center pt-4">
              <BsFillLaptopFill /> <a href="#">DEMO</a>
            </div>
            <div className="flex gap-3 items-center pt-4">
              <BsGithub /> <a href={`${Src}`}>Source Code</a>
            </div>
            <p className="pt-10">{Desc}</p>
            <div className="flex flex-wrap gap-3 pt-10">
              {Techs.map((item, index) => (
                <p
                  className="py-1 px-4 bg-black text-white rounded-xl"
                  key={index}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
