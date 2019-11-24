import React, { Component } from "react";
import Navbar from "../navbar";
import logo from "../ux_resources/Logo2017-02.png";
import Input from "../input";
import InputIncreaseDecrease from "../increase_decrease";
import BtnGreen from "../btn_green";

class OrderSummary extends Component {
  render() {
    return (
      <div className="resume-screen">
        <Navbar />

        <img src={logo} className="logo-app" alt="logo" />
        <h1 className="resume-title">Resumen de Pedido</h1>
        <Input />
        <InputIncreaseDecrease />

        <textarea className="comments" placeholder="Observaciones"></textarea>
        <br></br>
        <BtnGreen btntext="ENVIAR" onClick="/kitchen" />
      </div>
    );
  }
}

export default OrderSummary;
