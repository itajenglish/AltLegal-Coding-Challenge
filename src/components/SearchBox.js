import React, {Component} from 'react';
import {valHash} from '../../helpers/validateHashTag'

class SearchBox extends Component {

  handleFocus(event) {
    event.target.placeholder = '';
  }

  handleBlur(event) {
    event.target.placeholder = 'Add a hashtag'
  }

  handleChange(event) {
    console.log(event);
    console.log(valHash(event.target.value));
  }

  render() {
    return (
      <div id="searchBoxContainer">
        <div className="panel-body">
          <input id="searchBox" placeholder="Add a hashtag" type="text" onBlur={(event) => this.handleBlur(event)} onFocus={(event) => this.handleFocus(event)} onChange={(event) => this.handleChange(event)} />
        </div>
      </div>
    )
  }
}

export default SearchBox;
