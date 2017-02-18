module.exports = {
  valHash: (text) => {
    const regExpression = /\B(\#[a-zA-Z]+\b)(?!;)/;
    return regExpression.test(text)
  }
}
