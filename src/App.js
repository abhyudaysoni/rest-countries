import styled from "styled-components";
import Header from "./components/Header/Header";
import BodyContainer from "./components/BodyContainer/BodyContainer";
// import useFetch from "./hooks/use-fetch";
import data from "./data.json";
import Loading from "./components/UI/loader/Loading";

// const url = `https://restcountries.com/v3.1/all`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function App(props) {
  // const data = useFetch(url);
  return (
    <Container>
      <Header onThemeChange={props.onThemeChange} isLight={props.isLight} />
      <BodyContainer data={data} isLight={props.isLight} />
      {!data && <Loading />}
    </Container>
  );
}

export default App;
