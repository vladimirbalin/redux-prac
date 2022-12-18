import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchingAllMovies} from "../../redux/movies-reducer";
import {NavLink, useParams} from "react-router-dom";
import {compose} from "redux";
import './movies.css';
import axios from 'axios';
import clean from 'clean-tagged-string';

const Movies = ({movies = [], fetchingAllMovies, children, ...props}) => {
    const { id: movieId } = useParams();

    useEffect(() => {
        //fetchingAllMovies(moviesJson);
        const query = clean`{
      movies {
        title,
        cover
      }
    }`;
        axios.get(`http://127.0.0.1:8000/q?query=${query}`)
            .then(response => {
                let responseMovies = response.data.data.movies;
                fetchingAllMovies(responseMovies);
            })

  }, []);
  return (
    <div className='app'>
      <div className={'movies'}>
        <div className={movieId ? 'listHidden' : 'list'}>
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
  connect(mapStateToProps, {fetchingAllMovies}))(Movies);