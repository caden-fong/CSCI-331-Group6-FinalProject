import React, { Component} from 'react';
import './../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router';


class Login extends Component {

  constructor(props) {
    super(props);
    
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: '',
      errorSignin: ''
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

    axios.post('http://localhost:5038/users/login', newUser)
      .then(res => {
        this.props.setLoginUser(res.data);
        localStorage.setItem('user', res.data);
        this.props.navigate('/profile');
      }).catch(error => this.setState({errorSignin: "Invalid login, please try again.", username: '', password: ''}));
  };

  render() {
    return (
      <>
        <div className = "container-fluid logpg">
          <div className="row">
            <div className="col-">
              <h3 className="login">Login</h3>
              <h4>{this.state.errorSignin}</h4>
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
                  <div className="form-group lsmt">
                  <input type="submit" value="Login" className="btn btn-dark" />
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

export default (props) => {
  const navigate = useNavigate();
  return (<Login {...props} navigate={navigate}/>);
}