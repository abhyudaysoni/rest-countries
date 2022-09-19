import React, { useState } from "react";
import Brief from "./Brief";
import { Container } from "./styles";
import Detailed from "./Detailed";
import { Routes, Route } from "react-router-dom";

export default function CountriesDisplayArea(props) {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Brief countries={props.countries} />} />
        <Route
          path="/:countryName"
          element={<Detailed countries={props.countries} />}
          exact
        />
      </Routes>
    </Container>
  );
}
