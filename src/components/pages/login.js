import React, { Component } from "react";

import logo from "../ux_resources/logo_white-01.png";
import CodeForm from "../code_form";

class Login extends Component {
  render() {
    return (
      <div className="login-screen">
        <div className="backg-img">
          <img src={logo} className="logo-app" alt="logo" />

          <h1 className="greeting-login">¡Hola!</h1>

          <CodeForm />
        </div>
      </div>
    );
  }
}
export default Login;
