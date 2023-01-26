import React from "react";
import styled from "styled-components";
import { Button } from "../Navbar/Login";
import '../../assets/css/main.css'
export const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 66px;
  line-height: 78px;
  text-transform: capitalize;
  color: #363853;
  span {
    color: coral;
  }
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-transform: capitalize;
  color: #363853;
`;

const Link = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  text-decoration-line: underline;
  color: #363853;
  margin-left: 30px;
`;

export default function Header__left() {
  return (
    <div className="header__left">
      <Title>
        super fast <span>Food delivery</span> service
      </Title>
      <Text>
        We provide super fast-delivery service. Let’s use our services right now
        and get discounts of up to 50%
      </Text>
      <div>
        <Button>Explore Food</Button>
        <Link href="">Download App</Link>
      </div>
    </div>
  );
}
