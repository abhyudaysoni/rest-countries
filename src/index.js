import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./globalStyles.js";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./globalStyles.js";

const Root = () => {
  const [isLight, setIsLight] = useState(false);
  const themeHandler = () => {
    setIsLight((prev) => !prev);
  };
  return (
    <BrowserRouter>
      <GlobalStyle isLight={isLight} />
      <App onThemeChange={themeHandler} isLight={isLight} />
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
