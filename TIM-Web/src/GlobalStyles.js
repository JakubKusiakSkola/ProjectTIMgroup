import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
      background: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text};
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      transition: all 0.3s linear;
  }
  a {
      text-decoration: none;
      color: ${({ theme }) => theme.primaryColor};
  }
  h1, h2, h3 {
      margin: 0;
  }
  button {
      cursor: pointer;
      padding: 10px;
      border: none;
      border-radius: 5px;
  }
`;
