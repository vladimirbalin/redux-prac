import { handleActions } from "redux-actions";

const FETCH_MOVIES = 'FETCH_MOVIES';
const FETCH_MOVIE = 'FETCH_MOVIE';

const moviesReducer = handleActions({
  [FETCH_MOVIES]: (state, action) => ({
    ...state,
    all: action.movies
  }),
  [FETCH_MOVIE]: (state, action) => ({
    ...state,
    current: action.movie
  })
}, {
  all: [],
  current: {}
});


export const fetchingAllMovies = (movies) => ({
  type: FETCH_MOVIES,
  movies
});
export const fetchingCurrentMovie = (movie) => ({
  type: FETCH_MOVIE,
  movie
});


export default moviesReducer;