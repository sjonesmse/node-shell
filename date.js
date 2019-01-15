function date(callback) {
  let date = new Date();
  callback(date.toDateString());
}

module.exports = date;
