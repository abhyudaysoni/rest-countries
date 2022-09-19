import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import BodyContainer from "./components/BodyContainer/BodyContainer";
import useFetch from "./hooks/use-fetch";

const url = `https://restcountries.com/v3.1/all`;

const AppRoutes = () => {
  // const data = useFetch(url);
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<BodyContainer />}></Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
