import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { lightTheme, darkTheme } from "./components/Styled-Components/themes";
//import Calendar from "./components/Calendar/Calendar";
//import Chat from "./components/Chat/Chat";
//import Classes from "./components/Classes/Classes";
//import Courses from "./components/Courses/Courses";
//import Grading from "./components/Grading/Grading";
//import Video from "./components/Video/Video";
import Navbar from "./components/Navbar/Navbar";
import Test from "./components/Test/Test";

/*const Style = styled.div`
  border-bottom: solid 10px ${(props) => props.theme.accent};
  border-top: solid 2px ${(props) => props.theme.secondary};
  border-left: solid 2px ${(props) => props.theme.secondary};
  border-right: solid 2px ${(props) => props.theme.secondary};
  border-radius: 15px;
  height: 100%;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
`;
*/

const Nav = styled.div`
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.background};
`;

const Div = styled.div`
  background-color: ${(props) => props.theme.background};
`;

const App = () => {
  const [theme, setTheme] = useState("light");
  const [update, setUpdate] = useState(false);

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const primaryToggle = (color) => {
    if (theme === "light") {
      lightTheme.primary = color.hex;
    } else if (theme === "dark") {
      darkTheme.primary = color.hex;
    }
    setUpdate(!update);
  };

  const secondaryToggle = (color) => {
    if (theme === "light") {
      lightTheme.secondary = color.hex;
    } else if (theme === "dark") {
      darkTheme.secondary = color.hex;
    }
    setUpdate(!update);
  };

  const accentToggle = (color) => {
    if (theme === "light") {
      lightTheme.accent = color.hex;
    } else if (theme === "dark") {
      darkTheme.accent = color.hex;
    }
    setUpdate(!update);
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Div className="app">
        <Nav>
          <Navbar
            themeToggler={themeToggler}
            props={{ primaryToggle, secondaryToggle, accentToggle }}
          />
        </Nav>
        <div className="main">
          <Test />
          <Test />
          <Test />
          <Test />
          <Test />
          <Test />
        </div>
      </Div>
    </ThemeProvider>
  );
};

export default App;
