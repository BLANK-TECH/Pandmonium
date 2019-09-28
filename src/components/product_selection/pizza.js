import React, { Component } from "react";
import InputIncreaseDecrease from "../increase_decrease";

class PizzaMenu extends Component {
  render() {
    return (
      <table className="tag-menu-product">
        <thead>
          <tr>
            <th scope="row"></th>
            <th className="text-menu">M</th>

            <th className="text-menu">G</th>

            <th className="text-menu">F</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>CHANEQUE</th>

            <td>
              <InputIncreaseDecrease />
            </td>

            <td>
              <InputIncreaseDecrease />
            </td>

            <td>
              <InputIncreaseDecrease />
            </td>
          </tr>

          <tr>
            <th>SODOMA</th>

            <td>
              <InputIncreaseDecrease />
            </td>

            <td>
              <InputIncreaseDecrease />
            </td>

            <td>
              <InputIncreaseDecrease />
            </td>
          </tr>

          <tr>
            <th>LUJURIA</th>

            <td>
              <InputIncreaseDecrease />
            </td>

            <td>
              <InputIncreaseDecrease />
            </td>

            <td>
              <InputIncreaseDecrease />
            </td>
          </tr>

          <tr>
            <th>ÁNGEL CAÍDO</th>

            <td>
              <InputIncreaseDecrease />
            </td>

            <td>
              <InputIncreaseDecrease />
            </td>

            <td>
              <InputIncreaseDecrease />
            </td>
          </tr>

          <tr>
            <th>PURGATORIO</th>

            <td>
              <InputIncreaseDecrease />
            </td>

            <td>
              <InputIncreaseDecrease />
            </td>

            <td>
              <InputIncreaseDecrease />
            </td>
          </tr>

          <tr>
            <th>TIKI HAWAIANA</th>

            <td>
              <InputIncreaseDecrease />
            </td>

            <td>
              <InputIncreaseDecrease />
            </td>

            <td>
              <InputIncreaseDecrease />
            </td>
          </tr>

          <tr>
            <th>MARGARITA</th>

            <td>
              <InputIncreaseDecrease />
            </td>

            <td>
              <InputIncreaseDecrease />
            </td>

            <td>
              <InputIncreaseDecrease />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default PizzaMenu;
