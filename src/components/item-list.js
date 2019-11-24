import React, { Component } from "react";
import Delete from "../components/ux_resources/delete.png";


class ItemList extends Component {
  deleteOrden = () => {};
  // componentWillMount =() =>{}
  
  
  

  render() {
    return (
      <div>
        <table className="table_products">
          <tbody>
            <tr>
              <th>Concepto</th>
              <th>Detalle</th>
              <th>Cantidad</th>
              <th>Eliminar</th>
            </tr>

            {this.props.itemName.map((producto, i) => {
              return (
                <tr key={i}>
                  <td>{producto.type}</td>
                  <td>{producto.option}</td>
                  <td>x {producto.quantity}</td>
                  <td>
                    <button onClick={this.deleteOrden}>
                      <img src={Delete} alt="Eliminar"></img>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ItemList;