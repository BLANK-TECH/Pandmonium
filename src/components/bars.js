import React, { Component } from "react";


class Bars extends Component {
  state = {
    background: null
  }
  changeColor = () =>{
    if(this.state.background == null){
      this.setState({
        background: '#39bf4d',
      })
    }
    else{
      this.setState({
        background: null,
      })   
    }   
  }
  handleChange= (e) => {
    const title = this.props.number;
    // console.log(title);
    this.changeColor()
    this.props.changeTitle(title,this.state.background);
  }
  render() {
    return (
    <button className="bars-btn"
    onClick={this.handleChange} 
    style={{backgroundColor: this.state.background}}
    >{this.props.number}</button>
    )
}
}



export default Bars;
