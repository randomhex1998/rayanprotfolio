import React from "react";

//Link
import { Link } from "react-router-dom";

//logo
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </>
  );
};

export default Logo;
