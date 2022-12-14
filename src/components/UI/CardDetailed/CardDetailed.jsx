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
    getNativeNames = Object.values(props?.detailedCountry?.name?.nativeName);
  }
  if (props.detailedCountry.languages) {
    getLanguages = Object.values(props?.detailedCountry?.languages);
  }

  const classes = `card-detailed ${props.className}`;
  return (
    <Container className={classes}>
      <section className="country-details-container">
        <section className="flag-container-details">
          <img src={props.detailedCountry.flags.png} alt="" id="flag" />
        </section>
        <section className="country-details">
          <h1 className="name">{props.detailedCountry.name.common}</h1>
          <section className="details">
            <p>
              Native Name:{" "}
              <span>
                {getNativeNames
                  ? getNativeNames.map((element, index) => (
                      <span key={element + index}>{element.common}, </span>
                    ))
                  : "Not Available"}
              </span>
            </p>
            <p>
              Capital:{" "}
              <span>
                {props.detailedCountry.capital
                  ? props.detailedCountry.capital
                  : "Not Available"}
              </span>
            </p>
            <p>
              Region:{" "}
              <span>
                {props.detailedCountry.region
                  ? props.detailedCountry.region
                  : "Not Available"}
              </span>
            </p>
            <p>
              Sub-Region:{" "}
              <span>
                {props.detailedCountry.subregion
                  ? props.detailedCountry.subregion
                  : "Not Available"}
              </span>
            </p>
            <p>
              Continent:{" "}
              <span>
                {props.detailedCountry.continents[0]
                  ? props.detailedCountry.continents[0]
                  : "Not Available"}
              </span>
            </p>
            <p>
              Population:{" "}
              <span>
                {props.detailedCountry.population
                  ? `${props.detailedCountry.population}`
                  : "Not Available"}
              </span>
            </p>
            <p>
              Area:{" "}
              <span>
                {props.detailedCountry.area
                  ? `${props.detailedCountry.area} km^2`
                  : "Not Available"}
              </span>
            </p>
            <p>
              License plate:{" "}
              <span>
                {props.detailedCountry.car.signs[0]
                  ? `${props.detailedCountry.car.signs[0]}`
                  : "Not Available"}
              </span>
            </p>
            <p>
              Country Code:{" "}
              <span>
                {props.detailedCountry.idd.root
                  ? `${props.detailedCountry.idd.root}`
                  : "Not Available"}
              </span>
            </p>
            <p>
              Top Level Domain:{" "}
              <span>
                {props.detailedCountry.tld
                  ? `${props.detailedCountry.tld}`
                  : "Not Available"}
              </span>
            </p>
            <p>
              UN Membership:{" "}
              <span>{props.detailedCountry.unMember ? "Yes" : "No"}</span>
            </p>
            <p>
              Currencies:{" "}
              <span>
                {getCurrencyValues
                  ? getCurrencyValues.map((element, index) => (
                      <span key={element + index}>
                        {element.name} ({element.symbol}),{" "}
                      </span>
                    ))
                  : " Not Available"}
              </span>
            </p>
            <p>
              Languages:{" "}
              <span>
                {getLanguages &&
                  getLanguages.map((element, index) => (
                    <span key={element + index}>{element}, </span>
                  ))}
                {!getLanguages && <span>Not Available</span>}
              </span>
            </p>
            <p>
              Timezones:{" "}
              <span>
                {props.detailedCountry.timezones &&
                  props.detailedCountry.timezones.map((element, index) => (
                    <span key={element + index}>{element}, </span>
                  ))}
                {!getLanguages && <span>Not Available</span>}
              </span>
            </p>
          </section>
          <section className="border-countries">
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
                          <span>
                            {
                              props.countries.find(
                                (country) => country.cca3 === element
                              ).name.common
                            }
                          </span>
                        </NavLink>
                      );
                    })
                  : " Not Available"}
              </span>
            </p>
          </section>
        </section>
      </section>
    </Container>
  );
}
