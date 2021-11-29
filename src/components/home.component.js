import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import gather from './../gather.png';
import './../App.css'

export default class Home extends Component {

    render() {
    return (
      <>
      <div className= "container-fluid test">
        Your D&D Adventure Begins Today!
        <h2><Link to="/sign-up" className ="today">Sign up to start creating free D&D charactes</Link></h2>
      </div>
      <div className= "container-fluid next">
        <button type="button" className="btn btn-dark btn-lg"><Link to="/sign-up" className= "button">Get Started</Link></button>
      </div>
      </>
    )
  }
}