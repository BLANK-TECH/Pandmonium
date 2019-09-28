import React, { Component } from "react";

import Navbar from "../navbar";
import FormNameNumber from "../number_name_form";
import AccountPerGuest from "../account_guest";
import GreenRectangle from "../green_rectangle";

class DetailPlace extends Component {
  render() {
    return (
      <div className="detail_screen">
        <Navbar />

        <GreenRectangle classCSS="rectangle-tabar-detail" />

        <FormNameNumber classCSS="people-number-detail" />

        <AccountPerGuest />
        <AccountPerGuest />
      </div>
    );
  }
}

export default DetailPlace;
