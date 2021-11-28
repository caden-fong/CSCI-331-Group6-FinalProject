import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class CharacterView extends Component {
    constructor(props) {
        super(props);
        this.state = {character: {}};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/exercises/')
            .then(response => {
                this.setState({ character: response.data });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
    return (
      <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        
        </tbody>
      </table>
      </div>
    )
  }
}