import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

import { setSearchField, requestKittens } from '../actions'

const mapStateToProps = state => {
  return {
    searchField: state.searchKittens.searchField,
    kittens: state.requestKittens.kittens,
    isPending: state.requestKittens.isPending,
    error: state.requestKittens.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestKittens: () => dispatch(requestKittens())
  }
}


class App extends Component {
  componentDidMount() {
    this.props.onRequestKittens();
  }

  render () {
    // console.log('props', this.props);
    const { searchField, onSearchChange, kittens, isPending } = this.props;
    const filteredKittens = kittens.filter(kitten => kitten.name.toLowerCase().includes(searchField.toLowerCase()));
    return isPending ?
     <h1>Loading</h1> :
     (
        <div className='flex flex-column items-center justify-center'>
          <h1 className='f1'>CatFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList kittens={filteredKittens}/>
            </ErrorBoundry>
          </Scroll>
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
