import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import User from './pages/User';

const App = () => (
  <Switch>
    <Route exact path='/login' component={ Login }/>
    <Route exact path='/:name' component={ User }/>
  </Switch>
);

export default App;
