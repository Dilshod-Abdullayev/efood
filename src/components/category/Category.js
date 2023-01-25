import React from "react";
import { Title } from "../Header/Header__left";
import Item from "./Item";
import Items from "./Items";
export default function Category() {
  return (
    <div>
      <Title style={{ textAlign: "center" }}>
        Our popular <span>Category</span>
      </Title>
      <Items />
    </div>
  );
}
