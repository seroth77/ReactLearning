import React from 'react';

class MovieMetrics extends React.Component {
  render() {
    return <span>{this.props.movie.title}</span>;
  }
}

export default MovieMetrics;