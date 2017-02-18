import React, { Component } from 'react';
import { valHash } from '../../helpers/validateHashTag'

class SearchBox extends Component {

  handleChange(event){
    console.log(event.target.value);
    console.log(valHash(event.target.value));
  }

  render() {
    return (
      <div id="searchBoxContainer" >
        <div className="panel-body">
          <input id="searchBox" onChange={(event) => this.handleChange(event)} type="text" style={null} placeholder="Add a hashtag"/>
        </div>
      </div>
    )
  }
}

export default SearchBox;
