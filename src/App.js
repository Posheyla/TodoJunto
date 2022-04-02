import React from 'react';
import Usuario from "./Componentes/Usuario";
import './App.css'


class App extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      usuarios : [{
        nombre: "Jane",
        apellido: "Doe",
        edad: 25,
        color: 'Black',
        id: 123
      },
      {
        nombre: "John",
        apellido: "Smith",
        edad: 88,
        color: 'Brown',
        id: 456
      },
      {
        nombre: "Millard",
        apellido: "Filmore",
        edad: 50,
        color: 'Brown',
        id: 789
      },
      {
        nombre: "Maria",
        apellido: "Smith",
        edad: 62,
        color: 'Brown',
        id: 912
      }
    ]
    }
  }

  aumentarEdad = (idUsuario) => {
    
    let usuariosActualizados = this.state.usuarios;
    for( let i = 0; i < usuariosActualizados.length; i++){
      if(usuariosActualizados[i].id === idUsuario){

        usuariosActualizados[i].edad += 1;
      }
    }
    this.setState({
      usuarios : usuariosActualizados
    });
  }


  render(){
    const {usuarios} = this.state;
    return(
    <div>
      <h1>
        Lista de usuarios
      </h1>
      <div>
        {
          usuarios.map((usuario,indice) => {
            return(<Usuario usuario ={usuario} aumentarEdad={this.aumentarEdad} key={'usuario_'+indice}></Usuario>);
              })
        }
        
      </div>
    </div>
    );
  }
}

export default App;
