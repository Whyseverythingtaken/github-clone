/**
 * StarButton
 */

import React from 'react';
import Button from '@material-ui/core/Button'

class StarButton extends React.PureComponent {
  handleClick = () => {
    const { isStarred, addStar, removeStar, id } = this.props;
    isStarred ? removeStar(id) : addStar(id);
  }

  render() {
    const { isStarred } = this.props;
    return (
      <Button onClick={this.handleClick} size="small">
        {isStarred ? 'Unstar' : 'Star'}
      </Button>
    );
  }
}

export default StarButton;