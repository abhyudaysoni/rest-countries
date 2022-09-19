import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Container } from "./styles";
import search from "../../../assets/icons/search-line.svg";
import { NavLink, useParams } from "react-router-dom";
import arrowDown from "../../../assets/icons/arrow-down.svg";
import arrowUp from "../../../assets/icons/arrow-up.svg";
import Backdrop from "../../UI/Backdrop/Backdrop";

export default function Input(props) {
  const [regionsVisibility, setRegionsVisibility] = useState(false);
  const regionSet = new Set();
  props.countries.map((element) => {
    regionSet.add(element.region);
  });
  const regions = Array.from(regionSet);
  regions.unshift("None");
  const params = useParams();
  return (
    <Container regionsVisibility={regionsVisibility}>
      <div className="search-bar">
        <img src={search} alt="search-icon" />
        <input
          value={props.searchInput}
          type="text"
          className="search-bar-input"
          onChange={props.onSearchInput}
          placeholder="search country by name..."
        />
      </div>
      <div
        value={props.filterOption}
        className="filter-by-region"
        onClick={() => setRegionsVisibility((prev) => !prev)}
      >
        <p>
          Filter by Region{" "}
          <span>
            {regionsVisibility && <img src={arrowUp}></img>}
            {!regionsVisibility && <img src={arrowDown}></img>}
            {regionsVisibility &&
              ReactDOM.createPortal(
                <Backdrop />,
                document.getElementById("backdrop-root")
              )}
          </span>
        </p>

        {regionsVisibility && (
          <div className="regions">
            {regions.map((element) => (
              <NavLink
                to={`${element === "None" ? "/" : `/${element}`}`}
                key={element}
              >
                {element}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}
