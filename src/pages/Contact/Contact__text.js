import React from "react";
import { Title } from "../../components/Header/Header__left";
import { Text } from "../../components/Header/Header__left";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Button } from "../../components/Navbar/Login";
import "../../assets/css/main.css";

const ContactText = () => {
  return (
    <div className="contact__text">
      <div>
        <Title style={{ fontSize: "30px" }}>
          Request a free cleaning <span>quote today</span>
        </Title>
        <Text>
          In dignissim euismod pretium amet enim a eu nam ut urna accumsan
          pellentesque lacus duis pharetra eutortor.
        </Text>
        <a href="tel:+998888596969">
          <BsFillTelephoneFill />
          (414) 567 - 2109
        </a>
      </div>
      <hr />
      <div>
        <Title style={{ fontSize: "30px" }}>
          <span>Not convinced yet?</span>
        </Title>
        <Text>
          Massa bibendum consectetur maurisid gravida purus, dolor dui amet
          morbi non nunc urna purus diam.
        </Text>
      </div>
      <Button>Browse our packages</Button>
    </div>
  );
};

export default ContactText;
