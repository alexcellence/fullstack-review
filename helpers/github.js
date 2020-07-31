const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    method: 'GET',
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  // this is a promise
  axios(options)
    .then((err, data) => {
      if (err) {
        callback(err, null)
      } else {
        callback(null, data)
      }
    })
    .catch((err) => {
      callback(err)
    })

}

module.exports.getReposByUsername = getReposByUsername;