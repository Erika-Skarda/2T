import styled from 'styled-components'
import { theme } from "../../../../Styles/global"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export const Container = styled.div`

min-height:100%;

`
export const WrapperForm = styled.span`
  display:flex;
  flex-direction:column;
  margin-left:5vw;
  margin-top:1vh;
  height:90vh;
`
export const WrapperForm1 = styled.div`
   

`


export const Form = styled.form `

  margin-top: 2vh;
 

   label {

     font-weight: bold;
   }

`
export const FormControlLabelStyled = withStyles((theme) => ({

      label: {

        fontSize:"1.5rem",
        color: "#516373",
        fontWeight:"700", 
        textDecoration: `
        ${({value}) => (value ? 
        'underline' : 'none')}`
        
      }
}))(FormControlLabel);


export const TextFieldStyled = styled(TextField)`
   width:${(props) => props.width};
   background:#FFFFFF;

`

export const Div = styled.div`
  display: inline-flex;
  gap: 10px;
 
`
export const Title = styled.div`
  display:block;
  margin-bottom: 10px;
  margin-top: 10px;
`
export const WrapperAdress = styled.div`

  box-shadow: 1px 1px 2px 1px rgba(217,210,217,1);
  height: 10vh;
  width:62vw;
  

  h4 {
     padding:10px;
  }

  div {
      margin-left:0;
      background-color:#D6D9DD;
      margin-top:3px;
      height:3vh;
      width:62vw;
     
      }

  ul {
    margin-top:6px;
    display:flex;
    justify-content: space-around;
    list-style-type: none;
    font-weight:bold;
  }
 
`
export const ButtonMaterial = styled.button`
  display:block;
  background-color:transparent;
  color:#0387D1;
  width: 141px;
  margin: 9px;
  height: 24px;
  border: 2px solid #0387D1;
`