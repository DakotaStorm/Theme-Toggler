import React from "react";
import styled from "styled-components";
import Toggle from "./Toggle";
import Colors from "./Colors";
import Profile from "./Profile";

const Nav = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
`;

const Ul = styled.ul`
  display: inline-flex;
  align-items: center;
  list-style: none;
`;

const Li = styled.li`
  padding: 0px 20px;
  text-decoration: none;
`;

const Navbar = (props) => {
  return (
    <Nav>
      <div>Logo</div>
      <Ul>
        <Li>
          <Toggle {...props} />
        </Li>
        <Li>
          <Colors {...props} />
        </Li>
        <Li>
          <Profile />
        </Li>
      </Ul>
    </Nav>
  );
};

export default Navbar;
