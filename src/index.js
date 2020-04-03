import React from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from "react-redux";
import store from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import Movies from "./components/Movies/Movies";
import Movie from "./components/Movie/Movie";
import { Route } from "react-router";


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={Movies}/>
      <Route path="/:id" component={Movie}/>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('container')
)
;