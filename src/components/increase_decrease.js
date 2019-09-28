import React, { Component } from "react";

class InputIncreaseDecrease extends Component {
  render() {
    return (
      <div className="form-inc-dec">
        <button type="button" className="btn-inc-dec">
          -
        </button>
        <input type="number" className="pizza-input"></input>
        <button type="button" className="btn-inc-dec increase">
          +
        </button>
      </div>
    );
  }
}

export default InputIncreaseDecrease;
