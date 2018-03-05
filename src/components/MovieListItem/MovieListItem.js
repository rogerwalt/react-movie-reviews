import React, { Component } from 'react';

import { POSTER_BASE_URL } from '../../config/constants';

export default function MovieListItem(props) {
  const imageUrl = `${POSTER_BASE_URL}${props.movie.poster_path}`;

  return  <div className="cell"><img src={imageUrl} />{props.movie.title}</div>;
}
