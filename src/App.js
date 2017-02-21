import React, { Component } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import SearchBox from './components/SearchBox'
import Api from '../utils/Api';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      activeCardNumber: 0,
      card_one_active: false,
      card_two_active: false,
      card_three_active: false
    }
  }

  componentWillMount() {
    //Gets Number Of Watchlists and sets number to activeCardNumber in state.
    Api.getAllWatchlist()
    .then((response) => {
      this.setState({activeCardNumber: response.data.length});

      //Set Card Active State Based On card_id in response.
        response.data.map((watchlist) => {
          switch (watchlist.card_id) {
           case 1:
           this.setState({card_one_active: true});
           console.log('card: 1 Active!')
           break;
           case 2:
           this.setState({card_two_active: true});
           console.log('card: 2 Active!')
           break;
           case 3:
           this.setState({card_three_active: true});
           console.log('card: 3 Active!')
           break;
           default:
           return
         }
       })
    }).catch((err) => {
      console.log(err);
    })

  }

/*
Render Card Functions Check Active State Of Other Cards..
In Order To Know Where To Render SearchBox
*/
  renderCardOne() {
    const state = this.state;
    if (state.card_one_active === true) {
      return <Card cardID={1} refreshCard={this.componentWillMount.bind(this)} />
    } else if (state.card_one_active === false && state.card_two_active && state.card_three_active === true) {
      return <SearchBox cardID={1} refreshCard={this.componentWillMount.bind(this)} />
    } else if (state.card_one_active === false && state.card_two_active === false && state.card_three_active === true) {
      return <SearchBox cardID={1} refreshCard={this.componentWillMount.bind(this)} />
    } else if (state.card_one_active === false && (state.card_two_active || state.card_three_active === false)) {
      return <SearchBox cardID={1} refreshCard={this.componentWillMount.bind(this)} />
    }
  }

  renderCardTwo() {
    const state = this.state;
    if (state.card_two_active === true) {
      return (<Card cardID={2} refreshCard={this.componentWillMount.bind(this)} />)
    } else if (state.card_two_active === false && state.card_one_active && state.card_three_active === true) {
      return <SearchBox cardID={2} refreshCard={this.componentWillMount.bind(this)} />
    } else if (state.card_two_active === false && state.card_one_active === true && state.card_three_active === false) {
      return <SearchBox cardID={2} refreshCard={this.componentWillMount.bind(this)} />
    }
  }

  renderCardThree() {
    const state = this.state;
    if (state.card_three_active === true) {
      return (<Card cardID={3} refreshCard={this.componentWillMount.bind(this)} />)
    } else if (state.card_three_active === false && state.card_one_active && state.card_two_active === true) {
      return <SearchBox cardID={3} refreshCard={this.componentWillMount.bind(this)} />
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>

        <div className="container">
          <div className="row">

            <div className="col-md-4">
              {this.renderCardOne()}
            </div>

            <div className="col-md-4">
              {this.renderCardTwo()}
            </div>

            <div className="col-md-4">
              {this.renderCardThree()}
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
