import React, { Component } from 'react';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import Card from './components/Card';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div className="container">
          <div className="row">

            <div className="col-md-4">
              <SearchBox />
              <Card />
            </div>

            <div className="col-md-4">
              <Card />
            </div>

            <div className="col-md-4">
              <Card />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
