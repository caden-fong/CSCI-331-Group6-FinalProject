import React, { Component } from 'react';
import './../App.css';
import { useNavigate } from 'react-router';

class Create extends Component {
  constructor(props) {
    super(props);

  }

    render() {
      if(!this.props.user.id) {
        return null;
      }
    return (
      <div className= "container">
      </div>
    )
  }
}

export default (props) => {
  const navigate = useNavigate();
  return (<Create {...props} navigate={navigate}/>);
}