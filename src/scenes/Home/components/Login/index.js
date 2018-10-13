/**
 * Login
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import qs from 'qs';

// Actions
import { authenticate } from '../../../../services/authentication/actions';

// Selectors
import { selectToken } from '../../../../services/authentication/selectors';
// Environment
import {
  GITHUB_OAUTH_CLIENT_ID,
  GITHUB_OAUTH_URL
} from '../../../../config';

const redirect_uri = 'http://localhost:3000'

class Login extends React.PureComponent {
  componentDidMount() {
    const { code } = qs.parse(window.location.search, {
      ignoreQueryPrefix: true
    });
    
    if (code) {
      this.props.authenticate(code);
    }
  }

  render() {
    const { loggedin } = this.props;
    const queryString = qs.stringify({
      client_id: GITHUB_OAUTH_CLIENT_ID,
      scope: 'user',
      redirect_uri
    });

    const href = `${GITHUB_OAUTH_URL}?${queryString}`;
    if (!loggedin) {
      return (
        <a href={href}>
          Login
        </a>
      );
    }
    return null;
  }
}

const mapStateToProps = createStructuredSelector({
  loggedin: selectToken
});

export default connect(mapStateToProps, { authenticate })(Login);