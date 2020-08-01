const express = require('express');
let app = express();
let bodyParser = require('body-parser');

const helper = require('../helpers/github.js');
// const db = require('../database/index.js');

// middleware always needs express.static and express.json
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log('req.body ', req.body);
  helper.getReposByUsername(req.body.username, (err, data) => {
    if (err) {
      res.status(400).send()
    } else {
      // console.log('server/index ', data)
      res.status(201).send(data)
    }
  });
  // should invoke getReposByUsername and pass that data onto save in index.js in database
  // invoke save
  // db.save
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

