import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./globalStyles.js";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./globalStyles.js";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

const Root = () => {
  const [isLight, setIsLight] = useState(false);
  const themeHandler = () => {
    setIsLight((prev) => !prev);
  };
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle isLight={isLight} />
        <App onThemeChange={themeHandler} isLight={isLight} />
      </Provider>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
