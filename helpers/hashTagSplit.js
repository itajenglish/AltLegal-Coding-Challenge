module.exports = {
  hashTagSplit: (hashtag) => {
    hashtag = hashtag.split('#');
    return hashtag[1];
  }
}
