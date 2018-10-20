import gql from "graphql-tag";

export const GET_REPOSITORIES = gql`
query {
  viewer {
    repositories(first: 100) {
      edges {
        node {
          id
          name
          description
          viewerHasStarred
          viewerSubscription
          owner {
            login
          }
        }
      }
    }
  }
}`;

export const ADD_STAR = gql`
  mutation($starrableId: ID!) {
    addStar(input: { starrableId: $starrableId }) {
      starrable {
        id
      }
    }
  }
`;

export const REMOVE_STAR = gql`
  mutation($starrableId: ID!) {
    removeStar(input: { starrableId: $starrableId }) {
      starrable {
        id
      }
    }
  }
`;

export const UPDATE_SUBSCRIPTION = gql`
  mutation($subscribableId: ID!, $state: SubscriptionState!) {
    updateSubscription(input: { subscribableId: $subscribableId, state: $state }) {
      clientMutationId
    }
  }
`;