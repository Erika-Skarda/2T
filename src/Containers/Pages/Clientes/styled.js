import styled  from 'styled-components'
import { theme } from "../../../Styles/global";


export const Container = styled.div`

  display:grid;
  grid-template-columns:(1fr, 4fr);

`
export const Table = styled.div`
    height:65vh;
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
        margin:-10px -10px 0 -10px;
        background-color:${theme.azul2};
        height:5vh;
        border-radius: 5px 5px 0 0 ;
      }

`
