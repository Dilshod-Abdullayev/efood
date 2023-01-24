import React from "react";
import Nav from "../Navbar/Nav";
import Header__left from "./Header__left";
import Header__right from "./Header__right";
import "../../assets/css/main.css";

export default function Header() {
  return (
    <div className="header">
      <Nav />
      <div className="wrapper">
        <Header__left />
        <Header__right />
      </div>
    </div>    
  );
}
