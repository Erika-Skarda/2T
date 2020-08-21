import styled,  { keyframes } from 'styled-components'
import { theme } from "../../Styles/global";

 
 export const SectionTitle = styled.div `
 
  margin: 39px auto 30px 450px;
   
     h2 {
         font-size: 40px;
         letter-spacing:-0.15px;
         font-weight:100;
         text-shadow: 1px 1px 2px ${theme.borderButton};
     }
 
 ` 
 export const Div = styled.div `

     height: 18vh;
     background-color: ${theme.texto};
     width:100%;

 `