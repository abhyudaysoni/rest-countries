import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "./styles";

export default function CardDetailed(props) {
  let getCurrencyValues;
  let getNativeNames;
  let getLanguages;
  if (props.detailedCountry.currencies) {
    getCurrencyValues = Object.values(props?.detailedCountry?.currencies);
  }
  if (props.detailedCountry.name.nativeName) {
    Object.values(props?.detailedCountry?.name?.nativeName);
  }
  if (props.detailedCountry.languages) {
    getLanguages = Object.values(props?.detailedCountry?.languages);
  }

  const classes = `card-detailed ${props.className}`;
  return (
    <Container className={classes}>
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
              {getLanguages &&
                getLanguages.map((element, index) => (
                  <span key={element + index}>{element}, </span>
                ))}
              {!getLanguages && <span>Not Available</span>}
            </p>
          </div>
          <div className="border-countries">
            <p>
              Borders:
              <span className="borders">
                {props.detailedCountry?.borders
                  ? props.detailedCountry.borders.map((element, index) => {
                      return (
                        <NavLink
                          key={element + index}
                          to={`/details/${element}`}
                          className={"border-countries"}
                        >
                          {element}
                        </NavLink>
                      );
                    })
                  : " Not Available"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
