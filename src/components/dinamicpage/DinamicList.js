import React, {Component} from "react";
import {Redirect} from "react-router-dom";

// Dinamic Page
import Navbar from "./Navbar";
import DinamicPage from "./DinamicPage";

// Services
import {ValidateSession} from "../../services/ValidateSession";
import {LogoutService} from '../../services/LogoutService';

//Authentification
import {Auth} from "../../Auth";

export default class DinamicList extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: false
        }
        this.logout = this.logout.bind(this);
    }

    componentWillMount() {
        ValidateSession().then((result) => {
            if(result.code === 209){
                Auth.signout(() => {
                    this.setState({redirect: true});
                });
                sessionStorage.removeItem('X-Parse-Session-Token');
                sessionStorage.clear();
            }
        });
    }

    logout(){
        const token = sessionStorage.getItem("X-Parse-Session-Token");
        sessionStorage.removeItem('X-Parse-Session-Token');
        sessionStorage.clear();
        LogoutService(token).then((result) => {
            Auth.signout(() => {
                this.setState({redirect: true});
            });
        });
    }

    render(){
        if (this.state.redirect === true) {
            return <Redirect to='/' />
        }
        return(
            <div>
                <Navbar page={this.props.page} logout={this.logout}/>
                <DinamicPage title={this.props.title} function={this.props.function}/>
            </div>
        );
    }

}