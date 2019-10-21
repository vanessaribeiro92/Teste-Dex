import React, {Component} from "react";
import {Link} from 'react-router-dom';

import Divider from "../inputs/Divider";
import FormSignIn from "./FormSignIn";

export default class ContainerUser extends Component{
    render(){
        return(
            <div className="container">
                <img className="img-fluid" id="orange" src="/assets/logo.png" alt="Orange"/>

                <FormSignIn />

                <Divider content="or"/>

                <Link className="sign-up btn btn-primary" to="/signup">Cadastrar</Link>
                
                <p className="terms-of-use">Termos de uso  •  Politica de privacidade</p>
            </div>
        );
    }
}

