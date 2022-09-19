import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "./styles";

export default function CardBrief(props) {
  const classes = props.className;
  return (
    <NavLink>
      <Container className={classes} id={props.id} onClick={props.onClick}>
        <div className="flag-container-brief">
          <img src={props.flagSrc} alt="" />
        </div>
        <div className="country-brief-details">
          <h3>{props.countryName}</h3>
          <h5>
            Population:
            {props.countryPopulation
              ? (props.countryPopulation / 100000).toFixed(1) + "m"
              : "Not Available"}
          </h5>
          <h5>{`Region: ${props.coutryRegion}`}</h5>
          <h5>{`Capital: ${props.coutryCapital}`}</h5>
        </div>
      </Container>
    </NavLink>
  );
}
