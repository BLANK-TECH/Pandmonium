import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import * as firebase from 'firebase'


class Pagar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          pendiente: '',
          id:localStorage.getItem('id')
                };
      }

      componentDidMount() {
        const ref = firebase.firestore().collection('pedidos').doc(this.state.id);
        ref.get().then((doc) => {
          if (doc.exists) {
            const board = doc.data();
            this.setState({
              pendiente: board.pendiente
            });
          } else {
            console.log("No such document!");
          }
        });
      }
 
  onClick = e =>{
            
          
    e.preventDefault();
    const { pendiente } = this.state;
    const {history} = this.props

    const updateRef = firebase.firestore().collection('pedidos').doc(this.state.id);
    updateRef.set({
      pendiente
    }).then((docRef) => {
      this.setState({
        pendiente: true
      });
      history.push(this.props.ruta);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
    
      
      

   }
     
  render() {
    return (
      
      <button 
      type="button" 
      className="btn-green"
      onClick={this.onClick}>
        {this.props.btntext}
      </button>

    );
  }
}

export default withRouter(Pagar);