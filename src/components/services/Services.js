import React from "react";
import { createContext } from "react";
import { useState } from "react";
import ServicesLeft from "./Services__left";
import ServicesRight from "./Services__right";
import More from "./More";
export const ThemeConext = createContext(null);
export default function Services() {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState((prev) => !prev);
    console.log("hello");
  };
  return (
    <div>
      <div className="services">
        <ServicesLeft />
        <ThemeConext.Provider value={handleClick}>
          <ServicesRight />
        </ThemeConext.Provider>
      </div>
      <div>{state ? <More /> : ""}</div>
    </div>
  );
}
