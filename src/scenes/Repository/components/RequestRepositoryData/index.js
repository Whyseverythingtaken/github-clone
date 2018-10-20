/**
 * RequestRepositoryData
 */

import React from 'react';
import { connect } from 'react-redux';

// Actions
import { loadRepositoryContents } from '../../../../services/repositoryContents/actions';

class RequestRepositoryData extends React.PureComponent {
  componentDidMount() {
    const { owner, repo } = this.props;
    console.log('owner', owner, repo);
    this.props.loadRepositoryContents(owner, repo);
  }

  render() {
    return null;
  }
}

export default connect(null, { loadRepositoryContents })(RequestRepositoryData);