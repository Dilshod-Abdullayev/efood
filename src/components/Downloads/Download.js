import React from "react";
import { Text, Title } from "../Header/Header__left";
import img1 from "../../assets/img/Store=App Store, Style=Black.png";
import img2 from "../../assets/img/Store=Google Play, Style=Black.png";
import img3 from "../../assets/img/Group 178.png";
import "../../assets/css/main.css";
const Download = () => {
  return (
    <div className="downloads">
      <div className="downloads__left">
        <Title style={{ fontSize: "40px" }}>
          Download Our <span>Mobile App</span>
        </Title>
        <Text>
          It's all at your fingertips -- the restaurants you love. Find the
          right food to suit your mood, and make the first bite last. Go ahead,
          download app and get 50% discount
        </Text>
        <div>
          <img src={img1} />
          <img src={img2} />
        </div>
      </div>
      <div className="downloads__right">
        <img src={img3} />
      </div>
    </div>
  );
};

export default Download;
