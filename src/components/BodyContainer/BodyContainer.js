import React, { useState } from "react";
import Input from "./Input/Input";
import CountriesDisplayArea from "./CountriesDisplayArea/CountriesDisplayArea";
import { Container } from "./styles";

const url = `https://restcountries.com/v3.1/all`;

export default function BodyContainer(props) {
  const [searchInput, setSearchInput] = useState();
  const searchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <Container>
      {props.data && (
        <Input countries={props.data} onSearchInput={searchInputHandler} />
      )}
      {props.data && (
        <CountriesDisplayArea
          countries={props.data}
          searchInput={searchInput}
        />
      )}
    </Container>
  );
}
