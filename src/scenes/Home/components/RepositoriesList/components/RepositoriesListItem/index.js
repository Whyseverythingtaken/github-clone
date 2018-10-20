/**
 * RepositoriesListItem
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import qs from 'qs';

// Styles
import styles from './styles';
import StarButton from '../StarButton';
import WatchButton from '../WatchButton';

const RepositoriesListItem = ({
  classes,
  description,
  name,
  owner,
  ...props
}) => {
  
  const query = qs.stringify({ owner, repo: name });
  return (
    <Grid item xs={12} sm={6}>
      <Paper className={classes.paper} elevation={0}>
        <Link className={classes.link} to={`/repository?${query}`}>
          {name}
        </Link>
        <Typography className={classes.typography} noWrap>
          {description}
        </Typography>
        <StarButton {...props} />
        <WatchButton {...props} />
      </Paper>
    </Grid>
  )
}

export default withStyles(styles)(RepositoriesListItem);