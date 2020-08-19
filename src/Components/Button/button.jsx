import React from "react";
import { ButtonStyled } from "./styled";

const Button = (props) => {

    return(
       
       <ButtonStyled type="button" width={width} height={height}>           
         
         {props.title}
    
       </ButtonStyled>
       
    )

};

