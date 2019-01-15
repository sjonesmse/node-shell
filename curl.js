const request = require('request');

function curl(callback, httpPath) {
  request(httpPath, (err, response, body) => {
    if (err) throw err;
    else {
      callback(body);
    }
  });
}

module.exports = curl;
