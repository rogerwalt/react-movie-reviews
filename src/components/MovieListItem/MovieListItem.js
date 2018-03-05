import React, { Component } from 'react';

export default function MovieListItem(props) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`;

  return  <div className="cell"><img src={imageUrl} />{props.movie.title}</div>;
}
