import React, {Component} from 'react'

export default class Button extends Component{
    render(){
        return(
            <button type={this.props.type} className={this.props.className}>{this.props.value}</button>
        );
    }
}