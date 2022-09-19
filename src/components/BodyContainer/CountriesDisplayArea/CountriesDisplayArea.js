import React from "react";
import Brief from "./Brief";
import { Container } from "./styles";
import Detailed from "./Detailed";
import { Routes, Route } from "react-router-dom";

export default function CountriesDisplayArea(props) {
  let countries = props.countries;
  if (props.searchInput) {
    const formattedInput = props.searchInput.toLowerCase();
    countries = props.countries.filter((element) => {
      const countryName = element.name.common.toLowerCase();
      return countryName.slice(0, formattedInput.length) === formattedInput;
    });
  }

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Brief countries={countries} />} exact />
        <Route
          path="/details/:countryCode"
          element={<Detailed countries={props.countries} />}
          exact
        />
        <Route path="/:region" element={<Brief countries={countries} />} />
      </Routes>
    </Container>
  );
}
