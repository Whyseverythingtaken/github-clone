/**
 * Home
 */

import React, { Component } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';

import ProfileImage from './components/ProfileImage';

class Home extends Component {
  render() {
    return (
      <div>
        <ProfileImage />
      </div>
    );
  }
}

export default Home;
