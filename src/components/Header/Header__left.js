import React from "react";
import { Button } from "../Navbar/Login";
export default function Header__left() {
  return (
    <div>
      <h1>super fast Food delivery service</h1>
      <p>
        We provide super fast-delivery service. Let’s use our services right now
        and get discounts of up to 50%
      </p>
      <div>
        <Button>Explore Food</Button>
        <a href="">Download App</a>
      </div>
    </div>
  );
}
