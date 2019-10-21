import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
 render() {
  return (
   <div className="bg-white fixed-top shadow">

    <div className="container">

     <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <img className="navbar-brand" src="/assets/logo.png" alt="Orange" />
      <div className="collapse navbar-collapse">
       <ul className="nav navbar-nav ml-auto">

        <li className={`nav-item ${this.props.page === 'foods' ? 'active' : ''}`}>
         <Link className="nav-link" to="/food">FOODS</Link>
        </li>

        <li className={`nav-item ${this.props.page === 'peoples' ? 'active' : ''}`}>
         <Link className="nav-link" to="/people">PEOPLES</Link>
        </li>

        <li className={`nav-item ${this.props.page === 'places' ? 'active' : ''}`}>
         <Link className="nav-link" to="/place">PLACES</Link>
        </li>

        <li className="nav-item">
         <Link className="nav-link" to="/" onClick={this.props.logout}>LOGOUT</Link>
        </li>
        
       </ul>
      </div>
     </nav>
    </div>
   </div>
  );
 }
}