import React, { Component } from "react";

import Navbar from "../navbar";
import AccountPerGuest from "../account_guest";
import GreenRectangle from "../green_rectangle";

class DetailPlace extends Component {
  render() {
    return (
      <div className="detail_screen">
        <Navbar />

        <GreenRectangle classCSS="rectangle-tabar-detail" />

        <div className="people-number-detail">
          <span className="label-detail">No. Personas </span>
          <span className="data-detail"></span>
          <br></br>
          <span className="label-detail">Nombre </span>
          <span className="data-detail"></span>
        </div>
        <div className="table-detail-container">
          <AccountPerGuest />
          <AccountPerGuest />
          <AccountPerGuest />
          <AccountPerGuest />
          <AccountPerGuest />
          <AccountPerGuest />
        </div>
      </div>
    );
  }
}

export default DetailPlace;
