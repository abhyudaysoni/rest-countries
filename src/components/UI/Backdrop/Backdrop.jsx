import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: black;
  opacity: 20%;
  cursor: default;
`;

const Backdrop = () => {
  return <Container></Container>;
};

export default Backdrop;
