import React from "react";
import { Link, NavLink } from "react-router-dom";

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
        <NavLink
          to="/contact"
          className="hover:text-[#03df83] text-white transition"
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default Menu;
