import React, { Component } from 'react';
import * as _ from 'lodash';

class MovieList extends Component {
  render() {
    const items = this.props.movies.map((e) => {
      return <span>{e.title}</span>;
    });
    return (
      <div>
        <div>MovieList</div>
        <div>{items}</div>
      </div>
    );
  }
}

export default MovieList;
