import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%;
  }

  :focus{ 
  outline: transparent;
  }

  li{
    list-style: none;
  }
  
  body, input, textarea, button{
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    color: ${props => props.theme["base-text"]};
  }



  body, html {
    background:  ${props => props.theme["base-background"]};
  }

`