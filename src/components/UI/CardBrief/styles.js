import styled from "styled-components";

export const Container = styled.section`
  max-height: 550px;
  width: 300px;
  font-size: 1.5rem;
  box-shadow: 1px 1px 5px rgb(163, 163, 163);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 5rem;
  height: 100%;

  img {
    width: 100%;
    box-shadow: 1px 1px 5px rgb(163, 163, 163);
    border-radius: 20px;
  }

  .country-brief-details {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;
