const express = require('express');
let app = express();

const helper = require('../helpers/github.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log('req.body ', req.body);
  helper.getReposByUsername(req.body.username);
  // should invoke getReposByUsername and pass that data onto save in index.js in database
  // invoke save
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  // query repo and return whatever data we want
});

let port = 4000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

