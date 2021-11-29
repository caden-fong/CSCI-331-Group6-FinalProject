import React, { Component } from 'react';
import './../App.css'
import axios from 'axios';

const Character = props => (
  <tr>
    <td>{props.character.name}</td>
    <td>{props.character.level}</td>
    <td>{props.character.race}</td>
    <td>{props.character.class}</td>
  </tr>
)
export default class Viewer extends Component {
  constructor(props) {
    super(props);
    this.state = {characters: []}

  }
  componentDidMount() {
    axios.get('http://localhost:5038/characters/')
        .then(response => {
            this.setState({ characters: response.data });
            console.log(this.state.characters);
        })
        .catch((error) => {
            console.log(error);
        })
  }

  characterList() {
    return this.state.characters.map(currentcharacter => {
      return <Character character={currentcharacter}/>;
    })
  }


    render() {
    return (
      <div class="container-fluid morestuff">
      <h3>List of Characters</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Name</th>
            <th>Level</th>
            <th>Race</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          { this.characterList() }
        </tbody>
      </table>
      </div>
    )
  }
}