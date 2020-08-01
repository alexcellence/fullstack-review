const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

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
  id: Number,
  html_url: String,
  created_at: Date,
  updated_at: Date,
  pushed_at: Date,
  size: Number,
  forks: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo, callback) => {
  // TODO: Your code here
  repo.save((err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  })
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;