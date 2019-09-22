import React, { Component } from "react";
import PlaceSelection from "../Placeselectionbar";
import Input from "../input";
import BtnGreen from "../btn_green";
import Bars from "../bars";
import Tables from "../tables";
import Navbar from "../navbar";



class Places extends Component {
  state = {
    number: null
  }
  
  changeTitle = (title,background) =>{
    if(background == null){
      this.setState({
        number: title
      }) 
    }else{
      this.setState({
        number: null
      }) 
      }
    }   
  
  
  render() {
    return (
      <div className="places-screen">
        <Navbar />
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

        <div className="rectangle-tabar-selection">
          {/* Debería de cambiar texto según la selección */}
          <PlaceSelection place={this.state.number} />
        </div>
        <form className="people-name-number">
          <p>Personas</p>
          <Input classCSS="people-number" typeInput="number" />
          <br></br>
          <p>Nombre del cliente</p>
          <Input classCSS="input-name" typeInput="text" />
          <BtnGreen btntext="ABRIR MESA" />
        </form>
      </div>

    )
  }
}

export default Places;
