import React from "react";
import { useParams } from "react-router-dom";
import CardDetailed from "../../UI/CardDetailed/CardDetailed";

const Detailed = (props) => {
  const params = useParams();
  const country = props.countries.find(
    (element) => element.name.common === params.countryName
  );
  return <CardDetailed detailedCountry={country}></CardDetailed>;
};

export default Detailed;
