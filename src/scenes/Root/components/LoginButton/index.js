/**
 * LoginButton
 */

import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { createStructuredSelector } from 'reselect';
import qs from 'qs';

// Selectors
import { selectToken } from '../../../../services/authentication/selectors';

// Environment
import {
  GITHUB_OAUTH_CLIENT_ID,
  GITHUB_OAUTH_URL
} from '../../../../config';

const redirect_uri = location.origin; //eslint-disable-line

class LoginButton extends React.PureComponent {
  render() {
    const { isAuthenticated } = this.props;
    const queryString = qs.stringify({
      client_id: GITHUB_OAUTH_CLIENT_ID,
      scope: 'user repo notifications gist',
      redirect_uri
    });

    const href = `${GITHUB_OAUTH_URL}?${queryString}`;
    if (isAuthenticated) {
      return null;
    }

    return (
      <Button variant="contained" color="primary" href={href}>
        Login
      </Button>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectToken
});

export default connect(mapStateToProps)(LoginButton);