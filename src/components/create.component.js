import React, { Component } from 'react';
import './../App.css'

export default class Create extends Component {
  constructor(props) {
    super(props);

  }

    render() {
      if(!this.props.user.id) {
        window.location = "/login";
        return null;
      }
    return (
      <div className= "container-fluid">
      </div>
    )
  }
}