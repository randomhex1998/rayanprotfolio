import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import pr from "../assets/pr.jpeg";
import data from "../data";
import logoProject from "../assets/portfolio/logoProject.jpg";
import { Link } from "react-router-dom";

function Portfolio() {
  const [inp, setInp] = useState("");

  let searched = data.filter((item) =>
    item.Title.toLowerCase().includes(inp.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      {/* <div
        className="w-full h-[80vh]"
        style={{ backgroundImage: `url(${pr})`, backgroundSize: "cover" }}
      ></div> */}
      <div className="container mx-auto">
        <input
          type="text"
          className="px-2 border border-gray-300 outline-none w-full h-[45px] rounded-lg my-8"
          placeholder="Search in Projects"
          onChange={(e) => setInp(e.target.value)}
          value={inp}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {searched.map((item) => (
            <Link to={`/portfolio/${item.id}`} key={item.id}>
              <div className="relative overflow-hidden rounded-xl">
                <img src={item.Img} alt={item.Title} />
                <div className="absolute top-0 left-0 bottom-0 right-0 bg-[#000000b7] flex justify-center items-center">
                  <h2 className="text-white font-bold text-2xl">
                    {item.Title}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
