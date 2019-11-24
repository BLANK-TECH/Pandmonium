import React, { Component } from "react";
import { Redirect } from "react-router-dom";

// import BtnGreen from "../components/btn_green";
import firebaseApp from "../firebase";
// import { Link } from "react-router-dom";
// import { Redirect } from 'react-router';

class CodeForm extends Component {
  constructor(props) {
    super(props); //Inicializamos el state con los atributos que queremos que tenga.
    this.state = {
      noEmpleado: "", //Esta vinculada con el input
      nombre: "", //No se muestra, no hay un input para mostrarlo
      valid: null, //En esta propiedad vamos a guardar true si encuentra el noEmpleado y false si no lo encuentra en firebase.
      message: ""
    };
    console.log(this.state.valid);
  } //Esta funcion actualiza las propiedades de state dependiendo del input que lo llame, //por eso el input debe tener el mismo nombre que la propiedad state que se quiere modificar. //en este formulario solo tenemos un input que tiene name='noEmpleado', por eso solo esa variable se actualiza.

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({ usuario: state });
  }; //Esta funcion la vinculamos con el boton validar.

  onClick = e => {
    //Guardamos en una constante el nombre que vamos a buscar, y lo obtenemos del state.
    const nameToSearch = this.state.noEmpleado; //Para poder llamar al state dentro de la query, declaramos una variable global con la referencia al objeto this.
    var self = this; //Ejecutamos una consulta where dentro de firebase, especificamos el nombre de la coleccion, que en este caso es usuario //Especificamos el campo por el que vamos a buscar, en este caso noEmpleado //especificamos el operador relacional, en este caso == //Especificamos el valor que vamos a buscar, en este caso es nameToSearch, que es donde guardamos this.state.noEmpleado
    firebaseApp
      .firestore()
      .collection("empleado")
      .where("noEmpleado", "==", nameToSearch)
      .get()
      .then(function(querySnapshot) {
        //Inicializamos el state vacio, de esta manera lo reseteamos y lo llenamos con los valores que encontremos en firebase.
        self.setState({
          noEmpleado: "",
          nombre: "",
          valid: false,
          message: "USUARIO NO REGISTRADO"
        }); //Recorremos con un foreach el objeto querySnapshot, el cual contiene el resultado de la busqueda.
        querySnapshot.forEach(function(doc) {
          //Solo para debug, agregamos un console.log que escribe en la consola los datos encontrados
          // console.log(doc.id, " => ", doc.data());
          //Si encontró un doc (doc es un registro)
          if (doc.exists) {
            //doc.data contiene el los campos del registro que encontró.
            const usuario = doc.data(); //Por medio de la variable self (que apunta a this), actualizamos el state con setState
            self.setState({
              noEmpleado: usuario.noEmpleado,
              nombre: usuario.nombre,
              valid: true, //Actualizamos valid a true, porque ahora si puede pasar.
              message: ""
            });
          }
        }); //Ponemos un catch por si ocurre un error
      })
      .catch(function(error) {
        //Si ocurre un error lo escribimos en la consola
        console.log("Error getting user: ", error);
      });
  };

  render() {
    const { noEmpleado } = this.state;
    return (
      <form className="input-btn-form">
        <p className="unregistrer-msn">{this.state.message}</p>
        <input
          placeholder="Ingresa tu código"
          value={noEmpleado}
          name="noEmpleado"
          className="input-login"
          type="password"
          onChange={this.onChange}
        />
        <br></br>
        <button type="button" className="btn-green" onClick={this.onClick}>
          ENTRAR
        </button>
        {this.state.valid ? <Redirect to="/places" /> : ""}
      </form>
    );
  }
}

export default CodeForm;
