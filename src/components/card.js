import React, { Component } from 'react';
import Api from '../../utils/Api';
import SearchBox from '../components/SearchBox';
import ReactSpinner from 'react-spinjs';
import { hashTagSplit } from '../../helpers/hashTagSplit';


class Card extends Component {
  constructor(){
    super();
    this.state = {
      card_id: null,
      hashtag: null,
      tweets: null,
      isLoading: true
    }
  }

  componentWillMount() {
    //Set State With ID Of Current Card
    this.setState({card_id: this.props.cardID});
    //Gets Hashtag that belongs to the cardID
    Api.getOneWatchlist(this.props.cardID)
    .then((watchlist) => {
      this.setState({hashtag: watchlist.data.hashtag});
      //Split Hashtag on # to send to backend Via Params
      const hashtag = hashTagSplit(this.state.hashtag)
      //Gets Tweets that belongs to the cardID
      Api.getTweets(hashtag)
      .then((tweets) => {
        //Set Tweets To State and Turn off Spinner
        this.setState({tweets:tweets.data.statuses, isLoading: false})
        console.log(this.state.tweets);
      })
      .catch((err) =>{
        console.log(err);
      });//Error for getTweets
    })
    .catch((err) => {
    console.log(err);
  });//Error for getOneWatchlist
}

  isLoading(){
    if(!this.state.isLoading){
      return (
        <ul className="media-list collection">
          {this.state.tweets.map((tweet, key) => {
            return(
              <li key={key} className="media">
                <div className="media-left">
                  <a href={`https://twitter.com/${tweet.user.screen_name}`} target="_blank">
                    <img className="media-object" src={tweet.user.profile_image_url} alt="..." />
                  </a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading med-text" id="twitterName">{tweet.user.name}</h4>
                  <h5 id="twitterUsername" className="light-text">@{tweet.user.screen_name}</h5>
                  <p className="normal-text">{tweet.text}</p>
                </div>
              </li>
            )
          })}
        </ul>
      )
    } else {
      return <ReactSpinner color="black"/>
    }
  }


  render() {
    console.log(this.props)
    return (
      <div id="cardContainer">
        <div id="cardTopContainer" className="panel-body">
          <p id="cardHeaderText" className="normal-text">{this.state.hashtag}</p>
        </div>
        <div className="panel-body">
          {this.isLoading()}
        </div>
      </div>
    )
  }
}

export default Card;
