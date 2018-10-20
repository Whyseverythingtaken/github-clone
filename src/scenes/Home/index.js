/**
 * Home
 */

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

// Components
import Profile from './components/Profile';
import RepositoriesList from './components/RepositoriesList';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid container spacing={32}>
          <Grid item container xs={12} md={4} justify="center">
            <Profile />
          </Grid>
          <Grid item xs={12} md={8} container spacing={16} justify="center">
            <RepositoriesList />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Home;
