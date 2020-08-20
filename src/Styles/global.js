import { createGlobalStyle } from "styled-components";

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
  texto:"#516373",
  bege:"#F2F2F2"
};

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin : 0;
    box-sizing: border-box;
    color:${theme.texto};
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
     color:${theme.azul};
     font-family:'proxima_nova_rgbold', Helvetica, Arial, sans-serif;
  };
  html, border-style, #root {
       
        color:${theme.azul};
    }
`;