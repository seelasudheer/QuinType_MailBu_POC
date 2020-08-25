import React, { Component } from "react";
import Navbars from "./Navbars";
import Content from "./Content";

export class Mailbu extends Component {
  render() {
    return (
      <div>
        <Navbars />
        <Content />
      </div>
    );
  }
}

export default Mailbu;
