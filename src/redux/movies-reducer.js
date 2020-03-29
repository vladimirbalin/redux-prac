const FETCH_MOVIES = 'FETCH_MOVIES';
const FETCH_MOVIE = 'FETCH_MOVIE';

const initialState = {
  all: [],
  current: null
};


const moviesReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        all: action.movies
      };
    case FETCH_MOVIE:
      return {
        ...state,
        current: action.index - 1
      };

    default:
      return state;
  }
};


export const fetchingAllMovies = (movies) => ({
  type: FETCH_MOVIES,
  movies: movies
});
export const fetchingCurrentMovie = (index) => ({
  type: FETCH_MOVIES,
  index: index
});


export default moviesReducer;