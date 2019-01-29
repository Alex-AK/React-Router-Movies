import React, { Component } from 'react';
import axios from 'axios';

import MoviePage from './MoviePage';

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    // change this line to grab the id passed on the URL
    const id = this.props.match.params.id;
    this.fetchMovie(id);
  }

  fetchMovie = id => {
    axios
      .get(`http://www.omdbapi.com/?i=${id}&apikey=ffa9e460`)
      .then(res => {
        this.setState(() => ({ movie: res.data }));
      })
      .catch(err => {
        console.error(err);
      });
  };
  // Uncomment this code when you're ready for the stretch problems
  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id);
    }
  }

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie);
  };

  render() {
    if (!this.state.movie) {
      return (
        <div className="no-movie">
          <h1>No Movie Found</h1>
        </div>
      );
    }
    return (
      <div className="save-wrapper">
        <MoviePage movie={this.state.movie} />
        {/* <div className="save-button" onClick={this.saveMovie}>
          Save
        </div> */}
      </div>
    );
  }
}
