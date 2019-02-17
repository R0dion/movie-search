import React, { Component } from 'react'
import $ from 'jquery' 
import MovieRow from './MovieRow'
import '../App.css';

class PerformBest extends Component {
    constructor(props) {
        super(props)
        this.state = {}
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

  render() {
    return (
      <div>
        <div className='flexContainer'> 
          {this.state.rows}
        </div>
      </div>
    )
  }
}

export default PerformBest
