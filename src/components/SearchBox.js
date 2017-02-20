import React, { Component } from 'react';
import { valHash } from '../../helpers/validateHashTag';
import Api from '../../utils/Api';


class SearchBox extends Component {
  constructor(){
    super();
    this.state = {
      card_id: null,
      hashtag: null,
      printError: false
    }
  }

  componentDidMount(){
    //Set CardID To Match Which Card #Hashtag Belongs To.
    this.setState({card_id: this.props.cardID})
  }

  //Sets PlaceHolder Text To Empty When Entering Edit Mode.
  handleFocus(event) {
    event.target.placeholder = '';
  }

  //Sets PlaceHolder Text When Leaving Edit Node.
  handleBlur(event) {
    event.target.placeholder = 'Add a hashtag';
    this.setState({printError: false});
  }

  //Handles Information Typed Into The Input Field.
  handleChange(event) {
    //Checks if Text is a hashtag. Returns Truthy or Falusy Value.
    if(!valHash(event.target.value)){
      this.setState({printError: true});
    } else{
      this.setState({
        printError: false,
        hashtag: event.target.value
      });
    }
  }

  handleKeyPress(event){
    //If ESC Key Presed Return To Edit Mode.
    if(event.keyCode === 27){
      event.target.value = '';
      this.setState({hashtag: null})
      console.log("ESC KEY");
    }
    if(valHash(event.target.value) === true){
      //If Enter Key Pressed Hit Twitter Api and Save To Database
      if(event.keyCode === 13){
        //Clear Inputbox
        event.target.value = '';

        const data = {
          'hashtag': this.state.hashtag,
          'card_id': this.state.card_id
        }

        Api.addNewWatchlist(data)
        .then((response) => {
          //Calls Component Will Mount Function In App To Refresh State
          this.props.refreshCard()
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        })
        console.log("Enter KEY");
      }
    }
  }

  renderSearchbox(){
    if (this.state.printError === true){
      return (
        <div id="searchBoxContainerError">
          <div className="panel-body">
            <input id="searchBoxError" placeholder="Add a hashtag" type="text" onBlur={(event) => this.handleBlur(event)} onFocus={(event) => this.handleFocus(event)} onChange={(event) => this.handleChange(event)} />
            <p id="errorText">Spaces,emoji or punctuation may not be used.</p>
          </div>
        </div>
      )
    } else {
      return (
        <div id="searchBoxContainer">
          <div className="panel-body">
            <input id="searchBox" onKeyDown={(event) => this.handleKeyPress(event)} placeholder="Add a hashtag" type="text" onBlur={(event) => this.handleBlur(event)} onFocus={(event) => this.handleFocus(event)} onChange={(event) => this.handleChange(event)} />
          </div>
        </div>
      )
    }
  }

  render() {
    return (this.renderSearchbox())
  }
}

export default SearchBox;
