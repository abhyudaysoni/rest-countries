import React from "react";
import Brief from "./Brief";
import { Container } from "./styles";
import Detailed from "./Detailed";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "../../NotFound";
import { useSelector } from "react-redux";

export default function CountriesDisplayArea(props) {
  const searchInput = useSelector((state) => state.search.searchInput);
  let countries = props.countries;
  if (searchInput) {
    const formattedInput = searchInput.toLowerCase();
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
          element={<Brief countries={countries} isBrief={props.isBrief} />}
          exact
        />
        <Route
          path="/details/:countryCode"
          element={<Detailed countries={props.countries} />}
          exact
        />
        <Route path="/:region" element={<Brief countries={countries} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}
