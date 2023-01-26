import React from "react";
import Category from "./category/Category";
import Download from "./Downloads/Download";
import Food from "./Food/Food";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Services from "./services/Services";
import Slider from "./Slider/Slider";
const Main = () => {
  return (
    <>
      <Header />
      <Category />
      <Services />
      <Food />
      <Download />
      <Slider />
      <Footer />
    </>
  );
};

export default Main;
