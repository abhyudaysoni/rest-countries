import styled from "styled-components";

export const Container = styled.div`
  max-height: 700px;
  min-height: 400px;
  width: 300px;
  font-size: 1.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 2rem;
  border-radius: 5px;
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
      border-radius: 5px 5px 0 0;
    }
  }
`;
