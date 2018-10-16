/**
 * Repositories
 */

import React from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";

// Components
import RepositoryItem from './components/RepositoryItem';

const query = gql`
{
  viewer {
    repositories(first: 100) {
      edges {
        node {
          id
          name
          url
          description
        }
      }
    }
  }
}`;

class Repositories extends React.PureComponent {
  render() {
    return (
      <Query query={query}>
        {({ loading, error, data }) => {
        if (loading) return null;
        if (error) {
          console.log(error)
          return null;
        };

        return data.viewer.repositories.edges.map(({ node }) => (
          <RepositoryItem
            key={node.id}
            description={node.description}
            link={node.link}
            name={node.name}
            url={node.url}
          />
        ));
        }}
      </Query>
    );
  }
}

export default Repositories;