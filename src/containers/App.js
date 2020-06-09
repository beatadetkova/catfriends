import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      kittens: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ kittens: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render () {
    const { kittens, searchfield } = this.state;
    const filteredKittens = kittens.filter(kitten => kitten.name.toLowerCase().includes(searchfield.toLowerCase()))
    return !kittens.length ?
     <h1>Loading</h1> :
     (
        <div className='flex flex-column items-center justify-center'>
          <h1 className='f1'>CatFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList kittens={filteredKittens}/>
            </ErrorBoundry>
          </Scroll>
        </div>
      );
  }
}

export default App;
