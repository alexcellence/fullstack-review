import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

    this.search = this.search.bind(this);
  }

  search (term) {
    console.log(`${term} was searched`);
    // could send an axios post request and in the then promise could call an axios get request?
    axios.post('/repos', {
      // cannot use data because that's a special key for axios
      username: term
    })
      .then((data) => console.log(data))
      .catch(() => console.log('axios post request DID NOT WORK'))
  }

  render () {
    return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));