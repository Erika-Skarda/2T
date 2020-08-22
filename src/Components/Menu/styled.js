import styled, { css } from 'styled-components';
import { theme } from "../../Styles/global";
import { GridAlt, 
         People,
         MoneyDollarCircle,
         Message,
         AddressCard } from "../../Assets/Icons";

export const SideBar = styled.div`
  position:absolute;
  top:0;
  width:20%;
  min-height:100vh;
  display: 'flex';
  flex-direction: column;
  color: "#8DD4E3";
  gap:10px;
  background-color:${theme.bege};
  margin-top:0;

    img {

      width:200px;
    }
    ul {
     
      margin-top: 10vh;
      height: 100%;
      list-style-type: none;
      background-color: ${(props) => props.bgColor};
      margin-top: 7vh;
      height: 100%;
      margin-bottom: 40vh;
    }

       li {

          color:"#516373";
          font-size:1.6rem;
          font-weight:450;
          padding: 28px 20px 34px;
      }
`
const iconCSS = css `
  width:31px;
  height:31px;
  padding:5px;
 
`
export const DashBoardIcon = styled(GridAlt)`
    ${iconCSS}
`
export const ClientsIcon = styled(People)`
    ${iconCSS}
`
export const FinancialIcon = styled(MoneyDollarCircle)`
    ${iconCSS}
 `
export const MessageIcon = styled(Message)`
      ${iconCSS}
`
export const IdCardIcon = styled(AddressCard)`
      ${iconCSS}

`