/**
 * Home
 */

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

// Components
import ProfileImage from './components/ProfileImage';
import Repositories from './components/Repositories';

class Home extends Component {
  render() {
    return (
      <Grid container spacing={32}>
        <Grid item container xs={12} md={4} justify="center">
          <ProfileImage />
        </Grid>
        <Grid item xs={12} md={8} container spacing={16} justify="center">
          <Repositories />
        </Grid>
      </Grid>
    );
  }
}

export default Home;
