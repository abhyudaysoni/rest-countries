import React from "react";
import Button from "../UI/Button/Button";
import light from "../../assets/icons/light.svg";
import dark from "../../assets/icons/dark.svg";
import { Container } from "./styles";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <Container>
      <Link to="/">
        <h1>Where in the World</h1>
      </Link>
      <Button
        name={props.isLightModeText}
        onClick={props.onThemeChange}
        id={"btn-display-mode"}
      >
        <img src={props.isLight ? dark : light} alt="" />
        <p>{props.isLight ? "Dark Mode" : "Light Mode"}</p>
      </Button>
    </Container>
  );
}
