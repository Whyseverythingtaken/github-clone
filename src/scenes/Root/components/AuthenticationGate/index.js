/**
 * AuthenticationGate
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import qs from 'qs';

// Actions
import { requestToken } from '../../../../services/authentication/actions';

// Selectors
import { selectToken } from '../../../../services/authentication/selectors';

class AuthenticationGate extends React.PureComponent {
  componentDidMount() {
    const { code } = qs.parse(window.location.search, {
      ignoreQueryPrefix: true
    });
    
    if (code) {
      this.props.requestToken(code);
    }
  }

  render() {
    const { children, isAuthenticated } = this.props;
    if (!isAuthenticated) {
      return null
    }
    return children;
  }
}

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectToken
});

export default connect(mapStateToProps, { requestToken })(AuthenticationGate);