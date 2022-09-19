import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

export const Container = styled.section`
  a {
    font-size: 20px;
  }
`;

const NotFound = () => {
  return (
    <Container>
      <h1>Error 404: Page Not Found</h1>
      <NavLink to="/">Go back Home</NavLink>
    </Container>
  );
};

export default NotFound;
