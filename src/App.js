import React, { Component } from 'react';
import Header from './components/header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="row">

            <div className="col-md-4">
              <p>Col 1</p>
            </div>

            <div className="col-md-4">
              <p>Col 1</p>

            </div>

            <div className="col-md-4">
              <p>Col 1</p>

            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
