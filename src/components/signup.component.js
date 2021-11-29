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

    axios.post('http://localhost:5000/users/create', newUser)
      .then(res => window.location = '/login').catch(error => this.setState({errorSignin: "Invalid sign-in, please try again.", username: '', password: ''}));
  };

  render() {
    return (
      <div>
      <h3>Create New User</h3>
      <h4>{this.state.errorSignin}</h4>
      <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
          <label>Username: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
              />
          </div>
          <div className="form-group"> 
          <label>Password: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
              />
          </div>
          <div className="form-group">
          <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
      </form>
  </div>
    )
  }
}