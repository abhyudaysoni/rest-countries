import React from "react";
import "./Header.css";
import Button from "../UI/Button/Button";
import light from "../../assets/icons/light.svg";
import dark from "../../assets/icons/dark.svg";

export default function Header(props) {
  return (
    <header>
      <a href="/">
        <h1>Where in the World</h1>
      </a>
      <Button
        name={props.isLightModeText}
        onClick={props.onDisplayMode}
        id={"btn-display-mode"}
      >
        <img src={props.isLight ? light : dark} alt="" />
        <p>{props.isLight ? "Dark Mode" : "Light Mode"}</p>
      </Button>
    </header>
  );
}