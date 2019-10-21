import React, {Component} from 'react'

export default class Checkbox extends Component {
    render(){
        return(
            <div className="form-check">
                <input type={this.props.type} className="form-check-input" name={this.props.name} defaultChecked={this.props.checked} onChange={this.props.onChange}/>
                <label className={this.props.className} htmlFor={this.props.htmlFor}>{this.props.label}</label>
            </div>
        );
    }
}