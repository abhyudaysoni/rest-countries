import React from "react";
import Brief from "./Brief";
import { Container } from "./styles";
import Detailed from "./Detailed";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "../../NotFound";

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
        <Route path="/" element={<Navigate replace to="/allCountries" />} />
        <Route
          path="/allCountries"
          element={
            <Brief
              countries={countries}
              isBrief={props.isBrief}
              onSearchInput={props.onSearchInput}
            />
          }
          exact
        />
        <Route
          path="/details/:countryCode"
          element={<Detailed countries={props.countries} />}
          exact
        />
        <Route
          path="/:region"
          element={
            <Brief countries={countries} onSearchInput={props.onSearchInput} />
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}
