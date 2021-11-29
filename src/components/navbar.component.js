
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './../CCLogo.svg';
import './../App.css'

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 'Not logged in.'
    }

    if (this.props.user._id) {
      this.state.id = this.props.user._id;
    }

  }

  render() {
    return (
      <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand"><img src={Logo} style={{width:50}} className="img-responsive" alt="Character Companion Logo"/>Character Companion</Link>
          <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
            <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="navbar-item">
            <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="navbar-item">
            <Link to="/more" className="nav-link">More D&D</Link>
            </li>
            <li className="navbar-item">
            <Link to="#" className="nav-link">User ID: {this.state.id}</Link>
            </li>
          </ul>
          <div className= "navbar-nav2 ms-auto"><button className="btn btn-sm btn-outline-secondary" type="button"><Link to="/sign-up" className= "button">Sign up</Link></button></div>
          </div>
        </div>
      </nav>
      </>
    );
  }
}