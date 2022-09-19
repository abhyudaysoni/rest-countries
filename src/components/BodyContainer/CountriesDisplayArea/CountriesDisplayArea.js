import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CardBrief from "../../UI/CardBrief/CardBrief";
import CardDetailed from "../../UI/CardDetailed/CardDetailed";
import { Container } from "./styles";

export default function CountriesDisplayArea(props) {
  return (
    <Container>
      {props.countries.map((element, index) => {
        return (
          <CardBrief
            countryName={element.name.common}
            key={index + element.name.common}
            // onClick={displayCountryDetails.bind(
            //   null,
            //   element.name.common,
            //   index
            // )}
            className={"country-card-brief"}
            flagSrc={element.flags.svg ? element.flags.svg : "Not Available"}
            countryPopulation={
              element.population ? element.population : "Not Available"
            }
            coutryRegion={element.region ? element.region : "Not Available"}
            coutryCapital={
              element.capital ? element.capital[0] : "Not Available"
            }
          ></CardBrief>
        );
      })}
    </Container>
  );
}
