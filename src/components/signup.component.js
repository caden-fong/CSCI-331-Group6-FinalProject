import React, { Component } from 'react';
import axios from 'axios';
import './../App.css'

export default class Signup extends Component {
  constructor(props) {
    super(props);
    
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: '', 
      errorSignin:''
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onSubmit (e) {
    e.preventDefault();

    const newUser = {
      username: this.state.username,
      password: this.state.password
    };

    axios.post('https://character-companion-api.herokuapp.com/users/add', newUser)
      .then(res => window.location = '/login').catch(error => this.setState({errorSignin: "Invalid sign-in, username should be unique and strong passwords are required.", username: '', password: ''}));
  };

  render() {
    return (
      <>
        <div className = "container-fluid logpg">
          <div className="row">
            <div className="col-">
              <h3 className="login">Create New User</h3>
              <h6 style={{color:"red", textAlign:"center"}}>{this.state.errorSignin}</h6>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group"> 
                  <label className ='entuse'>Username: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={this.state.username}
                      onChange={this.onChangeUsername}
                      />
                  </div>
                  <div className="form-group"> 
                  <label className ='entpas'>Password: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                      />
                  </div>
                  <div className="form-group  lsmt">
                  <input type="submit" value="Create User" className="btn btn-dark" />
                  </div>
              </form>
            </div>
          </div>
        </div>
        <div className="spacing">.</div>
      </>  
    )
  }
}