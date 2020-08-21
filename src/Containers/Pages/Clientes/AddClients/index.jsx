import React, { Component, useState } from 'react';
//Componentes
import Header from '../../../../Components/Header'
import Menu from  "../../../../Components/Menu";
import Button from "../../../../Components/Button";
//Estilização
import { Container, WrapperForm, 
         FormControlLabelStyled } from './styled';
import { Table } from "../../../../Components/TableStyle/styled";
//Material-ui
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';


function AddClients() {
//Radio Button
  const [value, setValue] = React.useState('pessoa_fisica');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
//form 

const [state , setState] = useState({
  name:"",
  email : "",
  password : "",
  successMessage: null
})
const handleChangeForm = (e) => {
  const {name , value} = e.target   
  setState(prevState => ({
      ...prevState,
      [name] : value
  }))
}
  return (

    <Container>
      < Menu 
        colorClients={true}
        bgColor={"#FAFAFA"}
      />
      < Header 
        title ="Adicionar Clientes"
      />
      <Table>
        <header></header>
        <WrapperForm>
          <FormControl component="fieldset">
              <RadioGroup row aria-label="position" 
                value={value} 
                onChange={handleChange}>
                  <FormControlLabelStyled
                    value="pessoa_fisica" 
                    control={<Radio />} 
                    label="Pessoa Física" />
                  <FormControlLabelStyled
                    labelPlacement="right" 
                    value="pessoa_juridica" 
                    control={<Radio />} 
                    label="Pessoa Jurídica"
                    />
              </RadioGroup>    
             
          </FormControl>
    
          {value == "pessoa_fisica" ? 
            
          <form>
            <input
              name = "nome"
              type = "text"
              value = {state.value}
              label = "Nome completo"
              required
              title = "Preencha corretamente"
              pattern =  "[a-z0-9_.+-%]+@[a-z0-9.-]+\.[a-z]{3,}$" 
              onChange={handleChangeForm}
            >
            </input>
           
         </form>
      
          : <div>tchau</div>}
        </WrapperForm>
      </Table>

    </Container>  

  )
  }

export default AddClients