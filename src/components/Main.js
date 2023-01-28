import React from "react";
import Category from "./category/Category";
import Download from "./Downloads/Download";
import Food from "./Food/Food";
import Services from "./services/Services";
import Slider from "./Slider/Slider";
const Main = () => {
  return (
    <>
      <Category />
      <Services />
      <Food />
      <Download />
      <Slider />
    </>
  );
};

export default Main;
