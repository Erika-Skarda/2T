import React from 'react';
import {  SectionTitle, Div, 
          NotificationIcon, DownArrowIcon } from "./styled"; 


class Header extends React.Component {
  

  render() {
    const { title } = this.props;
   
    return (
      <>
        <SectionTitle> 
          <h2>{title}</h2>
          <NotificationIcon />
          <img src={require("../../../src/Assets/icone.PNG")}/>
          <h3>Erika Skarda <DownArrowIcon /></h3>
        </SectionTitle>
           
        <Div></Div>
      </>

    )
  }
}
export default Header