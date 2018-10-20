/**
 * Root
 */

import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

// Components
import LoginButton from './components/LoginButton';
import AuthenticationGate from './components/AuthenticationGate';
import GithubLogo from './components/GithubLogo';

// Scenes
import Home from '../Home';
import Repository from '../Repository';

// Styles
import styles from './styles';

const Root = ({ classes, token }) => (
  <div>
    <AppBar className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
      <Grid container direction="row" justify="space-between">
        <Grid item>
          <Link to="/home">
            <GithubLogo />
          </Link>
        </Grid>
        <Grid item>
          <LoginButton />
        </Grid>
      </Grid>
      </Toolbar>
    </AppBar>
    <AuthenticationGate>
      <div className={classes.container}>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/repository" component={Repository} />
          <Redirect from="/*" to="/home" />
        </Switch>
      </div>
    </AuthenticationGate>
  </div>
);

export default withStyles(styles)(Root);