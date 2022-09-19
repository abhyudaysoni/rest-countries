import React from "react";
import { NavLink, useParams } from "react-router-dom";
import CardBrief from "../../UI/CardBrief/CardBrief";

const Brief = (props) => {
  const params = useParams();
  let filtered;
  if (!params.region || params.region === "None") {
    filtered = props.countries;
  } else {
    filtered = props.countries.filter(
      (element) => element.region === params.region
    );
  }

  return (
    <>
      {filtered.map((element, index) => {
        return (
          <CardBrief
            countryName={element.name.common}
            key={index + element.name.common}
            // onClick={displayCountryDetails.bind(
            //   null,
            //   element.name.common,
            //   index
            // )}
            className={"country-card-brief"}
            flagSrc={element.flags.svg ? element.flags.svg : "Not Available"}
            countryPopulation={
              element.population ? element.population : "Not Available"
            }
            coutryRegion={element.region ? element.region : "Not Available"}
            coutryCapital={
              element.capital ? element.capital[0] : "Not Available"
            }
          ></CardBrief>
        );
      })}
    </>
  );
};

export default Brief;
