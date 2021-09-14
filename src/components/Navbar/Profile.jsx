import React from "react";
import styled from "styled-components";
import { BsFillPersonFill } from "react-icons/bs";

const Button = styled.button`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  border-radius: 15%;
  width: 50px;
  height: 50px;
  border: none;
  padding: 5px 5px;
  text-decoration: none;
  &:hover {
    background-color: gray;
    border: 2px solid ${(props) => props.theme.color};
  }
`;

const Profile = () => {
  return (
    <Button>
      <BsFillPersonFill style={{ width: "30px", height: "40px" }} />
    </Button>
  );
};

export default Profile;
