
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './../CCLogo.svg';
import './../App.css'

export default class Navbar extends Component {

  render() {
    return (
      <>
      <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand"><img src={Logo} style={{width:50}} className="img-responsive" alt="Character Companion Logo"/>Character Companion</Link>
          <div className="collpase navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="navbar-item">
            <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="navbar-item">
            <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="navbar-item">
            <Link to="/sign-up" className="nav-link">Sign-up</Link>
            </li>
            <li className="navbar-item">
            <Link to="/more" className="nav-link">More D&D</Link>
            </li>
          </ul>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-light navbar-expand-lg" style={{visibility:'hidden', marginBottom:20}}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand"><img src={Logo} style={{width:50}} className="img-responsive" alt="Character Companion Logo" />Character Companion</Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav ms-auto">
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
      </>
    );
  }
}