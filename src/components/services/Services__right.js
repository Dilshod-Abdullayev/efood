import React from "react";
import { Button } from "../Navbar/Login";
import "../../assets/css/main.css";
import img1 from "../../assets/img/Timer icon.png";
import img2 from "../../assets/img/Vector (6).png";
import img3 from "../../assets/img/Vector (7).png";
import { useState } from "react";
import More from "./More";

const ServicesRight = () => {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState((prev) => !prev);
  };
  console.log(state);
  return (
    <div className="services__right">
      <h1 className="menu__title">
        <span>Stay</span> at home, we will Provide <span>good food</span>
      </h1>
      <p className="menu__text">
        We provide tasty food and superfast delivery at your home. Let’s use our
        services right now and get discounts of up to 50%.
      </p>
      <div className="menu__item">
        <img src={img1} /> <p>fasted delivery in 30 Minutes</p>
      </div>
      <div className="menu__item">
        <img src={img2} /> <p>300+ delivery men</p>
      </div>
      <div className="menu__item">
        <img src={img3} /> <p>500+ restaurant & cafe shop</p>
      </div>
      <Button onClick={handleClick} style={{ marginTop: "25px" }}>
        See more
      </Button>
      
    </div>
  );
};

export default ServicesRight;
