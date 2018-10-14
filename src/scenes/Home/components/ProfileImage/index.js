/**
 * ProfileImage
 */

import React from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";

const query = gql`
{
  viewer {
    avatarUrl
  }
}`;

const ProfileImage = () => (
  <Query query={query}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return <img src={data.viewer.avatarUrl} alt="Github profile img" />
    }}
  </Query>
);

export default ProfileImage;