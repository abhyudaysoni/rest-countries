import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 1rem 0;
  width: 100%;

  a {
    text-decoration: none;
    color: black;
    margin: 1rem;
  }
  #no-data-found-card {
    margin: 2rem;
  }
`;
