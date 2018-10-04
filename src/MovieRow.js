import React from 'react'
import './App.css';

class MovieRow extends React.Component {
    viewMovie() {
        console.log(this.props.movie.id)

        let url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }
    render() {
        return(
            <div className="column">
                <table key={this.props.movie.id}>
                    <tbody>
                    <tr>
                        <td>
                        <img src={this.props.movie.poster_src} alt="poster" width="100"/>
                        </td>
                        <td>
                        <h3>{this.props.movie.title}</h3>
                        <p className="p.overview">{this.props.movie.overview}</p>
                        <input type="button" onClick={this.viewMovie.bind(this)} value="Get details view"/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

        )


    }
}

export default MovieRow 