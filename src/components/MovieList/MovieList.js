import React, { Component } from 'react';

class MovieList extends Component {
  render() {
    const items = this.props.movies.map((e) => {
      return <div className="cell">{e.title}</div>;
    });
    return (
      <div className="grid-x grid-margin-x grid-margin-y small-up-2 medium-up-4">
        {items}
      </div>
    );
  }
}

export default MovieList;
