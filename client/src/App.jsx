import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList.jsx';
import MovieList from './Movies/MovieList.jsx';
import Movie from './Movies/Movie.jsx';
import Tabs from './Movies/Tabs';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: [],
      selected: 'all',
      tabs: ['all', 'best picture', 'criterion', 'top 100', 'watched']
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    if (!savedList.includes(movie)) {
      savedList.push(movie);
      this.setState({
        savedList
      });
    }
  };

  changeSelected = tab => {
    this.setState({ selected: tab });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Tabs
          tabs={this.state.tabs}
          selected={this.state.selected}
          changeSelected={this.changeSelected}
        />
        <Route exact path="/" component={MovieList} />
        <Route
          path="/movie/:id"
          render={props => (
            <Movie {...props} addToSavedList={this.addToSavedList} />
          )}
        />
      </div>
    );
  }
}
