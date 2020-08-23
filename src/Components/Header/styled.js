import styled,  { keyframes, css } from 'styled-components'
import { theme } from "../../Styles/global";
import { Notifications } from "../../Assets/Icons";
import { DownArrow } from "../../Assets/Icons";

const iconCSS = css`
    width: 31px;
    height: 31px;

`
 export const SectionTitle = styled.div `
  display:flex;
  margin: 39px auto 30px 450px;
  height:3vh;
  
   
     h2 {
         font-size: 40px;
         letter-spacing:-0.15px;
         font-weight:100;
         text-shadow: 1px 1px 2px ${theme.borderButton};
         margin-left: 10px;
     }
     img {
         width: 55px;
         height: 45px;
         margin-top: -13px;
         margin-left: 10px;
     }

     h3 {
         text-shadow: 0.3px 0.3px 0.5px ${theme.borderButton};
         margin-left: 10px;
         font-weight: 500;
     }
 
 ` 
 export const Div = styled.div `

    height: 18vh;
    background-color: ${theme.texto};
    width:100%;
 `
export const NotificationIcon = styled(Notifications)`
    ${iconCSS};
    margin-left:45vw;
`
export const DownArrowIcon = styled(DownArrow)`
    width: 16px;
    height: 16px;

` 