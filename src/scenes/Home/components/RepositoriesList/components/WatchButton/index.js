/**
 * WatchButton
 */

import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles';

import WatchIcon from './WatchIcon';
import styles from './styles';

class WatchButton extends React.Component {
  handleClick = () => {
    const { subscription, updateSubscription, id } = this.props;
    subscription === 'SUBSCRIBED' ? updateSubscription(id, 'UNSUBSCRIBED')
    : updateSubscription(id, 'SUBSCRIBED');
  }

  render() {
    const { subscription, classes } = this.props;
    return (
      <Button onClick={this.handleClick} size="small" className={classes.button}>
        <WatchIcon className={classes.icon} />
        <Typography className={classes.typography}  variant="caption">
          {subscription === 'SUBSCRIBED' ? 'Unwatch' : 'Watch'}
        </Typography>
      </Button>
    );
  }
}

export default withStyles(styles)(WatchButton);