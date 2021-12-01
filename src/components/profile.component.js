import React, { Component } from 'react';
import './../App.css';
import { useNavigate } from 'react-router';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

    render() {
      if(!this.props.user.id) {
        return null;
      }
    return (
      <>
        <div className= "container-fluid userinfo">
          <h3 className="userp">{this.props.user.username}'s Characters</h3>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col- prf">
              <div className="card indchar">
                <div className="card-body">
                  <h5 className="card-title">P</h5>
                  <a href="#" className="btn btn-dark stretched-link">View</a>
                </div>
              </div>
            </div>
            <div className="col- prf">
              <div className="card indchar">
                <div className="card-body">
                  <h5 className="card-title">P</h5>
                  <a href="#" className="btn btn-dark stretched-link">View</a>
                </div>
              </div>
            </div>
            <div className="col- prf">
              <div className="card indchar">
                <div className="card-body">
                  <h5 className="card-title">P</h5>
                  <a href="#" className="btn btn-dark stretched-link">View</a>
                </div>
              </div>
            </div>
            <div className="col- prf">
              <div className="card indchar">
                <div className="card-body">
                  <h5 className="card-title">P</h5>
                  <a href="#" className="btn btn-dark stretched-link">View</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default (props) => {
  const navigate = useNavigate();
  return (<Profile {...props} navigate={navigate}/>);
}