import styled from 'styled-components'
import { theme } from "../../Styles/global";

export const Table = styled.div`
    height: 70vh;
    width: 75vw;
    border-radius: 5px;
    z-index: 1;
    position: absolute;
    left: 23vw;
    bottom: 7vh;
    background-color: ${theme.branco};
    box-shadow: 1px 1px 2px 1px rgba(217,210,217,1);

      header {
        margin-left:0;
        background-color:${theme.azul2};
        margin-top:0;
        height:5vh;
        border-radius: 5px 5px 0 0 ;
      }

`