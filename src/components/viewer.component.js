import React, { Component } from 'react';
import CCLogo from './../CCLogo.svg';
import p1 from './../p1.jpg';
import './../App.css'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';

class Viewer extends Component {
  constructor(props) {
    super(props);

    this.state = {character: {}};
  }

  componentDidMount() {
    axios.get('/characters/' + this.props.params.id)
        .then(response => {
            this.setState({ character: response.data });
            console.log(this.state.character);
        })
        .catch((error) => {
            console.log(error);
        })
  }


    render() {
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
              Race: {this.state.character.race}
            </div>
            <div className="col-sm creatview">
              Subclass: {}
            </div>
            <div className="col-sm creatview">
              Background: {this.state.character.background}
            </div>
          </div>
          <div className="row creatrow">
            <div className="col-sm creatview">
              Strength: {}
            </div>
            <div className="col-sm creatview">
              Dexterity: {}
            </div>
            <div className="col-sm creatview">
              Constitution: {}
            </div>
            <div className="col-sm creatview">
              Intelligence: {}
            </div>
            <div className="col-sm creatview">
              Wisdom: {}
            </div>
            <div className="col-sm creatview">
              Charisma: {}
            </div>
          </div>
          <div className="row creatrow">
            <div className="col-sm creatview">
              Proficency Bonus: {this.state.character.proficiencyBonus}
            </div>
            <div className="col-sm creatview">
              Inspiration: {}
            </div>
            <div className="col-sm creatview">
              Perception: {}
            </div>
          </div>
          <input type="submit" value="Delete" className="btn btn-dark del" />
      </div>    
    )
  }
}

export default (props) => {
  const params = useParams();
  const navigate = useNavigate();
  return (<Viewer {...props} navigate={navigate} params={params}/>);
}