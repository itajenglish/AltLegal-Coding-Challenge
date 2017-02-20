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
    Api.getAllWatchlist().then((response) => {
      this.setState({activeCardNumber: response.data.length});
      console.log(response);
      //Set Card Active State Based On Array Length.
      //Each Array Index Will Represent Each CardID
      switch (response.data.length) {
        case 1:
          this.setState({card_one_active: true});
          console.log('card: 1 Active!')
          break;
        case 2:
          this.setState({card_one_active: true, card_two_active: true});
          console.log('card: 2 Active!')
          break;
        case 3:
          this.setState({card_one_active: true, card_two_active: true, card_three_active: true});
          console.log('card: 3 Active!')
          break;
        default:
          return
      }
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
      return <Card id={1} />
    } else if (state.card_one_active === false && state.card_two_active && state.card_three_active === true) {
      return <SearchBox cardID={1}/>
    } else if (state.card_one_active === false && state.card_two_active === false && state.card_three_active === true) {
      return <SearchBox cardID={1}/>
    } else if (state.card_one_active === false && (state.card_two_active || state.card_three_active === false)) {
      return <SearchBox cardID={1}/>
    }
  }

  renderCardTwo() {
    const state = this.state;
    if (state.card_two_active === true) {
      return (<Card id={2} />)
    } else if (state.card_two_active === false && state.card_one_active && state.card_three_active === true) {
      return <SearchBox cardID={2}/>
    } else if (state.card_two_active === false && state.card_one_active === true && state.card_three_active === false) {
      return <SearchBox cardID={2}/>
    }
  }

  renderCardThree() {
    const state = this.state;
    if (state.card_three_active === true) {
      return (<Card id={3} />)
    } else if (state.card_three_active === false && state.card_one_active && state.card_two_active === true) {
      return <SearchBox cardID={3}/>
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
