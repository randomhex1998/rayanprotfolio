import React from "react";

let activeMobile = "fixed top-[80px] py-5 left-0 right-0 text-center flex flex-col gap-6 bg-[#222] transition-all opacity-100";
let dectiveMobile = "fixed top-[80px] py-5 left-0 right-0 text-center flex flex-col gap-6 bg-[#222] transition-all opacity-0";

const MobileMenu = ({burger}) => {
  return (
    <ul className={burger ? activeMobile : dectiveMobile}>
      <li>
        <a href="#" className="hover:text-[#03df83] text-white transition">
          Home
        </a>
      </li>
      <li>
        <a href="#" className="hover:text-[#03df83] text-white transition">
          Portfolio
        </a>
      </li>
      <li>
        <a href="#" className="hover:text-[#03df83] text-white transition">
          Resume
        </a>
      </li>
      <li>
        <a href="#" className="hover:text-[#03df83] text-white transition">
          Contact
        </a>
      </li>
    </ul>
  );
};

export default MobileMenu;
