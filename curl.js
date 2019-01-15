const request = require('request');

function curl(httpPath) {
  request(httpPath, (err, response, body) => {
    if (err) throw err;
    else {
      process.stdout.write(body);
      process.stdout.write('\nprompt >');
    }
  });
}

module.exports = curl;
