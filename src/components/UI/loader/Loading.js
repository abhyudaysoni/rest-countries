import React from "react";
import styled from "styled-components";
import loaderImg from "./loading.svg";

const Container = styled.img`
  height: 100px;
`;

const Loading = () => {
  return <Container src={loaderImg} alt="loading countries..."></Container>;
};

export default Loading;
