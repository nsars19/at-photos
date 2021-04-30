import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import colors from "./utils/colors";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Noto Sans', sans-serif;
  }

  body {
    background: ${colors.black};

    button,
    input[type="submit"] {
      border-style: none;
      border: none;
      background: ${colors.blue};
      color: ${colors.lightBlue};
    }
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
