import React, { Component } from "react";
import Navbar from "../navbar";
// import { Link } from "react-router-dom";

import Burger from "../ux_resources/iconos_2/burger.png";
import Pizza from "../ux_resources/iconos_2/pizza-slice.png";
import Papatoes from "../ux_resources/iconos_2/fries.png";
import HotDog from "../ux_resources/iconos_2/hotdog.png";
import Cake from "../ux_resources/iconos_2/cupcake.png";
import Salad from "../ux_resources/iconos_2/salad.png";
import IceCream from "../ux_resources/iconos_2/mojito.png";
import Frappe from "../ux_resources/iconos_2/milkshake.png";

import BtnSaveOrder from "../btn_saveorder.js";
import PizzaMenu from "../pizza_menu";
import FoodBtn from "../food_btn";
import DataMenu from "../../menu.json";

import BtnAdd from "../btn_add";




class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indice: 0,
      coment: "",
      valueType: "",
      valueOption: "",
      quantity: 0
    };
  }

  getIndex = i => {
    this.setState({ indice: i });
  };
  


  ChangeValueSelect = e => {
    if (e.target.name === "select-type") {
      this.setState({
        valueType: e.target.value
      });
    } else if (e.target.name === "select-option") {
      this.setState({
        valueOption: e.target.value
      });
    }
  };

  ChangeQuantity = counter => {
    this.setState({
      quantity: counter
    });
  };

  AddComent = e => {
    this.setState({
      coment: e.target.value
    });
  };

 
  render() {
    return (
      <div className="menu">
        <Navbar />

        <div className="menu-draws">
          <FoodBtn
            image={Burger}
            alt="Hamburguesas"
            getIndex={this.getIndex}
            indice={DataMenu[0].id}


          />
          <FoodBtn
            image={Pizza}
            alt="Pizzas"
            getIndex={this.getIndex}
            indice={DataMenu[1].id}
          />
          <FoodBtn
            image={Papatoes}
            alt="Extras"
            getIndex={this.getIndex}
            indice={DataMenu[2].id}
          />
          <FoodBtn
            image={HotDog}
            alt="Hot Dogs"
            getIndex={this.getIndex}
            indice={DataMenu[3].id}
          />
          <FoodBtn
            image={Cake}
            alt="Postres"
            getIndex={this.getIndex}
            indice={DataMenu[4].id}
          />
          <FoodBtn
            image={Salad}
            alt="Ensaladas"
            getIndex={this.getIndex}
            indice={DataMenu[5].id}
          />
          <FoodBtn
            image={IceCream}
            alt="Soda"
            getIndex={this.getIndex}
            indice={DataMenu[7].id}
          />
          <FoodBtn
            image={Frappe}
            alt="Malteadas"
            getIndex={this.getIndex}
            indice={DataMenu[6].id}
          />
        </div>
        <div className="menu-w-summary">
          <form className="menu-buy">
            <PizzaMenu
              indice={this.state.indice}
              ChangeValueSelect={this.ChangeValueSelect}
              ChangeQuantity={this.ChangeQuantity}
            />
            <textarea
              className="comments"
              placeholder="Comentarios"
              onChange={this.AddComent}
              name="comments"
            ></textarea>
            <BtnAdd
              className="btn-green btn-green-add"
              btntext="AÑADIR"
              coment={this.state.coment}
              valueType={this.state.valueType}
              valueOption={this.state.valueOption}
              quantity={this.state.quantity}
            />
          </form>
        </div>
        <p>
          {/* Aquí se añaden los comenatrios en caso de que se ingrese algo */}
        </p>
        <BtnSaveOrder 
          btntext="ENVIAR A COCINA"
          ruta={"/Places"}
        />
      </div>
    );
  }
}

export default Menu;
