import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchingCurrentMovie } from "../../redux/movies-reducer";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import './movie.css';
import Movies from "../Movies/Movies";

const Movie = ({movie, fetchingCurrentMovie, ...props}) => {

  useEffect(() => {
    fetchingCurrentMovie(props.match.params.id)
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
  withRouter,
  connect(mapState, {fetchingCurrentMovie: fetchingCurrentMovie}),
)
(Movie);