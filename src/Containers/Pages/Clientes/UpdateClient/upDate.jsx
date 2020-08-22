import React, { Component, useState } from 'react';
//Componentes
import Header from '../../../../Components/Header'
import Menu from  "../../../../Components/Menu";
import Button from "../../../../Components/Button";
//Estilização
import { Container, WrapperEdition,
         WrapperPhoto, WrapperData,
         CameraIcon, SyledAvatar,
         Div, WrapperAdress,
         Wrappertitle, WrapperBlock
          } from './styled';
import { Divider} from "@material-ui/core";
class UpDateClient extends Component {
  
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
            <div >
                <SyledAvatar 
                alt="foto de perfil" 
                src={require("../../../../Assets/flor.png")}
                
              
                />   
                < CameraIcon />
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
                <WrapperBlock>
                  Erika do Nascimento Skarda
                </WrapperBlock>
              </Wrappertitle>

              <Wrappertitle>
                <label shrink htmlFor="apelido">
                  Apelido
                </label>
               
              </Wrappertitle>
              {/* <Wrappertitle>
                <label required = {true} shrink htmlFor="dominio">
                  Domínio *
                </label>
              
              </Wrappertitle> */}
             </Div>

        </WrapperData>

       </WrapperEdition>
    </Container>

    )
  }
}
export default UpDateClient