import React from 'react';

class MovieRow extends React.Component {
  render() {
    return <div className="row" key={this.props.movie.id}>
    <div className="col-sm-12">
      <div className="row">
        <div className="col-sm-3">
          <img width="100px" alt="poster" src={this.props.movie.poster_path} />
        </div>
        <div className="col-sm-9">
          <div className="App-Movie-Info-Header">
            {this.props.movie.title}
          </div>
          <div className="App-Movie-Info-Body">
            {this.props.movie.overview}
          </div>
        </div>
      </div>
    </div>
  </div>;
  }
}

export default MovieRow;