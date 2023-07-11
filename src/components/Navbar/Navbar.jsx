import React, { useState } from "react";

import { CiMenuFries } from "react-icons/ci";

import Menu from "./Menu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [burger, setBurger] = useState(false);
  return (
    <nav className="sticky top-0 bg-[#222] px-2 z-50">
      <div className="container mx-auto h-[80px] flex justify-between items-center">
        <Logo />
        <Menu />
        <MobileMenu burger={burger} />
        <CiMenuFries
          className="text-2xl hover:text-[#03df83] text-white transition md:hidden"
          onClick={() => setBurger(!burger)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
