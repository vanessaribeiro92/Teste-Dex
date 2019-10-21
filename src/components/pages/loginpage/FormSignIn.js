import React, { Component } from "react"
import { Redirect } from "react-router-dom"
// Inputs
import Input from "../../inputs/Input"
import Checkbox from "../../inputs/Checkbox"
import Button from "../../inputs/Button"
// services
import { LoginService } from '../../../services/LoginService'
//Validation
import { ValidateSession } from "../../../services/ValidateSession";

export default class FormSignIn extends Component {

 constructor(props) {
  super(props);
  this.state = {
   email: "",
   password: "",
   checkbox: "",
   typePassword: "password",
   msgErrorValidation: "",
   redirect: false
  }
  this.inputChange = this.inputChange.bind(this);
  this.checkboxChange = this.checkboxChange.bind(this);
  this.login = this.login.bind(this);
 }

 checkboxChange(event) {
  this.inputChange(event);
  event.target.checked ? this.setState({ typePassword: "text" }) : this.setState({ typePassword: "password" });
 }

 inputChange(event) {
  const target = event.target;
  const value = target.type === "checkbox" ? target.checked : target.value;
  const name = target.name;

  this.setState({ [name]: value });
 }

 login(event) {
  event.preventDefault();
  LoginService(this.state).then((result) => {
   if (result.code === 101) {
    this.setState({ msgErrorValidation: result.error });
   } else {
    sessionStorage.setItem("X-Parse-Session-Token", result.sessionToken);
    Auth.authenticate(() => {
     this.setState({ redirect: true });
    });
   }
  });
 }

 componentWillMount() {
    ValidateSession().then((result) => {
     if (result.code !== 209) {
      Auth.authenticate(() => {
       this.setState({ redirect: true });
      });
     }
    });
   }

 render() {

  if (this.state.redirect === true) {
   return <Redirect to='/food' />
  }


  return (
   <div>
    <form className="form" onSubmit={this.login}>
     <Input label="Email" htmlFor="email" value={this.state.email}
      onChange={this.inputChange} type="email" name="email"
      className="form-control" placeholder="seunome@email.com" />
     <Input label="Password" htmlFor="password" value={this.state.password}
      onChange={this.inputChange} type={this.state.typePassword} name="password"
      className="form-control" placeholder="Password" />
     <Checkbox label="Mostrar a senha." htmlFor="show-password" checked={this.state.checkbox}
      onChange={this.checkboxChange} type="checkbox" name="checkbox"
      className="form-check-label" />
     <span className="text-danger">{this.state.msgErrorValidation}</span>
     <p className="problems-with-acess">Problemas para acessar sua conta?</p>
     <Button type="submit" className="btn btn-primary sign-in" value="Acessar" />
    </form>
   </div>
  );
 }
}