import React, { Component } from "react";
import Navbar from "../navbar";
import GreenRectangle from "../green_rectangle";
import FormNameNumber from "../number_name_form";
import BtnGreen from "../btn_green";
import Bars from "../bars";
import Tables from "../tables";
import { Link } from "react-router-dom";

class Places extends Component {
  state = {
    number: null
  };

  changeTitle = (title, background) => {
    if (background == null) {
      this.setState({
        number: title
      });
    } else {
      this.setState({
        number: null
      });
    }
  };

  render() {
    return (
      <div className="places-screen">
        <Navbar />
        <div className="tables-bars">
          <div className="bar">
            <Bars number="1" changeTitle={this.changeTitle} />
            <Bars number="2" changeTitle={this.changeTitle} />
            <Bars number="3" changeTitle={this.changeTitle} />
          </div>

          <div className="tables">
            <Tables number="MESA 1" changeTitle={this.changeTitle} />
            <Tables number="MESA 2" changeTitle={this.changeTitle} />
            <Tables number="MESA 3" changeTitle={this.changeTitle} />
          </div>

          <div className="bar">
            <Bars number="4" changeTitle={this.changeTitle} />
            <Bars number="5" changeTitle={this.changeTitle} />
            <Bars number="6" changeTitle={this.changeTitle} />
            <Bars number="7" changeTitle={this.changeTitle} />
            <Bars number="8" changeTitle={this.changeTitle} />
          </div>

          <div className="tables">
            <Tables number="MESA 4" changeTitle={this.changeTitle} />
            <Tables number="MESA 5" changeTitle={this.changeTitle} />
          </div>
        </div>

        <GreenRectangle
          classCSS="rectangle-tabar-selection"
          place={this.state.number}
        />

        <FormNameNumber classCSS="people-name-number" />
        <Link to="/Menu">
          <BtnGreen btntext="ABRIR MESA" />
        </Link>
      </div>
    );
  }
}

export default Places;
