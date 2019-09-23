import React, { Component } from "react";

import RectanglesLogin from "../rectangles_login";
import logo from "../ux_resources/Logo2017-02.png";
import CodeForm from "../code_form";

class Login extends Component {
  render() {
    return (
      <div className="login-screen">
        <RectanglesLogin />
        <div className="backg-img">
          <img src={logo} className="logo-app" alt="logo" />
          <h1 className="greeting-login">¡HOLA!</h1>
          <CodeForm />
        </div>
      </div>
    );
  }
}

export default Login;
