import React, { Component } from "react";
import { connect } from 'react-redux';

import Menu from  "../../../Components/Menu";
import Header from "../../../Components/Header";
import { Container } from './styled';

function DashBoard() {

    return (

        <Container>
          < Menu 
            color={true} 
            title="Dashboard"
          />
         
      
        </Container>
    )
  }

       
     
export default connect(null, null)(DashBoard)