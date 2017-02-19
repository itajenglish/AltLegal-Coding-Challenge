import React, {Component} from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Api from '../utils/Api';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      card_one_active: false,
      card_two_active: false,
      card_three_active: false
    }
  }

  componentWillMount() {
    //Gets Number Of Watchlists and sets number to activeCardNumber in state.
    Api.getAllWatchlist().then((response) => {
      this.setState({activeCardNumber: response.data.length});

      //Set Card Active State Based On Array Length.
    switch (response.data.length) {
  case 1:
    this.setState({card_one_active: true});
    console.log(`card: 1 Active!`)
    break;
  case 2:
    this.setState({card_one_active: true, card_two_active: true});
    console.log(`card: 2 Active!`)
    break;
  case 3:
    this.setState({card_one_active: true, card_two_active: true, card_three_active: true});
    console.log(`card: 2 Active!`)
    break;
  default:
    return
}

      console.log(response);
    }).catch((err) => {
      console.log(err);
    })

  }

  render() {
    return (
      <div className="App">
        <Header/>

        <div className="container">
          <div className="row">

            <div className="col-md-4">
              <Card id={1} cardState={this.state.card_one_active}/>
            </div>

            <div className="col-md-4">
              <Card id={2} cardState={this.state.card_two_active}/>
            </div>

            <div className="col-md-4">
              <Card id={3} cardState={this.state.card_three_active}/>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
