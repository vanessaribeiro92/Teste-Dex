import React, {Component} from 'react'

export default class BackgroundLogin extends Component{
    render(){
        return (
            <div>
                <img className={this.props.className} src={this.props.src} alt={this.props.alt}/>
            </div>
        );
    }
}