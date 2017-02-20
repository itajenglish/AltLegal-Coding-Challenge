import React, { Component } from 'react';
import Api from '../../utils/Api';

class Card extends Component {
  constructor(){
    super();
    this.state = {
      card_id: null,
      hashtag: null,
      tweets: null
    }
  }

  componentWillMount() {
    //Set State With ID Of Current Card
    this.setState({card_id: this.props.cardID});
    //Gets Hashtag & Tweets that belongs to the cardID
    Api.getOneWatchlist(this.props.cardID)
    .then((watchlist) => {
      this.setState({hashtag: watchlist.data.hashtag})
    console.log(watchlist);
  })
  .catch((err) => {
    console.log(err);
  })
}

  render() {
    console.log(this.props)
    return (<div className="panel panel-default">
      <div className="panel-heading">
        <p>Place Holder</p>
      </div>
      <div className="panel-body">
        Panel content
      </div>
    </div>)
  }
}

export default Card;
