
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './../CCLogo.svg';
import './../App.css';
import { useNavigate } from 'react-router';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout (e) {
    this.props.logout({}); 
    localStorage.clear();
    window.location = "/login";
  }

  render() {
    if (this.props.user.id) {
      return (
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/profile" className="navbar-brand"><img src={Logo} style={{width:50}} className="img-responsive" alt="Character Companion Logo"/>Character Companion</Link>
          <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
            <Link to="/profile" className="nav-link">My Characters</Link>
            </li>
            <li className="navbar-item">
            <Link to="/create" className="nav-link">Create a Character</Link>
            </li>         
            <li className="navbar-item">
            <Link to="/more" className="nav-link">More D&D</Link>
            </li>      
          </ul>
          <div className= "navbar-nav2 ms-auto"><button className="btn btn-sm btn-outline-secondary" type="button" onClick={this.onLogout}>Log Out</button></div>
          </div>
        </div>
      </nav>
      );
    }
    return (
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
          </ul>
          <div className= "navbar-nav2 ms-auto"><button className="btn btn-sm btn-outline-secondary" type="button"><Link to="/sign-up" className= "button">Sign up</Link></button></div>
          </div>
        </div>
      </nav>
    );
  }
}

export default (props) => {
  return (<Navbar {...props} navigate={useNavigate}/>);
}