import React from "react";
import img from '../../assets/img/item_01.png'
import '../../assets/css/main.css'
export default function Item() {
  return (
    <div className="category__item-box">
      <img src={img} />
      <p>Cheeseburger With Salad</p>
      <h1>$18.00</h1>
      <button>Add to Cart</button>
    </div>
  );
}
