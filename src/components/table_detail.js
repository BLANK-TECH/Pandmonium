import React, { Component } from "react";

import AddRow from "./table_components/a_row";

class TableDetail extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Concepto Detalle Cantidad</th>
          </tr>
        </thead>
        <tbody>
          <AddRow completeArray={this.props.completeArray} />
        </tbody>
      </table>
    );
  }
}

export default TableDetail;
