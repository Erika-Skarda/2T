import React, { Component } from 'react';
import { connect } from "react-redux";
import { toggleStatus } from "../../Actions/actions";
import { bindActionCreators } from "redux";
import * as redirectAction from "../../Actions/redirectAction";
//Material-ui
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//Estilização
import { StyledTableCell,
         StyledTableRow,
         TableCell3,
         StyledTable } from './styled';

import Switch from "react-switch";

function createData( id, status, name, cpf, contato, tipo, data ) {
   return { id, status, name, cpf, contato, tipo, data };
 }

 const rows = [
   createData("1", false, 'Erika', "66.587.156/0001-29","(11) 4119-3000", "Pessoa Jurídica", "10/10/2020"),
   createData("2", true, 'Gabriela', "66.587.156/0001-29", "(11) 4119-3000","Pessoa Jurídica", "10/10/2020"),
   createData("3", false, 'João', "70306008513","(11) 4119-3000", "Pessoa Física", "10/10/2020"),
   createData("4", true, 'Ivana', "66.587.156/0001-29","(11) 4119-3000", "Pessoa Jurídica", "10/10/2020"),
   createData("5", false, 'Amanda', "70306008513","(11) 4119-3000", "Pessoa Física", "10/10/2020"),
  ];


class CustomizedTablesClients extends React.Component {
  constructor() {
    super();
    this.state = { checked: createData.status };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange() {
    this.setState({ checked : !this.state.checked });
  }

 render(){
  const { redirecttoUpDateClient } =this.props;
  return (
    
      <StyledTable aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell align="right">Nome do Cliente</StyledTableCell>
            <StyledTableCell align="right">CPF/CNPJ</StyledTableCell>
            <StyledTableCell align="right">Contato</StyledTableCell>
            <StyledTableCell align="right">Tipo</StyledTableCell>
            <StyledTableCell align="right">Data Venc</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow  key={row.name}>
              <TableCell3 component="th" scope="row">
              <Switch 
                onColor="#8DD4E3"
                offColor="#E94E60"
                uncheckedIcon={false}
                checkedIcon={false}
                onChange={this.handleChange} 
                checked={row.status} 
              />
              </TableCell3>
              {row.id != 1 ? (<TableCell3 align="right">{row.name}</TableCell3>
              ) : ( 
              <TableCell3 align="right" onClick={redirecttoUpDateClient}>{row.name}</TableCell3>)}
              <TableCell3 align="right">{row.cpf}</TableCell3>
              <TableCell3 align="right">{row.contato}</TableCell3>
              <TableCell3 align="right">{row.tipo}</TableCell3>
              <TableCell3 align="right">{row.data}</TableCell3>
            </StyledTableRow>
          ))}
        </TableBody>
      </StyledTable>
  
    );
  }
}
const mapStateToProps = state => {
  return {

    clientList: state.actions && state.actions.clientList
 
  };
};

const mapDispatchToProps = (dispatch) => 
    bindActionCreators(redirectAction,dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(CustomizedTablesClients);