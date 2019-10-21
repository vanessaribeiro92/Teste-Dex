import React, {Component} from "react"
import FormSignUp from "./FormSignUp"

export default class ContainerSignUP extends Component{
    render(){
        return(
            <div className="container">
                <img className="img-fluid" id="orange" src="/assets/logo.png" alt="Orange"/>
                <FormSignUp />
            </div>
        );
    }
}
