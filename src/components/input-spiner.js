import React, { Component } from "react";

class InputSpiner extends Component {
  render() {
    return (
      <input
        type="number"
        name="quantity"
        min="1"
        className="input-spiner"
      ></input>
    );
  }
}

export default InputSpiner;
