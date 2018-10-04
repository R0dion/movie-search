import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js'
import $ from 'jquery' 

class App extends Component {
  
  constructor(props) {
    super(props)
     this.state = {}

    
    this.performSearch()
    this.performBest()
    
    
  }

  performBest() {
    const urlString = "https://api.themoviedb.org/3/movie/top_rated?api_key=e053ce08a1f35f46eaeee02ba2a0bde0&language=en-US&page=1"
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data succcessfully")
        const results = searchResults.results

        let movieRows = []
        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
  
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })
        this.setState({rows: movieRows})

      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")

      }
    })
  }

  performSearch(searchTerm) {
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=e053ce08a1f35f46eaeee02ba2a0bde0&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data succcessfully")
        const results = searchResults.results

        let movieRows = []
        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
  
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })
        this.setState({rows: movieRows})

      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")

      }
    })
  }

  searchChangeHandler(event) {
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }

  render() {
    return (
      <div className="row">
        <table className="logoBlock">
          <tbody>
            <tr>
              <td>
                <img width="50"  src="primary-green.svg" alt="logo"/>
              </td>
              <td>
                <h2>Movie app</h2> 
              </td>
            </tr>
          </tbody>
        </table>
       

        <input className="searchBlock" onChange={this.searchChangeHandler.bind(this)} placeholder="Search" type="text"/>
       
       {this.state.rows}
  
      </div>
    );
  }
}

export default App;
