import React from "react";
import {createRoot} from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from "react-redux";
import store from "./redux/redux-store";
import { BrowserRouter, Routes } from "react-router-dom";
import Movies from "./components/Movies/Movies";
import Movie from "./components/Movie/Movie";
import { Route } from "react-router";

const root = createRoot(document.getElementById('container'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={ <Movies/> }/>
          <Route path="/:id" element={ <Movie/> }/>
      </Routes>
    </BrowserRouter>
  </Provider>
)