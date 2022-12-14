import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Container } from "./styles";
import search from "../../../assets/icons/search-line.svg";
import { NavLink } from "react-router-dom";
import arrowDown from "../../../assets/icons/arrow-down.svg";
import arrowUp from "../../../assets/icons/arrow-up.svg";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { regions } from "../../../assets/constants";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeSearch } from "../../../store/search-slice";

export default function Input(props) {
  const searchInput = useSelector((state) => state.search.searchInput);
  const dispatch = useDispatch();
  const searchInputHandler = (e) => {
    dispatch(changeSearch(e.target.value));
  };
  const [regionsVisibility, setRegionsVisibility] = useState(false);
  return (
    <Container regionsVisibility={regionsVisibility} isLight={props.isLight}>
      <div className="search-bar">
        <img src={search} alt="search-icon" />
        <input
          value={searchInput}
          type="text"
          className="search-bar-input"
          onChange={searchInputHandler}
          placeholder="search country by name..."
        />
      </div>
      <div
        value={props.filterOption}
        className="filter-by-region"
        onClick={() => setRegionsVisibility((prev) => !prev)}
      >
        <p>
          {props.region || "Filter by Region"}
          <span>
            {regionsVisibility && <img src={arrowUp} alt="up"></img>}
            {!regionsVisibility && <img src={arrowDown} alt="down"></img>}
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
