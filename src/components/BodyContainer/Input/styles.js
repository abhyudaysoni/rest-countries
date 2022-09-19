import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 3fr 1.5fr;
  justify-content: space-between;
  align-items: center;

  .search-bar {
    display: flex;
    align-items: center;
    width: 80%;
    height: 50px;
    max-width: 700px;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 1px 5px rgb(128, 127, 127);
    img {
      margin: 1rem;
    }
    .search-bar-input {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      font-size: 1rem;
    }
  }
  .filter-by-region {
    cursor: pointer;
    border: none;
    width: 100%;
    height: 50px;
    background: none;
    border-radius: 5px;
    z-index: 10;
    background: white;
    box-shadow: 0px 1px 5px rgb(128, 127, 127);
    p {
      margin: 0.8rem;
      display: flex;
      justify-content: space-between;
    }
  }
  .regions {
    a {
      text-decoration: none;
      color: black;
      width: 100%;
      padding: 0.5rem;
    }
    a:hover {
      text-shadow: 0px 0px 1px black;
    }
    width: 100%;
    padding: 1rem;
    background: white;
    display: flex;
    flex-direction: column;
    z-index: 10;
    position: relative;
    box-shadow: 0px 5px 5px #bfbfbf;
    border-radius: 0 0 10px 10px;
  }

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .search-bar {
      width: 100%;
      margin: 0.5rem 0 0.5rem 0;
    }
    .filter-by-region {
      width: 100%;
      margin: 0.5rem;
    }
  }
`;
