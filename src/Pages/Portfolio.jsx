import React , {useState} from "react";
import Navbar from "../components/Navbar/Navbar";
import pr from "../assets/pr.jpeg";
function Portfolio() {
  const [inp , setInp ] = useState("");
  console.log(inp)
  return (
    <div>
      <Navbar />
      <div
        className="w-[100%] h-[80vh]"
        style={{ backgroundImage: `url(${pr})`, backgroundSize: "cover" }}
      ></div>
      <div className="container mx-auto">
          <input
            type="text"
            className="px-2 border border-gray-300 outline-none w-full h-[40px] rounded-lg my-8"
            placeholder="Search in Projects"
            onChange={e => setInp(e.target.value)}
            value={inp}
            />
      </div>
    </div>
  );
}

export default Portfolio;
