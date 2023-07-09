import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Resumebox from "../Shared/Resumebox";
import Footer from "../components/Footer/Footer";

function Resume() {
  return (
    <div>
      <Navbar />
      <div className="h-[85vh]">
        <Resumebox />
      </div>
      <Footer />
    </div>
  );
}

export default Resume;
