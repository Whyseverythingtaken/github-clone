/**
 * ProfileImage
 */

import React from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// Styles
import styles from './styles';

const query = gql`
{
  viewer {
    avatarUrl
    login
    name
  }
}`;

const ProfileImage = ({ classes }) => (
  <Query query={query}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) {
        console.log(error)
        return null;
      };

      return (
        <div>
          <img
            src={data.viewer.avatarUrl}
            alt="Github profile img"
            className={classes.img}
          />
          <Typography variant="h5" className={classes.name}>
            {data.viewer.name}
          </Typography>
          <Typography variant="subtitle1" className={classes.login}>
            {data.viewer.login}
          </Typography>
        </div>
      );
    }}
  </Query>
);

export default withStyles(styles)(ProfileImage);