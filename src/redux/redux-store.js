import { combineReducers, createStore } from "redux";
import moviesReducer from "./movies-reducer";

let reducers = combineReducers({
  movies: moviesReducer,
});

let store = createStore(reducers);

export default store;