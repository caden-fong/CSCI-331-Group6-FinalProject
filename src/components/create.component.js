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
      <div className="container create">
        <p>Create a Character</p>
        <form>
          <div className="row creatrow">
            <div className="col-sm creat">
              <label>Name</label>
              <input class="form-control" type="text"></input>
              <small>Choose a character name</small>
            </div>
            <div className="col-sm creat">
              <label>Level</label>
              <select className="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <small>Click to choose a level</small>
            </div>
            <div className="col-sm creat">
              <label>Race</label>
              <select className="form-control">
                <option>race</option>
              </select>
              <small>Click to choose a race</small>
            </div>
          </div>
          <div className="row creatrow">
            <div className="col-sm creat2">
              <label>Class</label>
              <select className="form-control">
                <option>class</option>
              </select>
              <small>Click to choose a class</small>
            </div>
            <div className="col-sm creat2">
              <label>Background</label>
              <select className="form-control">
                <option>class</option>
              </select>
              <small>Click to choose a background</small>
            </div>
            <div className="col-sm creat2">
              One of three columns
            </div>
          </div>
          <div className="row creatrow">
            <div className="col-sm creat3">
              <label>Class</label>
              <select className="form-control">
                <option>class</option>
              </select>
              <small>Click to choose a class</small>
            </div>
            <div className="col-sm creat3">
              <label>Background</label>
              <select className="form-control">
                <option>class</option>
              </select>
              <small>Click to choose a background</small>
            </div>
            <div className="col-sm creat3">
              One of three columns
            </div>
          </div>
          <div className="row creatrow">
            <div className="col-sm creat4">
              <label>Class</label>
              <select className="form-control">
                <option>class</option>
              </select>
              <small>Click to choose a class</small>
            </div>
            <div className="col-sm creat4">
              <label>Background</label>
              <select className="form-control">
                <option>class</option>
              </select>
              <small>Click to choose a background</small>
            </div>
            <div className="col-sm creat4">
              One of three columns
            </div>
          </div>
          <div className="row creatrow">
            <div className="col-sm creat5">
              <label>Class</label>
              <select className="form-control">
                <option>class</option>
              </select>
              <small>Click to choose a class</small>
            </div>
            <div className="col-sm creat5">
              <label>Background</label>
              <select className="form-control">
                <option>class</option>
              </select>
              <small>Click to choose a background</small>
            </div>
            <div className="col-sm creat5">
              <input type="submit" value="Submit" className="btn btn-dark" />
            </div>
          </div>
         </form> 
      </div>
    )
  }
}

export default (props) => {
  const navigate = useNavigate();
  return (<Create {...props} navigate={navigate}/>);
}