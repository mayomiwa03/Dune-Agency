import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { NavContainer } from "./styles";

const Navbar = () => {
  return (
    <NavContainer>
      <div className="navItems">
        <a href="">home</a>
        <a href="">about us</a>
        <a href="">services</a>
        <a href="">contact us</a>
      </div>

      <h1>Dune Agency</h1>

      <div className="navIcons">
        <span>
          <FaFacebookF />
        </span>
        <span>
          <FaLinkedinIn />
        </span>
        <span>
          <FaInstagram />
        </span>
      </div>
    </NavContainer>
  );
};

export default Navbar;
