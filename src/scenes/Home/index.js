/**
 * Home
 */

import React, { Component } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';

import Login from './components/Login';

class Home extends Component {
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default Home;
