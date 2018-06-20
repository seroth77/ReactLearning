import React, { Component } from 'react';
import './styles/css/App.css';
import MovieRow from './MovieRow.js';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);
    // console.log('This is my initializer');
    this.state = {};

    // const movies = [
    //   {
    //     id: 0, 
    //     title: 'Avengers', 
    //     overview: 'things happen that are bad with the Sha\'tari',
    //     posterPath: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,675,1000_AL_.jpg'
    //   },
    //   {
    //     id: 1, 
    //     title: 'Avengers Age of Ultron', 
    //     overview: 'things happen that are bad with robots',
    //     posterPath: 'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SY1000_SX675_AL_.jpg'
    //   },
    //   {
    //     id: 2,
    //     title: 'Avengers Infinity War', 
    //     overview: 'things happen that are bad with a glove',
    //     posterPath: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg'
    //   }
    // ];

    // var movieRows = [];

    // movies.forEach((movie) => {
    //   const movieRow = <MovieRow movie={movie} />;
      
    //   movieRows.push(movieRow);
    // });

    // this.state = {rows: movieRows};

    this.performSearch();
  }

  performSearch() {
    console.log('Perform search using moviedb');
    const uri = 'https://api.themoviedb.org/3/search/movie?query=Marvel&include_adult=false&page=1&language=en-US&api_key=d8b6062dd63e4a24a130692e4ac0d06c';
    $.ajax({
      url: uri,
      method: 'GET',
      success: (searchResults) => {
        console.log('Fetched data success');
        const results = searchResults.results;

        var movieRows = [];

        results.forEach((movie) => {
          console.log(movie);
          const movieRow = <MovieRow movie={movie} />;
          movieRows.push(movieRow);
        });

        this.setState({rows: movieRows});
      },
      error: (xhr, status, err) => {
        console.error("failed to fetch data");
      }
    });
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
          <input placeholder="Enter search term" />
        </div>

      {this.state.rows}        
      </div>
    );
  }
}

export default App;
