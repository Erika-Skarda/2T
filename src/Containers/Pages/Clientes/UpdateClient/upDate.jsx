import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
//Componentes
import Header from '../../../../Components/Header'
import Menu from  "../../../../Components/Menu";
import Button from "../../../../Components/Button";
//Estilização
import { Container, WrapperEdition,
         WrapperPhoto, WrapperData,
         CameraIcon, SyledAvatar,
         Title, CopyIcon,
         SubTitle,
         Div, WrapperAdress,
         Wrappertitle, WrapperBlock
          } from './styled';
import { Divider} from "@material-ui/core";

class UpDateClient extends Component {

  state = {
    value: '',
    copied: false,
  };
  
  render() {

    return (
  
      <Container>
      < Header 
        title ="Edição de Cliente"
        />
      < Menu 
          colorClients={true}
          bgColor={"#FAFAFA"}
       />

       <WrapperEdition>
          <WrapperPhoto>
            <div>
                <SyledAvatar 
                alt="foto de perfil" 
                src={require("../../../../Assets/flor.png")}
                />   
                < CameraIcon />
            </div>

            <Title>
              <h2>Erika Skarda</h2>
              <h3>Domínio</h3> 
            </Title>

            <Divider />
            <SubTitle>
              <span>
                <p>Clientes atendidos</p><p>20</p> 
              </span>
              <Divider />
              <h4>Ativada</h4>
            </SubTitle>
            <Divider />
            <Button 
                title="Editar Perfil"
                width="170px"
                height="50px"
                left="5vw"
                top="47.5vh"
              /> 
            <div style={{display: "inline-flex" , marginTop:"20vh", marginLeft:"3vw"}}>
              <WrapperBlock small={true} style={{color: "#0387D1"}}>
                https://www.linkedin.com/in/erika-skarda
              </WrapperBlock>
              <CopyToClipboard text="https://www.linkedin.com/in/erika-skarda">

                {/* <a href="https://www.linkedin.com/in/erika-skarda" target="blank">
                    https://www.linkedin.com/in/erika-skarda  
                </a> */}
                  <CopyIcon />
              
              </CopyToClipboard>
            </div>
         </WrapperPhoto>
         <WrapperData>
          <WrapperAdress>
            <ul>
              <li style={{fontWeight:"bold"}}>Dados Pessoais</li>
              <li>Endereço</li>
              <li>Dados de Acesso</li>
              <li>Contatos</li>
              <li>Anexos</li>
            </ul>
          </WrapperAdress>
            <Divider />

            <Div> 
              <Wrappertitle>
                <label>
                  Nome completo *
                </label>
                <WrapperBlock small={false}>
                  Erika do Nascimento Skarda
                </WrapperBlock>
              </Wrappertitle>

              <Wrappertitle>
                <label>
                  Apelido
                </label>
                <WrapperBlock small={true}>
                  erikinha
                </WrapperBlock>
              </Wrappertitle>
             </Div>

             <Div>
             <Wrappertitle>
                <label>
                  Data de Nascimento
                </label>
                <WrapperBlock small={true}>
                  01/01/0101
                </WrapperBlock>
              </Wrappertitle>

              <Wrappertitle>
                <label>
                  CPF *
                </label>
                <WrapperBlock small={true}>
                  xxx.xxx.xxx-xx
                </WrapperBlock>
               
              </Wrappertitle>
              <Wrappertitle>
                <label>
                  RG
                </label>
                <WrapperBlock small={true}></WrapperBlock>
              </Wrappertitle>
            </Div>

            <Div>
             <Wrappertitle>
                <label>
                  Telefone Principal
                </label>
                <WrapperBlock small={true}>
                  (11) 99841-6258
                </WrapperBlock>
              </Wrappertitle>
            </Div>

            <Button 
                title="Atualizar"
                width="170px"
                height="50px"
                left="43.7vw"
                top="47.5vh"

            />
        </WrapperData>

       </WrapperEdition>
    </Container>

    )
  }
}
export default UpDateClient