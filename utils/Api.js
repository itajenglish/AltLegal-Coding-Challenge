const axios = require('axios');

module.exports = {
  getAllWatchlist: () => {
    return axios.get('http://localhost:8080/api/watchlist')
  },
  addNewWatchlist: (data) => {
    return axios.post('http://localhost:8080/api/watchlist', data)
  }
}
