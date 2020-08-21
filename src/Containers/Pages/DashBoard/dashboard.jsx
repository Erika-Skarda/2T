import React, { Component } from "react";
import { connect } from 'react-redux';
//Componentes
import Menu from  "../../../Components/Menu";
import Header from "../../../Components/Header";
import CustomizedTables from '../../../Components/Table'
//Estilização
import { Container } from './styled';
import { theme } from "../../../Styles/global";
import { Table } from "../../../Components/TableStyle/styled";

function DashBoard() {


    return (

        <Container>
          < Header 
            title ="Dashboard"
           />
          < Menu 
            color={true} 
          />
          <Table>
          < CustomizedTables />
          </Table>
         
      
        </Container>
    )
  }

       
     
export default connect(null, null)(DashBoard)