import React from "react";
import { useParams } from "react-router-dom";
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
      {params?.region?.length > 0 && <h1>Region: {params.region}</h1>}
      {filtered.length === 0 && <h1>No Data Found</h1>}
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
