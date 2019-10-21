import React, { Component } from "react";

export default class Divider extends Component {
  render() {
    return (
      <div>
        <div className="divider">
          <hr />
          <span className="or">ou</span>
          <hr />
        </div>
      </div>
    );
  }
}