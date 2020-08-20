import React, { Component } from "react";
import { connect } from 'react-redux';
// import {bindActionCreators} from "redux";
//  import * as UserAction from "../../Actions/userPage";
import Menu from  "../../../Components/Menu";

class Clientes extends Component {
  constructor(props) {
      super(props)
      this.state = {

      }
  };

  render() {
  return (
    <div>
       < Menu colorClients={true} bgColor={"#FAFAFA"}/>
    </div>
  )
  }
}
// const mapDispatchToProps = (dispatch) => 
//   bindActionCreators(UserAction,dispatch)
       
     
export default connect(null, null)(Clientes)