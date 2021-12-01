import React, { Component } from 'react';
import './../App.css';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Character = props => (
    <div className="col- prf">
      <div className="card indchar">
        <div className="card-body">
          <h5 className="card-title">Player's Handbook</h5>
          <a href="#" className="btn btn-dark stretched-link">View</a>
        </div>
      </div>
    </div>
);

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    axios.get('/characters/user/' + this.props.user.id)
        .then(response => {
            this.setState({ characters: response.data });
        })
        .catch((error) => {
            console.log(error);
        });
  }

  characterList() {
    return this.state.exercises.map(currentexercise => {
      return <Character exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    });
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
            {this.characterList()}
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