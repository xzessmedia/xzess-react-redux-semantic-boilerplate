/*
 * @Author: Tim Koepsel 
 * @Date: 2019-06-13 10:47:41 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-10-19 16:53:13
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from '../src/Reducers';

import './index.scss';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, Switch, HashRouter as Router } from 'react-router-dom'
import Error404 from './Components/Error404/Error404';
import PageTest from './Pages/PageTest/PageTest';

const store = createStore(allReducers);
//console.log('Store: '+JSON.stringify(store.getState()));

const routing = (
    <Provider store={store}>
      <Router>
        <Switch>
          {/* <Route path="/test/:testinput?" component={TestKomponente} /> */}
          <Route exact path="/" component={PageTest} />
          <Route path='*' exact={true} component={Error404} />
        </Switch>
      </Router>
    </Provider>
    )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
