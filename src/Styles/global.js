import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { TextField } from '@material-ui/core';

export const theme = {
  verde: "#86C7A4",
  header: "#74808B",
  vermelho: "#E94E60",
  amarelo: "#F6E3BB",
  azul: "#8DD4E3",
  menu: "#F1F1F1",
  roxo: "#C9A0B4",
  azul2:"#0387D1",
  branco: "#FAFAFA",
  borderButton: "rgba(0, 0, 0, 0.5)",
};

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin : 0;
    box-sizing: border-box;
    font-size: 16px;
  } 

  button {
    cursor: pointer;

  }
  @font-face {
  font-family: 'Foo';
  src: url('/path/to/foo.woff') format('woff');
  font-style: normal;
  font-weight: 400;
  font-display: fallback; 
}
  body {
     /* background: ${props => props.theme.colors.background};
     color: ${props => props.theme.colors.text}; */
     font-family:'proxima_nova_rgbold', Helvetica, Arial, sans-serif;
  };
  html, border-style, #root {
        max-height: 100vh;
        max-width: 100vw;
        width: 100%;
        height: 100%;
    }
`;