import styled from "styled-components";
import { theme } from "../../Styles/global"

export const ButtonStyled  = styled.button `

    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color:${theme.azul2};
    font-weight: bold;
    display:flex;
    justify-content:center;
    z-index: 1;
    position: relative;
    font-size: inherit;
    font-family: inherit;
  
    border-radius:8px;
    padding: 0.5em 1em;
    outline: none;
    border: none; 
    box-shadow: 2px 2px 6px ${theme.borderButton};
    overflow: hidden;
    transition: color 0.4s ease-in-out;
  
        :before {
            content: '';
            z-index: -1;
            position: absolute;
            bottom: 100%;
            right: 100%;
            width: 1em;
            height: 1em;
            border-radius: 50%;
            background-color: ${theme.menu};
            transform-origin: center;
            transform: translate3d(50%, 50%, 0) scale3d(0, 0, 0);
            transition: transform 0.45s ease-in-out;
        }
        
        :hover {
          background-color: ${theme.menu};
        }
        
        :hover::before {
            transform: translate3d(50%, 50%, 0) scale3d(15, 15, 15);
        } 
  `;
  
