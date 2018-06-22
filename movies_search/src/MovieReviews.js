import React from 'react';

class MovieReviews extends React.Component {
  render() {
    return <span>{this.props.movie.overview}</span>;
  }
}

export default MovieReviews;