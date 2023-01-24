import React from "react";
import "../../assets/css/main.css";
import {CiBurger} from 'react-icons/ci'
import {FaPizzaSlice} from 'react-icons/fa'
import {GiSandwich} from 'react-icons/gi'
import {IoFastFoodOutline} from 'react-icons/io5'
import {BsFillMenuAppFill} from 'react-icons/bs'

const styleIcon={
  fontSize:'40px',
  padding: '5px'
}

export default function Items() { 
  return (
    <div className="category__items">
      <div className="category-item"> <CiBurger style={styleIcon}  /> Burger</div>
      <div className="category-item"> <FaPizzaSlice style={styleIcon} /> Pizza</div>
      <div className="category-item"> <GiSandwich style={styleIcon} /> sandwich</div>
      <div className="category-item"> <IoFastFoodOutline style={styleIcon} />  Food</div>
      <div className="category-item">  <BsFillMenuAppFill style={styleIcon} />  Menu</div>
    </div>
  );
}
