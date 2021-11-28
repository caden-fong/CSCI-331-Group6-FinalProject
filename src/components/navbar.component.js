
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './../CCLogo.svg';

export default class Navbar extends Component {

  render() {
    return (
      <>
      <nav className="navbar fixed-top navbar-light bg-primary navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand"><img src={Logo} style={{width:60}} className="img-responsive" alt="Character Companion Logo" />Character Companion</Link>
          <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
            <Link to="/" className="nav-link">Exercises</Link>
            </li>
            <li className="navbar-item">
            <Link to="/create" className="nav-link">Create Exercise Log</Link>
            </li>
            <li className="navbar-item">
            <Link to="/user" className="nav-link">Create User</Link>
            </li>
          </ul>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-light bg-primary navbar-expand-lg" style={{visibility:'hidden', marginBottom:20}}>
        <div className="container">
          <img src={Logo} style={{width:60}} className="img-responsive" alt="Character Companion Logo" />
          <div className="collpase navbar-collapse">
          </div>
        </div>
      </nav>
      </>
    );
  }
}