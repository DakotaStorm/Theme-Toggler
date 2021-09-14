import React, { useState } from "react";
import styled from "styled-components";
import { SketchPicker } from "react-color";
import Tippy from "@tippyjs/react";

//Themes

//Styled Components
const ColorToggle = styled.div`
  display: flex;
  border: 3px solid ${(props) => props.theme.color};
  height: 50px;
  width: 100px;
  border-radius: 10%;
  align-items: center;
`;

const Primary = styled.button`
  box-shadow: none;
  border: none;
  width: 99%;
  height: 99%;
  background-color: ${(props) => props.theme.primary};
  transition: 1000ms background-color ease;
  &:hover {
    border: 1px solid ${(props) => props.theme.color};
  }
`;

const Secondary = styled.button`
  box-shadow: none;
  border: none;
  width: 99%;
  height: 99%;
  background-color: ${(props) => props.theme.secondary};
  transition: 1000ms background-color ease;
  &:hover {
    border: 1px solid ${(props) => props.theme.color};
  }
`;
const Accent = styled.button`
  box-shadow: none;
  border: none;
  width: 99%;
  height: 99%;
  background-color: ${(props) => props.theme.accent};
  transition: 1000ms background-color ease;
  &:hover {
    border: 1px solid ${(props) => props.theme.color};
  }
`;

//Components

const First = (props) => {
  const [selectedColor, setSelectedColor] = useState("#fff");

  const handleChange = (color) => {
    props.props.primaryToggle(color);
    setSelectedColor(color.hex);
  };

  return (
    <Tippy
      duration={0}
      interactive={true}
      placement={"bottom"}
      content={
        <SketchPicker
          disableAlpha={true}
          color={selectedColor}
          onChangeComplete={handleChange}
        />
      }
    >
      <Primary />
    </Tippy>
  );
};

const Second = (props) => {
  const [selectedColor, setSelectedColor] = useState("#fff");

  const handleChange = (color) => {
    setSelectedColor(color.hex);
    props.props.secondaryToggle(color);
  };

  return (
    <Tippy
      duration={0}
      interactive={true}
      placement={"bottom"}
      content={
        <SketchPicker
          disableAlpha={true}
          color={selectedColor}
          onChangeComplete={handleChange}
        />
      }
    >
      <Secondary />
    </Tippy>
  );
};

const Third = (props) => {
  const [selectedColor, setSelectedColor] = useState("#fff");

  const handleChange = (color) => {
    props.props.accentToggle(color);
    setSelectedColor(color.hex);
  };

  return (
    <Tippy
      duration={0}
      interactive={true}
      placement={"bottom"}
      content={
        <SketchPicker
          disableAlpha={true}
          color={selectedColor}
          onChangeComplete={handleChange}
        />
      }
    >
      <Accent />
    </Tippy>
  );
};

const Colors = (props) => {
  return (
    <ColorToggle>
      <First {...props} />
      <Second {...props} />
      <Third {...props} />
    </ColorToggle>
  );
};

export default Colors;
