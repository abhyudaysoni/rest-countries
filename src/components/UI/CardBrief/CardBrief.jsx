import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "./styles";

export default function CardBrief(props) {
  const classes = props.className;
  return (
    <NavLink
      to={`/details/${props.countryCode}`}
      onClick={props.onBriefVisibility}
    >
      <Container className={classes} id={props.id}>
        <section className="flag-container-brief">
          <img src={props.flagSrc} alt="flag" />
        </section>
        <section className="country-brief-details">
          <h3>{props.countryName}</h3>
          <h5>
            Population:
            {props.countryPopulation}
          </h5>
          <h5>{`Region: ${props.coutryRegion}`}</h5>
          <h5>{`Capital: ${props.coutryCapital}`}</h5>
        </section>
      </Container>
    </NavLink>
  );
}
