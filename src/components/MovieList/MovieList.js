import React, { Component } from 'react';

class MovieList extends Component {
  render() {
    const items = this.props.movies.map((e) => {
      const imageUrl = `https://image.tmdb.org/t/p/w500${e.poster_path}`;
      return  <div className="cell"><img src={imageUrl} />{e.title}</div>;
    });
    return (
      <div className="grid-x grid-margin-x grid-margin-y small-up-2 medium-up-4">
        {items}
      </div>
    );
  }
}

export default MovieList;
