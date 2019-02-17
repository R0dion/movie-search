import React, { Component } from 'react'
import $ from 'jquery' 
import MovieRow from './MovieRow'
import '../App.css';

class SearchBlock extends Component {

constructor(props) {
    super(props)
    this.state = {}
    this.performSearch()
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
        this.setState({searchRows: movieRows})

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
      <div>
        <input className="searchBlock" onChange={this.searchChangeHandler.bind(this)} placeholder="Search" type="text"/>
        <div className='flexContainer'>
            {this.state.searchRows}
        </div>
      </div>
    )
  }
}

export default SearchBlock