import React, {Component} from "react";
import {Redirect} from "react-router-dom";
// Inputs
import Input from "../../inputs/Input"
import Checkbox from "../../inputs/Checkbox"
import Button from "../../inputs/Button"

//Registrar
import {Register} from '../../services/Register'


export default class FormSignUp extends Component{

    constructor(props){
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
        this.signup = this.signup.bind(this);
    }

    checkboxChange(event){
        this.inputChange(event);
        event.target.checked ? this.setState({typePassword: "text"}) : this.setState({typePassword: "password"});
    }

    inputChange(event){
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({[name]: value});
    }

    signup(event){
        event.preventDefault();
        Register(this.state).then(response => {
            if(response.code === 202){
               this.setState({msgErrorValidation:response.error});
            }else{
                sessionStorage.setItem("X-Parse-Session-Token", response.sessionToken);
                Auth.authenticate(() => {
                    this.setState({redirect: true});
                });
            }
        });
    }

    render(){

        if (this.state.redirect === true) {
            return <Redirect to='/food' />
        }

        return(
            <div>
                <form className="form" onSubmit={this.signup}>
                    <Input label="Email" htmlFor="email" value={this.state.email} onChange={this.inputChange} type="email" name="email" className="form-control" placeholder="seunome@email.com"/>
                    <Input label="Password" htmlFor="password" value={this.state.password} onChange={this.inputChange} type={this.state.typePassword} name="password" className="form-control" placeholder="Password"/>
                    <Checkbox label="Mostrar senha." htmlFor="show-password" checked={this.state.checkbox} onChange={this.checkboxChange} type="checkbox" name="checkbox" className="form-check-label"/>
                    <span className="text-danger">{this.state.msgErrorValidation}</span>
                    <Button type="submit" className="sign-up btn btn-primary" value="Cadastrar"/>
                </form>
            </div>
        );
    }
}