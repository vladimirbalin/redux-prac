import React from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from "./Components/App";
import { Provider } from "react-redux";
import store from "./redux/redux-store";


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('container')
)
;