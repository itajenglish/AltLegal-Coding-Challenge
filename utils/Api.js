const axios = require('axios');

module.exports = {
  getAllWatchlist: () => {
    return axios.get('https://twitt-watch-api.herokuapp.com/api/watchlist')
  },
  addNewWatchlist: (data) => {
    return axios.post('https://twitt-watch-api.herokuapp.com/api/watchlist', data)
  },
  getOneWatchlist: (card_id) => {
    return axios.get(`https://twitt-watch-api.herokuapp.com/api/watchlist/${card_id}`)
  },
  updateWatchlist: (card_id, hashtag) => {
    return axios.put(`https://twitt-watch-api.herokuapp.com/api/watchlist/${card_id}`, hashtag)
  },
  deleteWatchlist: (card_id) => {
    return axios.delete(`https://twitt-watch-api.herokuapp.com/api/watchlist/${card_id}`)
  },
  getTweets: (hashtag) => {
    return axios.get(`https://twitt-watch-api.herokuapp.com/api/tweets/${hashtag}`)
  }
}
