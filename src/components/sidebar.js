import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <Link className="menu-item" to="/Menu">
        Menú
        <br />
        <br />
        <hr></hr>
      </Link>
      <Link className="menu-item" to="/DetailPlace">
        Asignación de lugar
        <br />
        <br />
        <hr></hr>
      </Link>
      <Link className="menu-item" to="/">
        Cerrar sesión
        <br />
        <br />
        <hr></hr>
      </Link>
      {/* <a className="menu-item" href="/AccountList"> */}
      {/* <Link className="menu-item" to="/AccountList">
        Cuentas Abiertas
      </Link>  */}
      {/* </a> */}
    </Menu>
  );
};
