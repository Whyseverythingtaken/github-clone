/**
 * Root
 */

import React from 'react';
import { Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Scenes
import Login from '../Login';
import Home from '../Home';

// Styles
import styles from './styles';

import GithubLogo from './GithubLogo';

const Root = ({ classes }) => (
  <div>
    <AppBar className={classes.appbar}>
      <Toolbar>
        <GithubLogo />
        <Login />
      </Toolbar>
    </AppBar>
    <div className={classes.container}>
      <Route path="/Home" component={Home} />
    </div>
  </div>
);

export default withStyles(styles)(Root);