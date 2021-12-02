import React, { Component } from 'react';
import CCLogo from './../CCLogo.svg';
import p1 from './../p1.jpg';
import './../App.css'
import axios from 'axios';
import { useNavigate } from 'react-router';

class Viewer extends Component {
  constructor(props) {
    super(props);
    this.state = {characters: []}


  }

  componentDidMount() {
    axios.get('/characters/')
        .then(response => {
            this.setState({ characters: response.data });
            console.log(this.state.characters);
        })
        .catch((error) => {
            console.log(error);
        })
  }


    render() {
    return (
      <div className="container create">
        <p>{this.props.user.username}</p>
          <div className="row creatrow">
            <div className="col-sm creatview">
              One of three columns
            </div>
            <div className="col-sm creatview">
              One of three columns
            </div>
            <div className="col-sm creatview">
              One of three columns
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