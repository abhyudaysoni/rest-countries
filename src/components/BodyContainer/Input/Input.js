import React, { useState } from "react";
import "./Input.css";
import search from "../../../assets/icons/search-line.svg";

export default function Input(props) {
  return (
    <section className="input-options">
      <div className="search-bar">
        <img src={search} alt="search-icon" />
        <input
          value={props.searchInput}
          type="text"
          className="search-bar-input"
          onChange={props.changeSearch}
          placeholder="search country by name..."
        />
      </div>
      <select
        value={props.filterOption}
        className="filter-by-region"
        name="filter"
        onChange={props.changeFilter}
      >
        <option value="All">Filter by region: (None)</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctic">Antarctic</option>
      </select>
    </section>
  );
}
