import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
  }
  button {
    cursor: pointer;
  }
  body{
    background: ${(props) => (props.isLight ? "white" : "hsl(207, 26%, 17%)")};
    color: ${(props) => (props.isLight ? "black" : "white")};
  }
  a{
    text-decoration: none;
    color: ${(props) => (props.isLight ? "black" : "white")};
  }
  a:hover {
    text-shadow: 0px 0px 1px #999999;
    color: ${(props) => (props.isLight ? "black" : "white")};
  }
  div{
    background: ${(props) => (props.isLight ? "white" : "hsl(207, 26%, 17%)")};
    box-shadow: 0px 0px 10px  ${(props) =>
      props.isLight ? "#999999" : "#131d2e"};
  }
  input{
    background: ${(props) => (props.isLight ? "white" : "hsl(207, 26%, 17%)")};
    color: ${(props) => (props.isLight ? "black" : "white")};
  }
`;
