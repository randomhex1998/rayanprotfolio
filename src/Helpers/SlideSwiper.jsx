import React from "react";

function SlideSwiper({ color, children }) {
  return (
    <div
      className={`w-[300px] h-[300px] flex justify-center items-center rounded-xl border border-gray-200 `}
      style={{ backgroundColor: `${color}` }}
    >
      <h3 className="text-[5rem] text-white">{children}</h3>
    </div>
  );
}

export default SlideSwiper;
