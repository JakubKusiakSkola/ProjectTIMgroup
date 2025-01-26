import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => (props.theme === "light" ? "#fff" : "#333")};
    color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
    transition: all 0.3s ease;
  }
`;