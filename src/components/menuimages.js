import React, { Component } from "react";

class FoodBtn extends Component {
  render() {
    return (
      <button onClick={this.handleClick}>
        <img src={this.props.image} alt={this.props.alt}></img>
      </button>
    );
  }
}

export default FoodBtn;
