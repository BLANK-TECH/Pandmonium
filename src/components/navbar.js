import React, { Component } from "react";
import SideBar from "./sidebar";
// import Menu from "../components/ux_resources/menu-button.png";
import Logo from "../components/ux_resources/pdm_l-01.png";

class Navbar extends Component {
  render() {
    return (
      <div>
        <SideBar pageWrapId={"App"} outerContainerId={"App"} />
        <nav className="navbar">
          {/* <img src={Menu} className="menu-ham" alt="menú"></img> */}
          <img src={Logo} className="logo-nav" alt="logotipo"></img>
        </nav>
      </div>
    );
  }
}

export default Navbar;
