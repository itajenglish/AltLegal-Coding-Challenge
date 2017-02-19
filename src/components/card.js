import React, { Component } from 'react';
import SearchBox from './SearchBox';
import Api from '../../utils/Api';

class Card extends Component {
  constructor(){
    super();
    this.state = {
      activeCardNumber: null,
      tweets: null
    }
  }
// 
//   componentWillMount() {
//     //Gets Number Of Watchlists and sets number to activeCardNumber in state.
//     Api.getAllWatchlist()
//     .then((watchlist) => {
//       this.setState({activeCardNumber: watchlist.data.length})
//
//     console.log(watchlist);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
// }


  // renderCard(){
  //   //renderCard based on cardState in Parent Component
  //   const appState = this.props.appState;
  //   if (this.props.cardActive === true){
  //     return(
  //       <div className="panel panel-default">
  //         <div className="panel-heading">
  //           <p>Place Holder</p>
  //         </div>
  //         <div className="panel-body">
  //           Panel content
  //         </div>
  //       </div>
  //     )
  //   // } else if (appState.card_one_active === false && appState.card_two_active && appState.card_three_active === true) {
  //   //   return <SearchBox appState={appState} cardID={this.props.id} />
  //   // } else if (appState.card_three_active === false && appState.card_one_active && appState.card_two_active === true) {
  //   //   return <SearchBox appState={appState} cardID={this.props.id} />
  //   } else {
  //     return null
  //   }
  //
  // }


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
