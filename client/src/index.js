import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Home from './components/Home';
import AddQuote from './components/AddQuote';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path='/quotes/add' component={AddQuote}></Route>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);
