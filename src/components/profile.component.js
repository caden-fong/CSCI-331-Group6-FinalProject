import React, { Component } from 'react';
import './../App.css';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Character = props => (
    <div className="col- prf">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">{props.character.name}</h1>
          <p>{props.character.race} {props.character.class}, level {props.character.level}</p>
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
    axios.get('https://character-companion-api.herokuapp.com/characters/user/' + this.props.user.id)
        .then(response => {
            this.setState({ characters: response.data });
        })
        .catch((error) => {
            console.log(error);
        });
  }

<<<<<<< HEAD
=======
  componentDidUpdate() {
    if(this.props.user.id) {
      axios.get('https://character-companion-api.herokuapp.com/characters/user/' + this.props.user.id)
        .then(response => {
            this.setState({ characters: response.data });
        })
        .catch((error) => {
            console.log(error);
        });
    }
  }

>>>>>>> c4097d636a3b6e126eea67f971d7774d77fb4d4c
  characterList() {
    return this.state.characters.map(character => {
      return <Character key={character._id} character={character}/>;
    });
  }

  render() {
      if(!this.props.user.id) {
        return null;
      }
      if(this.state.characters.length <= 0) {
        return (
          <>
          <div className= "container-fluid userinfo">
            <h3 className="userp">{this.props.user.username}'s Characters</h3>
          </div>
          <div className="fillerSpace">h</div>
          </>);
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
          <div className="fillerSpace2">h</div>
        </div>
      </>
    )
  }
}

export default (props) => {
  const navigate = useNavigate();
  return (<Profile {...props} navigate={navigate}/>);
}