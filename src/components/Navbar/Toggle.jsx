import React from "react";
import styled from "styled-components";
import { AiFillBulb } from "react-icons/ai";

const Button = styled.button`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  border-radius: 15%;
  width: 50px;
  height: 50px;
  border: none;
  padding: 5px 5px;
  text-decoration: none;
  transition: 1000ms background-color ease;
  &:hover {
    border: 2px solid ${(props) => props.theme.color};
  }
`;

const Toggle = (props) => {
  return (
    <Button onClick={props.themeToggler}>
      <AiFillBulb style={{ width: "30px", height: "40px" }} />
    </Button>
  );
};

export default Toggle;
