import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { theme } from "../../Styles/global";
import styled from 'styled-components';
import { withStyles} from '@material-ui/core/styles';

export const StyledTableCell = withStyles((theme) => ({
    head: {
  
      color: "#516373",
      fontSize:"1.3rem",
  
    }
  }))(TableCell);
  
  
export const StyledTableRow = styled(TableRow) `
  
    &:nth-of-type(odd) {
  
      background-color: ${theme.bege};
      
    }
    && {
      color:${(props) => props.color};
      }
  
`
export const TableCell3 = styled(TableCell) `
  
  && {
        color:inherit;
        font-weight: 500;
        font-size: 1rem;
     } 
  
`
  
export const StyledTable = withStyles((theme) => ({
    root: {
      width: "94%",
      marginLeft: "2.3vw",
      display: "table",
      marginTop: "50px"
     
    },
    body: {
      height: "70vh",
      width: "92%",
      zindex: "1",
      position: "absolute",
      left: "23vw",
      bottom: "7vh"
    }
  
}))(Table)