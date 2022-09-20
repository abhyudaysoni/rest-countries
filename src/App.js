import "./App.css";
import Header from "./components/Header/Header";
import BodyContainer from "./components/BodyContainer/BodyContainer";
// import useFetch from "./hooks/use-fetch";
import data from "./data.json";
import Loading from "./components/UI/loader/Loading";

// const url = `https://restcountries.com/v3.1/all`;

function App() {
  // const data = useFetch(url);
  return (
    <div className="App">
      <Header />
      <BodyContainer data={data} />
      {!data && <Loading />}
    </div>
  );
}

export default App;
