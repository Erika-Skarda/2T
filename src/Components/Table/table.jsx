import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
//Estilização
import { StyledTableCell,
         StyledTableRow,
         TableCell3,
         StyledTable } from './styled';

 function createData(status, name, login, clients) {
   return { status, name, login, clients };
 }
 
 const rows = [
   createData('Ausente', 'Erika', "10/05/2020 12:30", "20"),
   createData('Atendimento', 'Gabriela', "10/05/2020 12:30", "1000"),
   createData('Almoço', 'João', "10/05/2020 12:30", "200"),
   createData('Disponível', 'Ivana', "10/05/2020 12:30", "400"),
   createData('Descanso', 'Amanda', "10/05/2020 12:30", "500"),
  ];

  const statusToColor = {

    Ausente: "#E94E60",
    Atendimento: "#86C7A4",
    Almoço: "#F6E3BB",
    Disponível: "#8DD4E3",
    Descanso: "#C9A0B4"
  
  }

export default class CustomizedTables extends React.Component {


  render(){
  return (
    
      <StyledTable aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell align="right">Nome do Colaborador</StyledTableCell>
            <StyledTableCell align="right">Horário de Login</StyledTableCell>
            <StyledTableCell align="right">Clientes Atendidos</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow color={statusToColor[row.status]} key={row.name}>
              <TableCell3 component="th" scope="row">
              {row.status}
              </TableCell3>
               <TableCell3 align="right"><Avatar>H</Avatar>{row.name}</TableCell3> 
              <TableCell3 align="right">{row.login}</TableCell3>
              <TableCell3 align="right">{row.clients}</TableCell3>
            </StyledTableRow>
          ))}
        </TableBody>
      </StyledTable>
  
  );}
}
