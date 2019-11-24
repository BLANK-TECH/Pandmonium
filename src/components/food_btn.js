import React, { Component } from "react";

class FoodBtn extends Component {
  state = {
    background: null
  };

  changeColor = () => {
    if (this.state.background === null) {
      this.setState({
        background: "#a8c82f"
      });
    } else if (this.state.background === "#a8c82f") {
      this.setState({
        background: null
      });
    }
  };
  onClick = () => {
    this.changeColor();
    this.props.getIndex(this.props.indice, this.state.background);
  };

  render() {
    return (
      <button
        className="btn-product"
        onClick={this.onClick}
        style={{ backgroundColor: this.state.background }}
      >
        <img
          src={this.props.image}
          alt={this.props.alt}
          className={this.props.styleCSS}
        ></img>
      </button>
    );
  }
}

export default FoodBtn;
