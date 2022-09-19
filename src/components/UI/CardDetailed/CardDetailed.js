import React, { useState } from "react";
import Button from "../Button/Button";
import leftArrow from "../../../assets/icons/arrow-left-line.svg";
import { Container } from "./styles";

export default function CardDetailed(props) {
  const getCurrencyValues = Object.values(props.detailedCountry.currencies);
  const getNativeNames = Object.values(props.detailedCountry.name?.nativeName);
  const getLanguages = Object.values(props.detailedCountry.languages);

  const classes = `card-detailed ${props.className}`;
  return (
    <Container className={classes}>
      <Button
        name={"Back"}
        content={<img src={leftArrow} alt={"go-back"}></img>}
        className={"back-btn"}
        onClick={props.backHandler}
      />
      <div className="country-details-container">
        <div className="flag-container-details">
          <img src={props.detailedCountry.flags.png} alt="" id="flag" />
        </div>
        <div className="country-details">
          <h1 className="name">{props.detailedCountry.name.common}</h1>
          <div className="details">
            <p>
              Native Name:{" "}
              {getNativeNames
                ? getNativeNames.map((element, index) => (
                    <span key={element + index}>{element.common}, </span>
                  ))
                : "Not Available"}
            </p>
            <p>
              Capital:{" "}
              {props.detailedCountry.capital
                ? props.detailedCountry.capital
                : "Not Available"}
            </p>
            <p>Region: {props.detailedCountry.region}</p>
            <p>
              Sub-Region:{" "}
              {props.detailedCountry?.subregion
                ? props.detailedCountry?.subregion
                : "Not Available"}
            </p>
            <p>
              Population:{" "}
              {props.detailedCountry.population
                ? `${props.detailedCountry.population}`
                : "Not Available"}
            </p>
            <p>Top Level Domain: {props.detailedCountry.tld[0]}</p>
            <p>
              Currencies:{" "}
              {getCurrencyValues
                ? getCurrencyValues.map((element, index) => (
                    <span key={element + index}>
                      {element.name} ({element.symbol}),{" "}
                    </span>
                  ))
                : " Not Available"}
            </p>
            <p>
              Languages:{" "}
              {getLanguages.map((element, index) => (
                <span key={element + index}>{element}, </span>
              ))}
            </p>
          </div>
          <div className="border-countries">
            <p>
              Borders:
              {props.detailedCountry?.borders
                ? props.detailedCountry.borders.map((element, index) => {
                    return (
                      <Button
                        key={element + index}
                        className={"border-countries"}
                        name={element}
                        onClick={props.displayBorderCountries.bind(
                          null,
                          element
                        )}
                      ></Button>
                    );
                  })
                : " Not Available"}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
