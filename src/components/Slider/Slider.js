import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Title } from "../Header/Header__left";
import "../../assets/css/main.css";
import { Data__slider } from "../Data/Data";
export default function Slider() {
  return (
    <div>
      <Title style={{ textAlign: "center" }}>
        What Our Client Are <span>Saying</span>{" "}
      </Title>
      <Carousel>
        {Data__slider.map((item) => (
          <div className="slider__content" key={item.id}>
            <img src={item.img} />
            <div className="slider__content-text">
              <p>{item.text}</p>
              <span>{item.author}</span>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
