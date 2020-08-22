import styled, { css } from 'styled-components'
import { theme } from "../../../../Styles/global";
import { CameraFill } from "../../../../Assets/Icons";


export const Container = styled.div`


`
export const WrapperEdition = styled.div`

  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap:5%;
  justify-self:center;
  position: absolute;
  top: 20vh;
  left: 24vw;
  width: 72vw;
`
const gridCSS = css `

  background-color: #FAFAFA;
  box-shadow: 1px 1px 2px 1px rgba(217,210,217,1);
  padding:10px;
  border-radius: 5px;
  height:60vh;
  
  
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
 
 
`
export const CameraIcon = styled(CameraFill)`
  ${iconCSS}

  position: absolute;
  top: 14ch;
  left: 11vw;
  border-radius: 50%;
  border:5px solid #FAFAFA;
  z-index:1;
  background-color: #FAFAFA;;
`
export const SyledAvatar = styled.img`
  border-radius:50%;
  width:150px;
  height:150px;
  margin-left: 4.5vw;
`;

export const Div = styled.div`
  display: inline-flex;
  gap: 10px;
 
`
export const WrapperAdress = styled.div`
  margin-bottom: 20px;
    ul {
      margin-top:6px;
      display:flex;
      justify-content: space-around;
      list-style-type: none;
      
    }
 
`
export const WrapperBlock = styled.div`
  border:1px solid ${theme.texto};
  height: 25px;
  text-align: center;
  padding: 3px;
`
export const Wrappertitle = styled.div`
  display:flex;
  flex-direction:column;
  margin-top:20px;


`