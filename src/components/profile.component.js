import React, { Component } from 'react';
import './../App.css'

export default class More extends Component {
  constructor(props) {
    super(props);

  }

    render() {
    return (
      <div className= "container-fluid">
        <p>{this.props.user._id}</p>
      </div>
    )
  }
}