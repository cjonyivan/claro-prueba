import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';



import app from '../scss/app.scss';
import Header from './views/Header';
import Movie from  './views/Movie';


export default class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Header} />
               <Route exact path="/movie/:name/:id" component={Movie} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}