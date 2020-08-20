import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import * as redirectAction from "../../Actions/redirectAction";
import { connect } from 'react-redux';

import { SideBar, 
         DashBoardIcon,
         ClientsIcon,
         FinancialIcon,
         MessageIcon,
         IdCardIcon,
         SectionTitle,
         StyledSection} from "./styled"; 

class Menu extends React.Component {
  state = {
    open: false,
  };


  render() {
    const {  redirecttoDashBoard, redirecttoClients ,
             bgColor, color, colorClients, title } = this.props;
   
    return (

      <StyledSection>

        <SectionTitle> 
          <h2> {title}</h2>
 
        </SectionTitle>
         
        <SideBar>
          <img src={require("../../Assets/logo.png")} />
          <ul bgColor={bgColor}>
              {color ?
                (<li  style={{backgroundColor:"#FAFAFA"}}
                    onClick={redirecttoDashBoard}
                >
                  < DashBoardIcon /> Dashboard</li>
                ) : (
                  <li  style={{backgroundColor:"#F2F2F2"}}
                      onClick={redirecttoDashBoard}
                >
                  < DashBoardIcon /> Dashboard</li>)
              }

              {colorClients ?
                ( <li style={{backgroundColor:"#FAFAFA"}}
                    onClick={redirecttoClients }
                  >
                    <ClientsIcon /> Clientes</li>
                ) : (
                  <li  style={{backgroundColor:"#F2F2F2"}}
                  onClick={redirecttoClients }
              >
                <ClientsIcon /> Clientes</li>)
            }
              <li>
                <IdCardIcon /> Colaboradores
              </li>
              <li>
                < FinancialIcon /> Financeiro
              </li>
              <li>
              <MessageIcon /> Mensagens
              </li>

          </ul>
        </SideBar>  
      </StyledSection>
    );
  }
}


const mapDispatchToProps = (dispatch) => 
    bindActionCreators(redirectAction,dispatch)
        
export default connect(null, mapDispatchToProps)(Menu)

