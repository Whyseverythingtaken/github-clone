import ApolloClient from "apollo-boost";

const createClient = token => new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: operation => {
    if (token) {
      operation.setContext({
        headers: {
          authorization: `Bearer ${token}`
        }
      });
    }
  }
});

export default createClient;