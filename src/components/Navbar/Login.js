import React from "react";
import styled from "styled-components";
export const Button = styled.button`
  height: 50px;
  color: whitesmoke;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  background: #ff7a50;
  box-shadow: 0px 22px 40px rgba(255, 104, 56, 0.19);
  border-radius: 5px;
  padding: 15px 25px;
  border: none;
`;
const Login = () => {
  return (
    <>
      <Button>Sign Up</Button>
    </>
  );
};

export default Login;
