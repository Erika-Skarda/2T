import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as redirectAction from "../../../Actions/redirectAction";
//Componentes
import Menu from  "../../../Components/Menu";
import Header from "../../../Components/Header";
import CustomizedTablesClients from '../../../Components/ClientTable'
import Button from "../../../Components/Button";
//Estilização
import { Container, Table} from './styled';

class Clientes extends Component {
  
  render() {

  const { redirecttoAddClients } = this.props;
  return (
 
         <Container>
          < Header 
            title ="Clientes"
            />
          < Menu 
             colorClients={true}
              bgColor={"#FAFAFA"}
          />
          <Table>  
              <header></header>
              <Button 
                title="Adicionar Cliente"
                width="230px"
                height="55px"
                left="55vw"
                top="10vh"
                red={redirecttoAddClients}
              />
            < CustomizedTablesClients />
          </Table>
       </Container>
  )
  }
}
const mapDispatchToProps = (dispatch) => 
    bindActionCreators(redirectAction,dispatch)
        
export default connect(null, mapDispatchToProps)(Clientes)
       