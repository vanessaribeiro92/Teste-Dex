import React, {Component} from "react";

export default class DinamicImage extends  Component{
    render(){
        return(
            <div className="col-lg-4 col-md-4 col-6 ">
                <a href="#" className="d-block mb-4 h-100 ">
                    <img className="img-fluid shadow" src={this.props.src} alt={this.props.alt} width="100%"/>
                </a>
            </div>
        );
    }
}
