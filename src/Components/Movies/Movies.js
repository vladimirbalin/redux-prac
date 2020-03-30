import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchingAllMovies } from "../../redux/movies-reducer";
import moviesJson from '../../movies.json';
import { NavLink } from "react-router-dom";
import { compose } from "redux";
import { withRouter } from "react-router";
import './movies.css';

const Movies = ({movies, fetchingAllMovies, children, ...props}) => {
  useEffect(() => {
    fetchingAllMovies(moviesJson);
  }, []);
  return (
    <div className='app'>
      <div className={'movies'}>
        <div className={props.match.params.id ? 'listHidden' : 'list'}>
          {movies.map((movie, index) => (
            <NavLink
              key={index}
              to={`/${index + 1}`}>
              <div
                className={'movie'}
                style={{backgroundImage: `url(${movie.cover})`}}/>
            </NavLink>
          ))}
        </div>
        {children}
      </div>
    </div>
  )
};

const mapStateToProps = (state) => ({
  movies: state.movies.all
});

export default compose(
  withRouter,
  connect(mapStateToProps, {fetchingAllMovies}))(Movies);