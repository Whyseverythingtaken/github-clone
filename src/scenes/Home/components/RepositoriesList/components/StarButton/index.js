/**
 * StarButton
 */

import React from 'react';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles';

import StarIcon from './StarIcon';
import styles from './styles';

class StarButton extends React.PureComponent {
  handleClick = () => {
    const { isStarred, addStar, removeStar, id } = this.props;
    isStarred ? removeStar(id) : addStar(id);
  }

  render() {
    const { isStarred, classes } = this.props;
    return (
      <Button onClick={this.handleClick} size="small" className={classes.button}>
        <StarIcon className={classes.icon} />
        <Typography className={classes.typography} variant="caption">
          {isStarred ? 'Unstar' : 'Star'}
        </Typography>
      </Button>
    );
  }
}

export default withStyles(styles)(StarButton);