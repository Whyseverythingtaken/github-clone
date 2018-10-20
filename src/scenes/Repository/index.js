/**
 * Repository scene
 */

import React from 'react';
import qs from 'qs';

// Components
import RequestRepositoryData from './components/RequestRepositoryData';
import RepositoryContents from './components/RepositoryContents';


class Repository extends React.PureComponent {
  componentDidMount() {
  }
  
  render() {
    const { location } = this.props;
    const { owner, repo } = qs.parse(location.search, { ignoreQueryPrefix: true });
    
    return (
      <React.Fragment>
        <RequestRepositoryData repo={repo} owner={owner} />
        <RepositoryContents />
      </React.Fragment>
    );
  }
}

export default Repository;