import styled from "styled-components";
import { theme } from "../../Styles/global"

export const ButtonStyled  = styled.button `

    width: ${(props) => props.width};
    height: ${(props) => props.height};
    position:absolute;
    left:${(props) => props.left};
    top:${(props) => props.top};
    background-color:${theme.azul2};
    z-index: 1;
    font-size: 1.1rem;
    color:${theme.branco};
    border-radius:2px;
    text-align:center;
    outline: none;
    border: none; 
    box-shadow: 2px 2px 6px ${theme.borderButton};
    overflow: hidden;
    transition: color 0.4s ease-in-out;
    padding: 10px;
        :before {
            content: '';
            z-index: -1;
            position: absolute;
            bottom: 100%;
            right: 100%;
            width: 1em;
            height: 1em;
            border-radius: 50%;
            background-color: ${theme.vermelho};
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
  
