const axios = require('axios');
const config = require('../config.js');
const circularJSON = require('circular-json');
const request = require('request');

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
  // axios.get(`https://api.github.com/users/${username}/repos`)
  // this is a promise
  // axios(options)
    // .then((data) => {
    //   // var json = circularJSON.stringify(data)
    //   console.log('hi from inside then block')
    //   // console.log('data ', json)
    //   callback(null, data)
    // })
    // .then((response) => {
    //   console.log('response ', response)
    // })
    // .catch((err) => {
    //   var json = circularJSON.stringify(err)
    //   console.log('err ', json)
    //   callback(null)
    // })
  request.get(options, (err, response, data) => {
    if (err) {
      callback(err)
    } else {
      callback(null, data)
    }
  })
}

module.exports.getReposByUsername = getReposByUsername;