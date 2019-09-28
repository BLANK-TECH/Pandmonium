import React, { Component } from "react";

import Bars from "../components/bars";
import Tables from "../components/tables";

class PlacesContainer extends Component {
  render() {
    return (
      <div className="tables-bars">
        <div className="bar">
            <Bars number="1" changeTitle={this.changeTitle}/>
            <Bars number="2" changeTitle={this.changeTitle}/>
            <Bars number="3" changeTitle={this.changeTitle}/>
        </div>

        <div className="tables">
        <Tables number="MESA 1" changeTitle={this.changeTitle}/>
            <Tables number="MESA 2" changeTitle={this.changeTitle}/>
            <Tables number="MESA 3" changeTitle={this.changeTitle}/>
        </div>

        <div className="bar">
        <Bars number="4" changeTitle={this.changeTitle}/>
            <Bars number="5" changeTitle={this.changeTitle}/>
            <Bars number="6" changeTitle={this.changeTitle}/>
            <Bars number="7" changeTitle={this.changeTitle}/>
            <Bars number="8" changeTitle={this.changeTitle}/>
        </div>

        <div className="tables">
        <Tables number="MESA 4" changeTitle={this.changeTitle}/>
        <Tables number="MESA 5" changeTitle={this.changeTitle}/>
        </div>
      </div>
    );
  }
}

export default PlacesContainer;
