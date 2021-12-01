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
        <div className= "container-fluid userinfo">
          <img src={profilepic} className= "profilelogo" alt="Character Creator Logo"/>
          <h3 className="userp">dsfsdfdsfdsfsde</h3>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col- prf">
              <div className="card indchar">
                <div className="card-body">
                  <h5 className="card-title">Player's Handbook</h5>
                  <a href="#" class="btn btn-dark stretched-link">View</a>
                </div>
              </div>
            </div>
            <div className="col- prf">
              <div className="card indchar">
                <div className="card-body">
                  <h5 className="card-title">Player's Handbook</h5>
                  <a href="#" class="btn btn-dark stretched-link">View</a>
                </div>
              </div>
            </div>
            <div className="col- prf">
              <div className="card indchar">
                <div className="card-body">
                  <h5 className="card-title">Player's Handbook</h5>
                  <a href="#" class="btn btn-dark stretched-link">View</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}