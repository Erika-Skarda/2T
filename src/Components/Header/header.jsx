import React from 'react';
import {  SectionTitle, Div } from "./styled"; 

class Header extends React.Component {
  

  render() {
    const { title } = this.props;
   
    return (
        <>
        <SectionTitle> 
          <h2>{title}</h2>
       
        </SectionTitle>   
        <Div></Div>
      </>

    )
  }
}
export default Header