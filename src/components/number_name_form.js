import React, { Component } from "react";

import Input from "../components/input";
import InputSpiner from "../components/input-spiner";

class FormNameNumber extends Component {
  render() {
    return (
      <form className={this.props.classCSS}>
        <label>Personas</label>
        <InputSpiner />
        <br></br>
        <label>Nombre del cliente</label>
        <Input classCSS="input-name" typeInput="text" />
      </form>
    );
  }
}

export default FormNameNumber;