import React, { Component } from "react";

class Tables extends Component {
  render() {
    return <button className="table-btn">{this.props.number}</button>;
  }
}

export default Tables;
