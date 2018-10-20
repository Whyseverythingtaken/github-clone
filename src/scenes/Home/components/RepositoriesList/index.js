/**
 * RepositoriesList
 */

import React from 'react';
import gql from "graphql-tag";
import { Query, compose, graphql } from "react-apollo";

// Components
import RepositoriesListItem from './components/RepositoriesListItem';

import { GET_REPOSITORIES, ADD_STAR, REMOVE_STAR, UPDATE_SUBSCRIPTION } from './queries';

class RepositoriesList extends React.PureComponent {
  render() {
    const { addStar, removeStar, updateSubscription } = this.props;
    return (
      <Query query={GET_REPOSITORIES}>
        {({ loading, error, data }) => {
        if (loading) return null;
        if (error) {
          console.log(error)
          return null;
        };

        return data.viewer.repositories.edges.map(({ node }) => (
          <RepositoriesListItem
            key={node.id}
            id={node.id}
            description={node.description}
            owner={node.owner.login}
            name={node.name}
            isStarred={node.viewerHasStarred}
            subscription={node.viewerSubscription}
            addStar={addStar}
            removeStar={removeStar}
            updateSubscription={updateSubscription}
          />
        ));
        }}
      </Query>
    );
  }
}

export default compose(
  graphql(ADD_STAR, {
    props: ({ mutate }) => ({
      addStar: starrableId =>
        mutate({
          variables: { starrableId },
          update: (proxy, { data }) => {
            proxy.writeFragment({
              id: `Repository:${starrableId}`,
              fragment: gql`
                fragment repository on Repository {
                  viewerHasStarred
                }
              `,
              data: { viewerHasStarred: true }
            });
          }
        })
    })
  }),
  graphql(REMOVE_STAR, {
    props: ({ mutate }) => ({
      removeStar: starrableId =>
        mutate({
          variables: { starrableId },
          update: (proxy, { data }) => {
            proxy.writeFragment({
              id: `Repository:${starrableId}`,
              fragment: gql`
                fragment repository on Repository {
                  viewerHasStarred
                }
              `,
              data: { viewerHasStarred: false }
            });
          }
        })
    })
  }),
  graphql(UPDATE_SUBSCRIPTION, {
    props: ({ mutate }) => ({
      updateSubscription: (subscribableId, state) =>
        mutate({
          variables: { subscribableId, state },
          update: (proxy, { data }) => {
            proxy.writeFragment({
              id: `Repository:${subscribableId}`,
              fragment: gql`
                fragment repository on Repository {
                  viewerSubscription
                }
              `,
              data: { viewerSubscription: state }
            });
          }
        })
    })
  })
)(RepositoriesList);