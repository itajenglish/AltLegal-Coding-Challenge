const axios = require('axios');

module.exports = {
  getAllWatchlist: () => {
    return axios.get('http://localhost:8080/api/watchlist')
  }
}
