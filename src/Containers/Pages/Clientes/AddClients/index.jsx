import React, { Component, useState } from 'react';
//Componentes
import Header from '../../../../Components/Header'
import Menu from  "../../../../Components/Menu";
import Button from "../../../../Components/Button";
//Estilização
import { Container, WrapperForm, 
         FormControlLabelStyled,
         Form,
         TextFieldStyled,
         Div,
         Title,
         WrapperAdress,
         WrapperForm1,
         ButtonMaterial  } from './styled';
import { Table } from "../../../../Components/TableStyle/styled";
//Material-ui
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';

const createAddress = [
  {
    name: "cep",
    type: "text",
    placeholder:"CEP *",
    required: true,
    pattern: "[0-9]{5}-[0-9]{3} ",
    title:"Um CEP é constituido de 5 números um traço e mais 3 números."
  },
  {
    name: 'bairro',
    type: "text",
    placeholder:"Bairro",
    required:false
  },
  {
    name:"rua",
    type:"text",
    placeholder:"Rua",
    required:false  
  },
  {
    name:"cidade",
    type:"text",
    placeholder:"Cidade",
    required:false  
  }
]
const createAddress2 = [
  {
    name: "numero",
    type: "number",
    placeholder:"Número",
    required: false

  },
  {
    name: 'uf',
    type: "text",
    placeholder:"UF",
    required:false
  }
]

