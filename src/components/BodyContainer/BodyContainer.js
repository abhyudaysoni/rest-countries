import React, { useState } from "react";
import Input from "./Input/Input";
import CountriesDisplayArea from "./CountriesDisplayArea/CountriesDisplayArea";
import { Container } from "./styles";

const url = `https://restcountries.com/v3.1/all`;

export default function BodyContainer(props) {
  return (
    <Container>
      <Input />
      {props.data && <CountriesDisplayArea countries={props.data} />}
    </Container>
  );
}
