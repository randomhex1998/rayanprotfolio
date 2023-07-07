import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <ul className="hidden gap-8 md:flex">
      <li>
        <NavLink to="/" className="hover:text-[#03df83] text-white transition">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/portfolio"
          className="hover:text-[#03df83] text-white transition"
        >
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink to="/resume" className="hover:text-[#03df83] text-white transition">
          Resume
        </NavLink>
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
