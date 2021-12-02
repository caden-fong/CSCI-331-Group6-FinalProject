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
            this.setState({ characters: response.data });
            console.log(this.state.character);
        })
        .catch((error) => {
            console.log(error);
        });
  }

    render() {
    return (
      <div>{this.state.character.name}
      {this.state.character.level}
      {this.state.character.skills}
      {this.state.character.race}
      </div>

    )
  }
}

export default (props) => {
  const params = useParams();
  const navigate = useNavigate();
  return (<Viewer {...props} navigate={navigate} params={params}/>);
}