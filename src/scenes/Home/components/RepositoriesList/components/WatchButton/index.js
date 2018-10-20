/**
 * WatchButton
 */

import React from 'react';
import Button from '@material-ui/core/Button';

class WatchButton extends React.Component {
  handleClick = () => {
    const { subscription, updateSubscription, id } = this.props;
    subscription === 'SUBSCRIBED' ? updateSubscription(id, 'UNSUBSCRIBED')
    : updateSubscription(id, 'SUBSCRIBED');
  }

  render() {
    const { subscription } = this.props;
    return (
      <Button onClick={this.handleClick} size="small">
        {subscription === 'SUBSCRIBED' ? 'Unwatch' : 'Watch'}
      </Button>
    );
  }
}

export default WatchButton;