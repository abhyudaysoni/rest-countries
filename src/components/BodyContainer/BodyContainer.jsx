import React from "react";
import CountriesDisplayArea from "./CountriesDisplayArea/CountriesDisplayArea";
import { Container } from "./styles";

export default function BodyContainer(props) {
  return (
    <Container>
      {props.data && <CountriesDisplayArea countries={props.data} />}
    </Container>
  );
}
