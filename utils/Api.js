const axios = require('axios');

module.exports = {
  getAllWatchlist: () => {
    return axios.get('http://localhost:8080/api/watchlist')
  },
  addNewWatchlist: (data) => {
    return axios.post('http://localhost:8080/api/watchlist', data)
  },
  getOneWatchlist: (card_id) => {
    return axios.get(`http://localhost:8080/api/watchlist/${card_id}`)
  },
  updateWatchlist: (card_id, hashtag) => {
    return axios.put(`http://localhost:8080/api/watchlist/${card_id}`, hashtag)
  },
  deleteWatchlist: (card_id) => {
    return axios.delete(`http://localhost:8080/api/watchlist/${card_id}`)
  },
  getTweets: (hashtag) => {
    return axios.get(`http://localhost:8080/api/tweets/${hashtag}`)
  }
}
