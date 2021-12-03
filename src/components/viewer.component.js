import React, { Component } from 'react';
import './../App.css'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';

class Viewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      character: {},
      classInfo: {},
      backgroundInfo: '',
      raceInfo: ''
    };
  }

  componentDidMount() {
    axios.get('/characters/' + this.props.params.id)
        .then(response => {
            this.setState({ character: response.data, classInfo: response.data.stats });
        })
        .catch((error) => {
            console.log(error);
        });
    axios.get('/backgrounds/')
        .then(response => {
          let newbackground = response.data.find( background => background.name == this.state.character.background);
          let characteristics = newbackground.entries.find(entry => entry.name == "Suggested Characteristics");
          this.setState({ 
            backgroundInfo: characteristics.entries[0]
          });
        })
        .catch(function (error) {
          console.log(error);
        })
    axios.get('/races/')
        .then(response => {
          console.log("race");
          console.log(this.state.character.race);
          let currentRace = response.data.find(race => race.name == this.state.character.race)
          this.setState({ 
            raceInfo: currentRace.entries[3].entries[0]
          });
        })
        .catch(function (error) {
          console.log(error);
        })
  }

  deleteCharacter() {
    axios.delete('/characters/' + this.state.character._id)
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }

    render() {
      if(!this.state.character._id) {
        return null;
      }
    return (
      <div className="container create">
        <p>{this.state.character.name} the {this.state.character.class}</p>
          <div className="row creatrow">
            <div className="col-sm creatview">
              Name: {this.state.character.name}
            </div>
            <div className="col-sm creatview">
              Class: {this.state.character.class}
            </div>
            <div className="col-sm creatview">
              Level: {this.state.character.level}
            </div>
            <div className="col-sm creatview">
              Alignment: {this.state.character.alignment}
            </div>
          </div>
          <div className="row creatrow">
            <div className="col-sm creatview">
              Race: {this.state.character.race}<p/>{this.state.raceInfo}
            </div>
            <div className="col-sm creatview">
              Background: {this.state.character.background}<p/>{this.state.backgroundInfo}
            </div>
          </div>
          <div className="row creatrow">
            <div className="col-sm creatview">
              Strength: <p style={{textAlign: "center", marginBottom: "0px"}}>{Math.floor((this.state.character.stats[0].strength - 10)/2)}</p>
            </div>
            <div className="col-sm creatview">
              Dexterity: <p style={{textAlign: "center", marginBottom: "0px"}}>{Math.floor((this.state.character.stats[0].dexterity - 10)/2)}</p>
            </div>
            <div className="col-sm creatview">
              Constitution: <p style={{textAlign: "center", marginBottom: "0px"}}>{Math.floor((this.state.character.stats[0].constitution - 10)/2)}</p>
            </div>
            <div className="col-sm creatview">
              Intelligence: <p style={{textAlign: "center", marginBottom: "0px"}}>{Math.floor((this.state.character.stats[0].intelligence - 10)/2)}</p>
            </div>
            <div className="col-sm creatview">
              Wisdom: <p style={{textAlign: "center", marginBottom: "0px"}}>{Math.floor((this.state.character.stats[0].wisdom - 10)/2)}</p>
            </div>
            <div className="col-sm creatview">
              Charisma: <p style={{textAlign: "center", marginBottom: "0px"}}>{Math.floor((this.state.character.stats[0].charisma - 10)/2)}</p>
            </div>
          </div>
          <div className="row creatrow">
            <div className="col-sm creatview">
              Personality Traits: {this.state.character.personalityTraits}
            </div>
            <div className="col-sm creatview">
              Ideals: {this.state.character.ideals}
            </div>
            <div className="col-sm creatview">
              Bonds: {this.state.character.bonds}
            </div>
            <div className="col-sm creatview">
              Flaws: {this.state.character.flaws}
            </div>
          </div>
          <div className="row creatrow">
            <div className="col-sm creatview">
              Proficency Bonus: {Math.ceil(this.state.character.level / 4) + 1}
            </div>
            <div className="col-sm creatview">
              Initiative: {Math.floor((this.state.character.stats[0].dexterity - 10)/2)}
            </div>
            <div className="col-sm creatview">
              Passive Perception: {10 + Math.floor((this.state.character.stats[0].wisdom - 10)/2)}
            </div>
          </div>
          <Link to="/profile" className="btn btn-dark del" onClick={() => this.deleteCharacter()}>Delete</Link>
      </div>    
    )
  }
}

export default (props) => {
  const params = useParams();
  const navigate = useNavigate();
  return (<Viewer {...props} navigate={navigate} params={params}/>);
}