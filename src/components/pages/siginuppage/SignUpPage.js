import React, {Component} from "react"
import ContainerSignUP from "./ContainerSignUP";

export default class SignUpPage extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">&nbsp;</div>
                    <div className="col-4 container-login">
                        <ContainerSignUP/>
                    </div>
                    <div className="col-4">
                    </div>
                </div>
            </div>
        );
    }
}
