import React, { Component } from 'react';

import '../../styles/_app.scss';

import MovieListContainer from '../MovieList/MovieListContainer';

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <MovieListContainer />
      </div>
    );
  }
}

export default App;
