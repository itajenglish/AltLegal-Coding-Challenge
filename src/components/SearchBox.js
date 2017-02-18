import React, { Component } from 'react';

class SearchBox extends Component {
  render() {
    return (
      <div id="searchBoxContainer" className="panel panel-default">
        <div className="panel-body">
          <input id="searchBox" type="text" placeholder="Add a hashtag"/>
        </div>
      </div>
    )
  }
}

export default SearchBox;
