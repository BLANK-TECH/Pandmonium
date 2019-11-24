import React, { Component } from "react";
import Navbar from "../navbar";
import Input from "../input";
import InputIncreaseDecrease from "../increase_decrease";
import BtnGreen from "../btn_green";
import { Link } from "react-router-dom";

class Summary extends Component {
  render() {
    return (
      <div className="resume-screen">
        <Navbar />

        <h1 className="resume-title">Resumen de Pedido</h1>
        <Input />
        <InputIncreaseDecrease />

        <textarea className="comments" placeholder="Observaciones"></textarea>
        <br></br>

        <Link to="/total">
          <BtnGreen btntext="ENVIAR" onClick={this.onClick} />
        </Link>
      </div>
    );
  }
}

export default Summary;
