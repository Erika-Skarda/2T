import styled, { css } from 'styled-components';
import { theme } from "../../Styles/global";
import { GridAlt, 
         People,
         MoneyDollarCircle,
         Message,
         AddressCard } from "../../Assets/Icons";


export const StyledSection = styled.section `
  width: inherit; 
  color: ${theme.texto};
  background-color: ${theme.branco};
  display: flex; 
  flex-direction: column;
`
export const SectionTitle = styled.div `

 margin: 70px auto 30px auto;
    h2 {
        font-size: 40px;
        letter-spacing:-0.15px;
        font-weight:100;
    }

 


` 

export const SideBar = styled.div`
  margin-top:0;
  width:20%;
  max-height:100%;
  display: 'flex';
  flex-direction: column;
  color: "#8DD4E3";
  background-color:${theme.bege};

    img {

      width:200px;
    }
    ul {
     
      margin-top: 12vh;
      height: 100%;
      padding-bottom: 26vh;
      list-style-type: none;
      background-color: ${(props) => props.bgColor};
    }

       li {

        
          color:"#516373";
          font-size:1.6rem;
          font-weight:450;
          padding: 20px  20px 40px;
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