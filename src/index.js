import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from "react-router-dom";
import Login from './components/login/login';
import Home from './components/home/home';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" component={Login}>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
      </Route>
    </div>
  </BrowserRouter>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
