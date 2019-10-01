import React, { Component } from "react";
import "./index.css";
import "./App.css";
import Login from "./components/pages/login";
import Places from "./components/pages/places";
import DetailPlace from "./components/pages/detail_place";
import AccountList from "./components/pages/account_list";
import Menu from "./components/pages/menu";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router basename={window.location.pathname || ""}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Places" component={Places} />
          <Route path="/Menu" component={Menu} />
          <Route path="/DetailPlace" component={DetailPlace} />
          <Route path="/AccountList" component={AccountList} />
        </Switch>
      </Router>
    );
  }
}

export default App;
