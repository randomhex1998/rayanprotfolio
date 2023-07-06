import React from "react";

const Menu = () => {
  return (
    <ul className="hidden gap-8 md:flex">
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

export default Menu;
