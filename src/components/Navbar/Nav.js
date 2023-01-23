import React from "react";
import Logo from "./Logo";
import Lists from "./Lists";
import Shop from "./Shop";
import Login from "./Login";
import '../../assets/css/nav.css'
const Nav = () => {
  return (
    <div className="navbar">
      <Logo />
      <Lists />
      <Shop />
      <Login />
    </div>
  );
};

export default Nav;
