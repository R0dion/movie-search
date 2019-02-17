import React, { Component } from 'react'
import '../App.css';

class MovieRow extends Component {
    
    viewMovie() {
        let url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }

    render() {
        return(
            <div className="flexItem">
                <img src={this.props.movie.poster_src} alt="poster" width="100"/>
                <h3>{this.props.movie.title}</h3>
                <p className="p.overview" >{this.props.movie.overview}</p>
                <input type="button" onClick={this.viewMovie.bind(this)} value="Get details view"/>  
            </div>

        )
    }

    
}

export default MovieRow 