import React, {Component} from 'react';

export default class Input extends Component {
    render(){
        return(
            <div className="form-group">
                <label htmlFor={this.props.htmlFor}>{this.props.label}</label>
                <input type={this.props.type} name={this.props.name} className={this.props.className} onChange={this.props.onChange} placeholder={this.props.placeholder} value={this.props.value} required />
            </div>
        );
    }
}