const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useMongoClient: true});

const helper = require('../helpers/github.js');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log(`We're connected!`);
});

let repoSchema = new mongoose.Schema({
  // TODO: your schema here!
  // these are all the properties that we want to save from the github users
  // set id as mongoose.ObjectId in an effort to avoid duplicates
  name: String,
  id: {
    type: Number,
    unique: true
  },
  html_url: String,
  created_at: Date,
  updated_at: Date,
  pushed_at: Date,
  size: Number,
  forks: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data, callback) => {

  var newRepo = new Repo({
    name: data.name,
    id: data.id,
    html_url: data.html_url,
    created_at: data.created_at,
    updated_at: data.updated_at,
    pushed_at: data.pushed_at,
    size: data.size,
    forks: data.forks
  })
  // This function should save a repo or repos to
  // the MongoDB
  newRepo.save((err, doc) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, doc)
    }
  })
}

module.exports.save = save;

// in mongo, if you don't have any data in your table you won't be able to see your table