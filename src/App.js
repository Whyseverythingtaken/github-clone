/**
 * App
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { ApolloProvider } from "react-apollo";

import createClient from './apolloClient';

// Selectors
import { selectToken } from './services/authentication/selectors';

// Scenes
import Root from './scenes/Root';
import { createStructuredSelector } from 'reselect';

class App extends Component {

  render() {
    const client = createClient(this.props.token);
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Route path="/" component={Root} />
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  token: selectToken
});

export default connect(mapStateToProps)(App);
