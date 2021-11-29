import React, { Component } from 'react';
import gather from './../gather.png';
import './../App.css'

export default class More extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 'Not logged in.'
    }

    if (this.props.user._id) {
      this.state.id = this.props.user._id;
    }

  }
  
  

    render() {
    return (
      //     {/* <p>{this.props.user._id}</p> */}
      <>
        <div class="container-fluid morestuff">
          <div class="row">
            <div class="col- mor">
              <div className="card">
                <img src={gather} class="card-img-top" alt="dfjfsdf"/>
                <div className="card-body">
                  <h5 className="card-title">Card with stretched link</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary stretched-link">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col- mor">
              <div className="card">
                <img src={gather} class="card-img-top" alt="dfjfsdf"/>
                <div className="card-body">
                  <h5 className="card-title">Card with stretched link</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary stretched-link">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col- mor">
              <div className="card">
                <img src={gather} class="card-img-top" alt="dfjfsdf"/>
                <div className="card-body">
                  <h5 className="card-title">Card with stretched link</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary stretched-link">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid morestuff">
          <div class="row">
            <div class="col- mor">
              <div className="card car">
                <img src={gather} class="card-img-top" alt="dfjfsdf"/>
                <div className="card-body">
                  <h5 className="card-title">Card with stretched link</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary stretched-link">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col- mor">
              <div className="card car">
                <img src={gather} class="card-img-top" alt="dfjfsdf"/>
                <div className="card-body">
                  <h5 className="card-title">Card with stretched link</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary stretched-link">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col- mor">
              <div className="card car">
                <img src={gather} class="card-img-top" alt="dfjfsdf"/>
                <div className="card-body">
                  <h5 className="card-title">Card with stretched link</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary stretched-link">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid morestuff">
          <div class="row">
            <div class="col- mor">
              <div className="card car2">
                <img src={gather} class="card-img-top" alt="dfjfsdf"/>
                <div className="card-body">
                  <h5 className="card-title">Card with stretched link</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary stretched-link">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col- mor">
              <div className="card car2">
                <img src={gather} class="card-img-top" alt="dfjfsdf"/>
                <div className="card-body">
                  <h5 className="card-title">Card with stretched link</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary stretched-link">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col- mor">
              <div className="card car2">
                <img src={gather} class="card-img-top" alt="dfjfsdf"/>
                <div className="card-body">
                  <h5 className="card-title">Card with stretched link</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary stretched-link">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>  
    )
  }
}