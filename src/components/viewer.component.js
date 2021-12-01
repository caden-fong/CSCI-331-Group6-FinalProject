import React, { Component } from 'react';
import CCLogo from './../CCLogo.svg';
import p1 from './../p1.jpg';
import './../App.css'
import axios from 'axios';
import { useNavigate } from 'react-router';

const Character = props => (
  <tr>
    <td>{props.character.name}</td>
    <td>{props.character.level}</td>
    <td>{props.character.race}</td>
    <td>{props.character.class}</td>
  </tr>
)

class Viewer extends Component {
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
      <div class="container viwe">
          <div className="container-fluid">
          <div className="row viro">
            <div className="col- viewcol">
              dfsfdsf
            </div>
            <div className="col- viewcol">
              sdfs
            </div>
            <div className="col- viewcol">
              sfdd
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default (props) => {
  const navigate = useNavigate();
  return (<Viewer {...props} navigate={navigate}/>);
}