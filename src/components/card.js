import React, { Component } from 'react';
import Api from '../../utils/Api';

class Card extends Component {
  constructor(){
    super();
    this.state = {
      activeCardNumber: null,
      tweets: null
    }
  }

  componentWillMount() {
    //Gets Number Of Watchlists and sets number to activeCardNumber in state.
    Api.getAllWatchlist()
    .then((watchlist) => {
      this.setState({activeCardNumber: watchlist.data.length})

    console.log(watchlist);
  })
  .catch((err) => {
    console.log(err);
  })
}


  renderCard(){
    if (this.props.cardState === true){
      return(
        <div className="panel panel-default">
          <div className="panel-heading">
            <p>Place Holder</p>
          </div>
          <div className="panel-body">
            Panel content
          </div>
        </div>
      )
    } else {
      return null
    }
  }



  render() {
    return (this.renderCard())
  }
}

export default Card;
