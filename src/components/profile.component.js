import React, { Component } from 'react';
import './../App.css';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Character = props => (
    <div className="col- prf">
      <div className="card indchar">
        <div className="card-body">
          <h5 className="card-title">{props.character.name}</h5>
          <p>{props.character.class}, level {props.character.level}</p>
          <p>{props.character.race}</p>
          <Link className="btn btn-dark stretched-link" to={"/viewer/"+props.character._id}>view</Link>
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
    return this.state.characters.map(character => {
      return <Character character={character}/>;
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