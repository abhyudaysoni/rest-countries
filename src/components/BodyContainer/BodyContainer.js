import React, { useState } from "react";
import Input from "./Input/Input";
import CountriesDisplayArea from "./CountriesDisplayArea/CountriesDisplayArea";
import { Container } from "./styles";
import Loading from "../UI/loader/Loading";
import data from "../../data.json";

const url = `https://restcountries.com/v3.1/all`;

export default function BodyContainer(props) {
  console.log(data);
  return (
    <Container>
      <Input />
      {!data && <Loading />}
      <CountriesDisplayArea countries={data} />
    </Container>
  );
}
