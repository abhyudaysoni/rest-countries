import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "../../NotFound";
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
  const regionSet = new Set();
  props.countries.map((element) => {
    regionSet.add(element.region);
  });

  return (
    <>
      {filtered.length === 0 && <h1>No countries found</h1>}
      {regionSet.has(params.region) && filtered.length === 0 && (
        <h1>No countries found</h1>
      )}
      {regionSet.has(params.region) && <h1>Region: {params.region}</h1>}
      <section className="countries">
        {filtered.map((element, index) => {
          return (
            <CardBrief
              countryName={element.name.common}
              key={index + element.name.common}
              countryCode={element.cca3}
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
      </section>
    </>
  );
};

export default Brief;
