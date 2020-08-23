import React, { Component } from "react";
import { connect } from 'react-redux';
//Componentes
import Menu from  "../../../Components/Menu";
import Header from "../../../Components/Header";
import CustomizedTables from '../../../Components/Table'
//Estilização
import { Container, Table, WrapperGraphics } from './styled';
import { theme } from "../../../Styles/global";

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
            <WrapperGraphics>
              <img src={require("../../../Assets/grafico1.PNG")} alt="gráfico"/>
              <img src={require("../../../Assets/grafico2.PNG")} alt="gráfico"/>
              <img src={require("../../../Assets/grafico3.PNG")} alt="gráfico"/>
            </WrapperGraphics>
          < CustomizedTables />
         </Table>
        </Container>
    )
  }

       
     
export default connect(null, null)(DashBoard)