import React, { Component } from 'react';
import './../App.css'

export default class More extends Component {
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
      <div className= "container-fluid">
        <p>{this.props.user._id}</p>
      

      <div className = "container-fluid logpg">
      <h3>User:</h3>
      <h4>{this.state.id}</h4>
      </div>
      <div className="spacing">.</div>
      </div>

    )
  }
}