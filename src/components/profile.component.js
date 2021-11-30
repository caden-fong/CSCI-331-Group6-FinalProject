import React, { Component } from 'react';
import profilepic from './../profilepic.svg';
import './../App.css'

export default class Profile extends Component {
  constructor(props) {
    super(props);

  }

    render() {
    return (
      <>
        <div className= "container-fluid">
          <img src={profilepic} className= "profilelogo" alt="Character Creator Logo"/>
          <h3 className="userp">dsfsdfdsfdsfsde</h3>
        </div>
      </>
    )
  }
}