/**
 * Root
 */

import React from 'react';
import { Route } from 'react-router-dom';

// Scenes
import Login from '../Login';
import Home from '../Home';

const Root = () => (
  <div>
    <Login />
    <Route path="/Home" component={Home} />
  </div>
);

export default Root;