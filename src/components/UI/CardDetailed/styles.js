import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  .country-details-container {
    display: grid;
    padding: 0 10% 0 10%;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
  }
  #flag {
    height: 300px;
    width: 500px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px #131d2e;
    margin-top: 3rem;
  }
  .country-details {
    display: flex;
    margin: 1rem;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    h1 {
      font-size: 20px;
    }
  }
  .details {
    display: grid;
    grid-template-rows: repeat(auto-fill, 1fr);
    margin: 1rem 0 1rem 0;
    p {
      font-weight: 900;
      margin: 0.5rem 0;
    }
    span {
      font-weight: 400;
    }
  }
  .border-countries {
    p {
      font-weight: 900;
      .borders {
        display: flex;
        flex-wrap: wrap;
      }
      span {
        font-weight: 700;
      }
      a {
        width: fit-content;
        text-align: center;
        border-radius: 5px;
        span {
          width: fit-content;
          padding: 0.5rem;
          box-shadow: 1px 1px 3px #131d2e;
          border-radius: 5px;
        }
      }
    }
  }
  .back-btn {
    margin: 0;
    min-height: 50px;
    min-width: 150px;
    max-width: fit-content;
    max-height: fit-content;
    padding: 0 2.5rem 0 2.5rem;
    border-radius: 5px;
    box-shadow: 1px 1px 5px rgb(198, 200, 201);
  }
  .border-countries button {
    box-shadow: 1px 1px 5px rgb(198, 200, 201);
    width: 100px;
    padding: 0;
    height: 30px;
  }
  @media (max-width: 1200px) {
    .country-details-container {
      grid-template-columns: 1fr;
      padding: 5%;
    }
    #flag {
      width: 100%;
      height: 100%;
      margin-top: 0;
    }
  }
  @media (max-width: 1200px) {
    #flag {
      margin-top: 0;
    }
  }
`;
