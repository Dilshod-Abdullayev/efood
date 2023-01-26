import React from "react";
import { AiOutlineClockCircle, AiOutlineArrowRight } from "react-icons/ai";
import "../../assets/css/main.css";
import { Data__food } from "../Data/Data";

const FoodBox = () => {
    console.log(Data__food);
  return (
    <div className="food__boxs">
      {Data__food.map((item) => (
        <div className="food__box" key={item.id}>
          <img src={item.img} />
          <h1>{item.title}</h1>
          <div>
            <span>
              <AiOutlineClockCircle />
              {item.hour}
            </span>
            <button>
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodBox;
