import React, { Component } from "react";
// state = {
  // name: this.props.value
// };

// console.log(this.state.name);

class Input extends Component {
  render() {
    return (
      <input
        placeholder={this.props.placeholder}
        className={this.props.classCSS}
        type={this.props.typeInput}
      ></input>
    );
  }
}

export default Input;
