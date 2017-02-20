import React, { Component } from 'react';
import Api from '../../utils/Api';
import EditSearchBox from '../components/EditSearchBox';
import ReactSpinner from 'react-spinjs';
import { hashTagSplit } from '../../helpers/hashTagSplit';


class Card extends Component {
  constructor(){
    super();
    this.state = {
      card_id: null,
      hashtag: null,
      tweets: null,
      inEditState: false,
      inEditMode: false,
      isLoading: true
    }
    this.updateEditMode = this.updateEditMode.bind(this);
    this.refreshCard = this.componentWillMount.bind(this)
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

  //When User Hovers Over Top of card
  editState() {
    if(this.state.inEditState === true && this.state.inEditMode === false){
      return (
        <div>
          <div className="row">
            <div className="col-xs-4">
              <p id="cardHeaderText" className="normal-text">
                {this.state.hashtag}
              </p>
              </div>
            <div className="col-xs-4">
              <button type="button" onClick={() => this.setState({inEditMode: true})} id="editButton" className="btn btn-warning">
              <span className="glyphicon glyphicon-edit" aria-hidden="true"></span>
                Edit
          </button>
            </div>
            <div className="col-xs-4">
              <button type="button" className="btn btn-danger">
              <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                Delete
          </button>
            </div>
          </div>
        </div>
      )
    } else if (this.state.inEditState === true && this.state.inEditMode === true){
      return null
    } else if (this.state.inEditState === false && this.state.inEditMode === false){
      return <p id="cardHeaderText" className="normal-text">{this.state.hashtag}</p>
    }
  }

  //When User Clicks Edit button
  editMode() {
    if(this.state.inEditMode === true){
      return <EditSearchBox cardID={this.state.card_id} refreshCard={this.refreshCard} updateEditMode={this.updateEditMode} />
    } else {
      return null
    }
  }
  //Pass Down To EditSearchBox To Update Edit State After Succesful Put Request.
  updateEditMode() {
    this.setState({inEditState: false, inEditMode: false})
  }

  render() {
    return (
      <div id="cardContainer">
        <div id="cardTopContainer" onMouseEnter={() => this.setState({inEditState: true})} onMouseLeave={() => this.setState({inEditState: false})} className="panel-body">
          {this.editState()}
          {this.editMode()}
        </div>
        <div className="panel-body">
          {this.isLoading()}
        </div>
      </div>
    )
  }
}

export default Card;
