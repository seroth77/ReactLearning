import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import MovieMetrics from './MovieMetrics';
import MovieReviews from './MovieReviews';

class MovieRow extends React.Component {
  constructor(props) {
    super(props);
    this.movie_metrics_id = 'movie-' + this.props.movie.id;
    this.movie_review_id =  'review-' + this.props.movie.id;
  }

  render() {
    return <div className="row" key={this.props.movie.id}>
    <div className="col-sm-12">
      <div className="row">
        <div className="col-sm-3">
          <img width="100px" alt="poster" src={this.props.movie.poster_src} />
        </div>
        <div className="col-sm-9">
          <div className="App-Movie-Info-Header">
            {this.props.movie.title}
          </div>
          <div className="App-Movie-Info-Body">
            {this.props.movie.overview}
            <div>
              <Button color="info" id={this.movie_metrics_id}>Metrics</Button>
              <Button color="secondary" id={this.movie_review_id}>Reviews</Button>
            </div>
          </div>
          <UncontrolledCollapse toggler={this.movie_metrics_id}>
            <Card>
              <CardBody>
                <MovieMetrics movie={this.props.movie} />
              </CardBody>
            </Card>
          </UncontrolledCollapse>
          <UncontrolledCollapse toggler={this.movie_review_id}>
            <Card>
              <CardBody>
                <MovieReviews movie={this.props.movie} />
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </div>
      </div>
    </div>
  </div>;
  }
}

export default MovieRow;