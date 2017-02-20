module.exports = {
  valHash: (hashtag) => {
    const regExpression = /\B(\#[a-zA-Z]+\b)(?!;)/;
    return regExpression.test(hashtag)
  }
}
