import React from "react";
import styled from "styled-components";

const Container = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: none;
  border: none;
  font-size: 1rem;
  height: fit-content;
  border-radius: 5px;
  width: fit-content;
  padding: 1rem;
  color: black;
`;

export default function Button(props) {
  return (
    <Container
      className={props.className}
      id={props.id}
      type={props.type || "button"}
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}
    </Container>
  );
}
