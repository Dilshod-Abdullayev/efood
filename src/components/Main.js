import React from "react";
import Category from "./category/Category";
import Food from "./Food/Food";
import Header from "./Header/Header";
import Services from "./services/Services";

const Main = () => {
  return (
    <>
      <Header />
      <Category />
      <Services />
      <Food />
    </>
  );
};

export default Main;
