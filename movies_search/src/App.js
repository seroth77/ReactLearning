import React, { Component } from 'react';
import '@progress/kendo-theme-bootstrap/dist/all.css';
import './styles/css/App.css';
import MovieRow from './MovieRow.js';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.performSearch('avengers');
  }

  performSearch(searchTerm) {
    console.log('Perform search using moviedb');
    const uri = 'https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&language=en-US&api_key=d8b6062dd63e4a24a130692e4ac0d06c&query=' + searchTerm;
    $.ajax({
      url: uri,
      method: 'GET',
      success: (searchResults) => {
        console.log('Fetched data success');
        const results = searchResults.results;

        var movieRows = [];

        results.forEach((movie) => {
          console.log(movie);
          movie.poster_src = 'https://image.tmdb.org/t/p/w185' + movie.poster_path;
          const movieRow = <MovieRow key={movie.id} movie={movie} />;
          movieRows.push(movieRow);
        });

        this.setState({rows: movieRows});
      },
      error: (xhr, status, err) => {
        console.error("failed to fetch data");
      }
    });
  }

  searchChangedHandler(e) {
    console.log(e.target.value);
    this.performSearch(e.target.value);
  }

  render() {
    return (
      <div className="App">
        <div className="App-Header">
          <div className="row">
            <div className="col-sm-12">
              <i className="fa fa-film"></i> 
              <h3>MovieDB Search</h3>
            </div>
          </div>
        </div>

        <div className="App-Movie-Search">
          <input placeholder="Enter search term" onChange={this.searchChangedHandler.bind(this)} />
        </div>

      {this.state.rows}        
      </div>
    );
  }
}

export default App;
