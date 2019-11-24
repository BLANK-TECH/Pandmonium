import React, { Component } from "react";
class Tables extends Component {
  state = {
    background: null
  };

  changeColor = () => {
    if (this.state.background == null) {
      this.setState({
        background: "#a8c82f"
      });
    } else {
      this.setState({
        background: null
      });
    }
  };

  handleChange = e => {
    const title = this.props.number;
    // console.log(title);
    this.changeColor();
    this.props.changeTitle(title, this.state.background);
  };
  render() {
    return (
      <button
        className={this.props.CSSclass}
        onClick={this.handleChange}
        style={{ backgroundColor: this.state.background }}
      >
        {this.props.number}
      </button>
    );
  }
}
export default Tables;
