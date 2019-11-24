import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <input
        placeholder={this.props.placeholder}
        className={this.props.classCSS}
        type={this.props.typeInput}
        onChange={this.props.onChange}
        required
      ></input>
    );
  }
}

export default Input;
