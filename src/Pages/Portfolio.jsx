import React from "react";
import Navbar from "../components/Navbar/Navbar";
import pr from "../assets/pr.jpeg";
function Portfolio() {
  return (
    <div>
      <Navbar />
      <div
        className="w-[100%] h-[80vh]"
        style={{ backgroundImage: `url(${pr})`, backgroundSize: "cover" }}
      ></div>
    </div>
  );
}

export default Portfolio;
