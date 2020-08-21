import React from "react";
import { ButtonStyled } from "./styled";

const Button = (props) => {

    return(
       
       <ButtonStyled type="submit" 
          width={props.width} 
          height={props.height}
          left={props.left}
          top={props.top}
          onClick={props.red}
       >           
         
         {props.title}
    
       </ButtonStyled>
       
    )

};

export default Button;