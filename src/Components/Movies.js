import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchingAllMovies } from "../redux/movies-reducer";
import movies from '../movies.json';

const Movies = (props) => {
  useEffect(() => {
    props.fetchingAllMovies(movies);
  }, []);
  return (
    <div>

    </div>
  )
};

const mapStateToProps = (state) => ({
  movies: state.movies.all
});

export default connect(mapStateToProps, {fetchingAllMovies})(Movies);