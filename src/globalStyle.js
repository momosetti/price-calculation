import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }
  html,
  body{
      width:100%;
      height:100%
  }
  body{
    font-family: 'Martel Sans', sans-serif;
    font-size: 15px;
  }
`;

export default GlobalStyle;
