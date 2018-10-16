/**
 * RepositoryItem
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// Styles
import styles from './styles';

const RepositoryItem = ({ classes, url, name, description }) => {
  return (
    <Grid item xs={12} sm={6}>
      <Paper className={classes.paper} elevation={0}>
        <a className={classes.link} href={url}>{name}</a>
        <Typography className={classes.typography}>
          {description}
        </Typography>
      </Paper>
    </Grid>
  )
}

export default withStyles(styles)(RepositoryItem);