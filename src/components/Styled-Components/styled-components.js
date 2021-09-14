import styled from "styled-components";

const Style = styled.div`
  border-bottom: solid 10px ${(props) => props.theme.accent};
  border-top: solid 2px ${(props) => props.theme.secondary};
  border-left: solid 2px ${(props) => props.theme.secondary};
  border-right: solid 2px ${(props) => props.theme.secondary};
  border-radius: 15px;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
`;

export default Style;