function AddClients() {
//Radio Button
  const [value, setValue] = React.useState('pessoa_fisica');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
const useForm = initialValues => {
  const [form, setForm] = useState(initialValues);

  const onChange = (name, value) => {
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  const resetForm = () => {
    setForm(initialValues);
  };
  
  return { form, onChange, resetForm };
};
const { form, onChange, resetForm } = useForm({
  nome: "",
  apelido:"",
  dominio:"",
  idade: "",  
  cpf: "",
  rg:"",
  telefone:"",
  admin: "",
  senha:"",
  confirm:"",
  cep:"",
  bairro:"",
  rua:"",
  cidade:"",
  numero:"",
  uf:""
});

const handleInputChange = event => {
  const { value, name } = event.target;

  onChange(name, value);
};

  const handleSubmit = event => {
  event.preventDefault();

  console.log(form);
};

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
                    label = "Pessoa Física"
                    />
                  <FormControlLabelStyled
                    labelPlacement="right" 
                    value="pessoa_juridica" 
                    control={<Radio />} 
                    label="Pessoa Jurídica"
                    />
                
              </RadioGroup>    
          </FormControl>
    
          {value == "pessoa_fisica" ? (
          <WrapperForm1>
          <Form onSubmit={handleSubmit}>
           <Title>
            <h2>Dados pessoais</h2>
            <small>Os campos com * são obrigatórios</small> 
           </Title>
            <Div>
              <div style={{display:"flex" , flexDirection:"column", marginLeft:"10px"}}>
                <label required  htmlFor="nome">
                  Nome completo *
                </label>
                <TextFieldStyled
                  value={form.nome}
                  onChange={handleInputChange}
                  name="nome"
                  id="nome"
                  type="text"
                  required 
                  inputProps={{ 
                    pattern: "[A-Za-z ]{3,}", 
                    title: "O nome deve conter 3 letras no mínimo" 
                  }}
                  variant="outlined" 
                  margin="normal"
                  width="30vw"

                
                />
              </div>

              <div style={{display:"flex" , flexDirection:"column"}}>
                <label shrink htmlFor="apelido">
                  Apelido
                </label>
                <TextFieldStyled
                  value={form.apelido}
                  onChange={handleInputChange}
                  name="apelido"
                  id="apelido"
                  type="text"
                  inputProps={{ 
                    pattern: "[A-Za-z ]{3,}", 
                    title: "O nome deve conter 3 letras no mínimo" 
                  }}
                  variant="outlined"
                  margin="normal"
                  width="15vw"
                  
                />
              </div>
              <div style={{display:"flex" , flexDirection:"column"}}>
                <label required = {true} shrink htmlFor="dominio">
                  Domínio *
                </label>
                <TextFieldStyled
                  value={form.dominio}
                  onChange={handleInputChange}
                  name="dominio"
                  id="dominio"
                  type="text"
                  required = {true}
                  inputProps={{ 
                    pattern: "[A-Za-z ]{3,}", 
                    title: "O nome deve conter 3 letras no mínimo" 
                  }}
                  variant="outlined" 
                  margin="normal"
                  width="15vw"
                />  
              </div>
             </Div>
             <Div>
              <div style={{display:"flex" , flexDirection:"column", marginLeft:"10px"}}>
                <label htmlFor="data">
                  Data De Nascimento
                </label>
                <TextFieldStyled
                  value={form.data}
                  onChange={handleInputChange}
                  name="data"
                  id="data"
                  type="date"
                  variant="outlined" 
                  margin="normal"
                  width="14.7vw"
                />
              </div>

              <div style={{display:"flex" , flexDirection:"column"}}>
                <label shrink htmlFor="cpf">
                  CPF *
                </label>
                <TextFieldStyled
                  value={form.cpf}
                  onChange={handleInputChange}
                  name="cpf"
                  id="cpf"
                  type="text"
                  inputProps={{ 
                    pattern:"\d{3}\.\d{3}\.\d{3}-\d{2}" ,
			              title:"Digite um CPF no formato: xxx.xxx.xxx-xx"
                  }}
                  variant="outlined"
                  margin="normal"
                  width="14.7vw"
                  
                />
              </div>
              <div style={{display:"flex" , flexDirection:"column"}}>
                <label shrink htmlFor="rg">
                  RG
                </label>
                <TextFieldStyled
                  value={form.rg}
                  onChange={handleInputChange}
                  name="rg"
                  id="rg"
                  type="text"
                  inputProps={{ 
                    pattern:"\\d{2}.\\d{2}.\\d{3}\\s\\w{3}/\\w{2}",
                    title:"Digite um CPF no formato:12 345 678-9."
                  }}
                  variant="outlined" 
                  margin="normal"
                  width="15vw"
                />  
              </div>
              <div style={{display:"flex" , flexDirection:"column"}}>
                <label shrink htmlFor="telefone">
                  Telefone Principal *
                </label>
                <TextFieldStyled
                  value={form.telefone}
                  onChange={handleInputChange}
                  name="telefone"
                  id="telefone"
                  type="tel"
                  required={true}
                  inputProps={{ 
                    pattern: "\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}$" , 
                    title: "Digite um telefone válido"
                  }}
                  variant="outlined" 
                  margin="normal"
                  width="15vw"
                />  
              </div>
             </Div>
             < Title>
              <h2>Dados De Acesso</h2>
              <small>Os campos com * são obrigatórios</small> 
             </Title>
             <Div>
              <div style={{display:"flex" , flexDirection:"column", marginLeft:"10px"}}>
                <label required  htmlFor="admin">
                  Usuário Administrador *
                </label>
                <TextFieldStyled
                  value={form.admin}
                  onChange={handleInputChange}
                  name="admin"
                  id="admin"
                  type="text"
                  required 
                  inputProps={{ 
                    pattern: "[A-Za-z ]{3,}", 
                    title: "O nome deve conter 3 letras no mínimo" 
                  }}
                  variant="outlined" 
                  margin="normal"
                  width="15vw"
                />
              </div>

              <div style={{display:"flex" , flexDirection:"column"}}>
                <label shrink htmlFor="senha">
                  Senha *
                </label>
                <TextFieldStyled
                  value={form.senha}
                  onChange={handleInputChange}
                  name="senha"
                  id="senha"
                  type="password"
                  inputProps={{ 
                    pattern:"[A-Za-z0-9]{6,10}",
                    title:"Digite no mínimo 6 caracteres"
                  }}
                  variant="outlined"
                  margin="normal"
                  width="15vw"
                />
              </div>
              <div style={{display:"flex" , flexDirection:"column"}}>
                <label shrink htmlFor="confirmar">
                  Confirmar Senha *
                </label>
                <TextFieldStyled
                  value={form.rg}
                  onChange={handleInputChange}
                  name="corfirmar"
                  id="confirmar"
                  type="password"
                  inputProps={{ 
                    pattern:"[A-Za-z0-9]{6,10}",
                    title:"Digite no mínimo 6 caracteres"
                  }}
                  variant="outlined" 
                  margin="normal"
                  width="15vw"
                />  
              </div>
             </Div>
             <Title>
                <h2>Informações Adicionais</h2>
                <small>Os campos com * são obrigatórios</small> 
             </Title>
             <>
             <Div>
             {createAddress.map(field => (
              <TextFieldStyled
                key={field.name}
                name={field.name}
                type={field.type}
                value={form[field.name] || ""} 
                placeholder={field.placeholder}
                label={field.label}
                required={field.required}
                onChange={handleInputChange}
                variant="outlined"
                margin="normal"
                width="15vw"
                InputProps={{
                  endAdornment: field.endAdornment,
                  inputProps: {
                      pattern: field.pattern,
                      title: field.title
                  }
                }}
              
            /> ))}
            </Div>
            <Div>
             {createAddress2.map(field => (
              <TextFieldStyled
                key={field.name}
                name={field.name}
                type={field.type}
                value={form[field.name] || ""} 
                placeholder={field.placeholder}
                label={field.label}
                required={field.required}
                onChange={handleInputChange}
                variant="outlined"
                margin="small"
                width="15vw"
                InputProps={{
                  endAdornment: field.endAdornment,
                  inputProps: {
                      pattern: field.pattern,
                      title: field.title
                  }
                }}
              
            /> ))}
            </Div>
            <ButtonMaterial>
              Adicionar Endereço
            </ButtonMaterial>
           </>
            <WrapperAdress style={{display:"flex" , flexDirection:"column"}}>
              <h4>Endereços Cadastrados</h4>
              <div>
                <ul>
                  <li>CEP</li>
                  <li>Bairro</li>
                  <li>Rua</li>
                  <li>Cidade</li>
                </ul>
              </div>
            </WrapperAdress>
               <Button 
                title="Salvar Dados"
                width="150px"
                height="37px"
                left="58.7vw"
                top="95.5vh"
              /> 
         </Form>
         </WrapperForm1>
         ) : <div>Gabi é vacilona = Joao é vacilão = Ivana é vacilona</div>}
        </WrapperForm>
      </Table>

    </Container>  

  )
  }

export default AddClients