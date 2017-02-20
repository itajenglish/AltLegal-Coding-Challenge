import React, { Component } from 'react';
import { valHash } from '../../helpers/validateHashTag'

class SearchBox extends Component {
  constructor(){
    super();
    this.state = {
      printError: false
    }
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
    console.log(event);
    console.log(valHash(event.target.value));

    if(!valHash(event.target.value)){
      this.setState({printError: true});
    } else{
      this.setState({printError: false});

      setTimeout(()=>{
        console.log("Working")
      },3000)
    }
  }

  handleKeyPress(event){

    if(event.keyCode === 27){
      console.log("ESC KEY")
    }
    //If Enter Key Pressed Hit Twitter Api and Save To Database
    if(valHash(event.target.value) === true){
      if(event.keyCode === 13){
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
