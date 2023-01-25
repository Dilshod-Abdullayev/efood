import React from "react";
import "../../assets/css/main.css";
import { CiBurger } from "react-icons/ci";
import { FaPizzaSlice } from "react-icons/fa";
import { GiSandwich } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { BsFillMenuAppFill } from "react-icons/bs";
import { useReducer, useContext, createContext } from "react";
import Item from "./Item";
import { Data__items } from "../Data/Data";

const styleIcon = {
  fontSize: "40px",
  padding: "5px",
};

const initialState = { count: null };
export default function Items() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "burger":
        return { count: (state.count = Data__items.burger) };
      case "pizza":
        return { count: (state.count = Data__items.pizza) };
      case "sandwich":
        return { count: (state.count = Data__items.burger) };
      case "food":
        return { count: (state.count = Data__items.burger) };
      case "menu":
        return { count: (state.count = Data__items.menu) };
      default:
        return { count: (state.count = Data__items.pizza) };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div>
      <div className="category__items">
        <div
          onClick={() => dispatch({ type: "burger" })}
          className="category-item"
        >
          <CiBurger style={styleIcon} /> Burger
        </div>
        <div
          onClick={() => dispatch({ type: "pizza" })}
          className="category-item"
        >
          <FaPizzaSlice style={styleIcon} /> Pizza
        </div>
        <div
          onClick={() => dispatch({ type: "sandwich" })}
          className="category-item"
        >
          <GiSandwich style={styleIcon} /> sandwich
        </div>
        <div
          onClick={() => dispatch({ type: "food" })}
          className="category-item"
        >
          <IoFastFoodOutline style={styleIcon} /> Food
        </div>
        <div
          onClick={() => dispatch({ type: "menu" })}
          className="category-item"
        >
          <BsFillMenuAppFill style={styleIcon} /> Menu
        </div>
      </div>
      <Item value={state.count} />
    </div>
  );
}
