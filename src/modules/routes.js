import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import App from "../Components/App";
import Movies from "../Components/Movies";
import Movie from "../Components/Movie";

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Route path='/' component={App}/>
      <Route path='/movies' component={Movies}/>
      <Route path='/movies/:id' component={Movie}/>
    </BrowserRouter>
  )
}