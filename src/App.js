/**
 * App
 */

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ApolloProvider } from "react-apollo";

import createClient from './apolloClient';

// Scenes
import Root from './scenes/Root';

class App extends Component {

  render() {
    const client = createClient;
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Route path="/" component={Root} />
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
