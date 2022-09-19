import React from "react";
import { useParams } from "react-router-dom";
import CardDetailed from "../../UI/CardDetailed/CardDetailed";

const Detailed = (props) => {
  const params = useParams();
  const country = props.countries.find(
    (element) => element.cca3 === params.countryCode
  );
  return <CardDetailed detailedCountry={country}></CardDetailed>;
};

export default Detailed;
