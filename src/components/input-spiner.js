import React, { Component } from "react";

class InputSpiner extends Component {
  render() {
    return (
      <input
        type="number"
        name="quantity"
        min="1"
        className="input-spiner"
        required
      ></input>
    );
  }
}

export default InputSpiner;
