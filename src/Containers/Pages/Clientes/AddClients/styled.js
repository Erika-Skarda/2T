import styled from 'styled-components'
import { theme } from "../../../../Styles/global"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
 


export const Container = styled.div`

 

`
export const WrapperForm = styled.span`
    display:flex;
    flex-direction:column;
    margin-left:5vw;
    margin-top:1vh;

`
export const FormControlLabelStyled = withStyles((theme) => ({

      label: {

        fontSize:"1.5rem",
        color: "#516373",
        
      }
}))(FormControlLabel);

