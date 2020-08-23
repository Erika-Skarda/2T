import styled, { css } from 'styled-components'
import { theme } from "../../../../Styles/global";
import { CameraFill } from "../../../../Assets/Icons";
import { Copy } from "../../../../Assets/Icons";

export const Container = styled.div`


`
export const WrapperEdition = styled.div`

  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap:10%;
  justify-self:center;
  position: absolute;
  top: 20vh;
  left: 24vw;
  width: 70vw;
`
const gridCSS = css `

  background-color: #FAFAFA;
  box-shadow: 1px 1px 2px 1px rgba(217,210,217,1);
  padding:10px;
  border-radius: 5px;
  height:65vh;
   
`
export const WrapperPhoto = styled.div`
  ${gridCSS};
`
export const WrapperData = styled.div`
   ${gridCSS}
`
const iconCSS = css `
  width: 38px;
  height: 38px;  
  position: absolute;
  top: 14ch;
  left: 11vw;
  border-radius: 50%;
  border:5px solid #FAFAFA;
  z-index:1;
  background-color: #FAFAFA;;
`
export const CameraIcon = styled(CameraFill)`
  ${iconCSS}
`
export const SyledAvatar = styled.img`
  border-radius:50%;
  width:150px;
  height:150px;
  margin-left: 5.5vw;
  margin-top:10px;
`
export const Title = styled.div`
  display:block;
  margin-bottom: 10px;
  margin-top: 10px;
  text-align:center;

    h3 {

      color: rgba(217,210,217,1);
    }
`
export const CopyIcon = styled(Copy)`
  width: 30px;
  height: 30px;
  padding: 3px;
  color: rgba(217,210,217,1);
  border: 1px solid rgba(217,210,217,1); 
 
`
export const SubTitle = styled.div`
  margin-top: 20px;
  text-align: center;
  margin-bottom:20px;

  span  {

      display:inline-flex;
      gap:150px;
      margin-bottom:20px;


      p:first-of-type { 
        
        font-weight:700;

      }
      p:nth-of-type(2n) {

        color:#F6E3BB;
        font-weight:700;
      }
    }
      h4:nth-of-type(1n) {

        color:#86C7A4;
        font-weight:700;
        margin-top: 20px;
        margin-bottom:20px;
      }

`
export const Div = styled.div`
  display: inline-flex;
  gap: 30px;
  margin-bottom: 20px;
 
`
export const WrapperAdress = styled.div`
  margin-bottom: 35px;
    ul {
      margin-top:6px;
      display:flex;
      justify-content: space-around;
      list-style-type: none;
      
    }
 
`

export const WrapperBlock = styled.div`
  border:1px solid rgba(217,210,217,1);
  height: 30px;
  overflow:hidden;
  text-align: center;
  padding: 7.5px 4px 2px 0;;
  width: ${props => props.small ? '200px' : '300px'};
`
export const Wrappertitle = styled.div`
  display:flex;
  flex-direction:column;
  margin-top:20px;

    label {

        font-size:1rem;
        color: #516373;
        font-weight:700;
        margin-bottom:10px;
    }


`