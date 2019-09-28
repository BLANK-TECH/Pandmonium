import React, { Component } from "react";

class MenuProduct extends Component {
  render() {
    return <div className="menu-buy">{this.props.productSelected}</div>;
  }
}

export default MenuProduct;
