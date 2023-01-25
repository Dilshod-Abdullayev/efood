import React, { useState } from "react";
import img from "../../assets/img/item_01.png";
import "../../assets/css/main.css";
import { Button } from "../Navbar/Login";
import { Data__items } from "../Data/Data";
import "../../assets/css/main.css";
import { useEffect } from "react";
export default function Item({ value }) {
  const [state, setState] = useState([]);
  // useEffect(() => {
  //   if ((value = "burger")) {
  //     setState(Data__items[0]);
  //     console.log("burger");
  //   } else if ((value = "menu")) {
  //     setState(Data__items[1]);
  //     console.log("menu");
  //   } else {
  //   }
  // }, []);
  return (
    <div className="category__item-boxs">
      {value.map((item) => (
        <div key={item.id} className="category__item-box">
          <img src={img} />
          <p>{item.title} With Salad</p>
          <h1>${item.price}</h1>
          <Button>Add to Cart</Button>
        </div>
      ))}
    </div>
  );
}
