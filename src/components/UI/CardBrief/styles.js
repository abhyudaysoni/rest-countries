import styled from "styled-components";

export const Container = styled.section`
  max-height: 700px;
  min-height: 400px;
  width: 300px;
  font-size: 1.5rem;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 2rem;
  height: 100%;

  .country-brief-details {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .flag-container-brief {
    width: 100%;
    max-height: 200px;
    img {
      max-height: 200px;
      width: 100%;
      border-radius: 20px;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;
