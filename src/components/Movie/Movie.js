import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchingCurrentMovie } from "../../redux/movies-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import './movie.css';
import Movies from "../Movies/Movies";
import * as axios from 'axios';
import clean from 'clean-tagged-string';

const Movie = ({movie={}, fetchingCurrentMovie, ...props}) => {

  useEffect(() => {
    //fetchingCurrentMovie(props.match.params.id)

    const query = clean`{
      movie(index:${props.match.params.id}) {
        title,
        cover,
        year,
        starring {
          name
        }
      }
    }`;

    axios.get(`http://127.0.0.1:8000/q?query=${query}`)
      .then(response => {
        let responseMovie = response.data.data.movie;
        fetchingCurrentMovie(responseMovie)})
  }, [props.match.params.id]);

  return (
    <Movies>
      <div
        className='movieCur'
        style={{backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.625) 100%), url(${movie.cover})`}}>
        <div
          className='cover'
          style={{backgroundImage: `url(${movie.cover})`}}/>
        <div className='description'>
          <div className='title'>{movie.title}</div>
          <div className='year'>{movie.year}</div>
          <div className='starring'>
            {movie.starring ? movie.starring.map((actor = {}, index) => (
              <div
                key={index}
                className='actor'>
                {actor.name}
              </div>
            )) : ''}
          </div>
        </div>
        <Link
          className={'closeButton'}
          to="/">
          ←
        </Link>
      </div>
    </Movies>
  )
};

const mapState = ({movies}) => ({
  movie: movies.current
});

export default compose(
  connect(mapState, {fetchingCurrentMovie}),
)
(Movie);