import React, { Component } from "react";
import BackgroundLogin from "./BackgroundLogin";
import ContainerUser from "./ContainerUser";

export default class LoginPage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">&nbsp;</div>
          <div className="col-4 container-login">
            <ContainerUser />
          </div>
          <div className="col-6">
            <BackgroundLogin src="/assets/bg.jpg" alt="Orange" className="img-responsive bg-login" />
          </div>
        </div>
      </div>
    );
  }
}