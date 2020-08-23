import styled from 'styled-components'
import { theme } from "../../../Styles/global";

export const Container = styled.div`

  display:grid;
  grid-template-columns:(1fr, 4fr);

`
export const Table = styled.div`
    height:70vh;
    width: 75vw;
    border-radius: 5px;
    z-index: 1;
    position: absolute;
    top:20vh;
    left: 23vw;
    background-color: #FAFAFA;
    box-shadow: 1px 1px 2px 1px rgba(217,210,217,1);
    padding:10px;

      header {
        margin-left:0;
        background-color:${theme.azul2};
        margin-top:0;
        height:5vh;
        border-radius: 5px 5px 0 0 ;
      }

`
export const WrapperGraphics = styled.div`

  display:grid;
  grid-template-columns:repeat(3, 1fr);
  justify-items: center;
  margin-top:45px;


`