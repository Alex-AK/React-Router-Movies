import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Movies.css';
import MovieCard from './MovieCard';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      imdb: []
    };
  }

  componentDidMount() {
    // axios
    //   .get('http://localhost:5000/api/movies')
    //   .then(response => {
    //     this.setState(() => ({ movies: response.data }));
    //   })
    //   .catch(error => {
    //     console.error('Server Error', error);
    //   });
    axios
      .get('http://localhost:5000/')
      .then(res => this.setState({ imdb: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="movie-list">
        {this.state.imdb.map(movie => (
          <Link to={`/movie/${movie.imdbID}`} key={movie.id}>
            <MovieCard key={movie.id} movie={movie} />
          </Link>
        ))}
      </div>
    );
  }
}
