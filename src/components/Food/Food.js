import React from "react";
import { Title } from "../Header/Header__left";
import "../../assets/css/main.css";
  import FoodBox from "./Food__box";
const Food = () => {
  return (
    <div className="section__food">
      <Title style={{ textAlign: "center" }}>
        Top Food <span>restaurant</span>
      </Title>
      <FoodBox/>
    </div>
  );
};

export default Food;
