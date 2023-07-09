import React from "react";


const ResumeItem = ({ title, children, inst }) => {
  return (
    <div className=" h-[100px] bg-gray-100 flex items-center rounded-lg shadow-md">
      <div className="w-[10vh] flex justify-center items-center text-7xl">
        {children}
      </div>
      <div className="p-4">
        <h2 className="font-bold text-xl">{title} </h2>
        <p className="text-sm">
          From: <span>{inst}</span>
        </p>
      </div>
    </div>
  );
};

export default ResumeItem;
