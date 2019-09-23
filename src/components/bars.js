import React, { Component } from "react";

class Bars extends Component {
  render() {
    return <button className="bars-btn">{this.props.number}</button>;
  }
}

export default Bars;
