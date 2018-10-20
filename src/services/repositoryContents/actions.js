/**
 * repositoryContents actions
 */

import {
  LOAD_REPOSITORY_CONTENTS,
  REPOSITORY_CONTENTS_LOADED,
  REPOSITORY_CONTENTS_ERROR
} from './constants';

export function loadRepositoryContents(user, repo) {
  return {
    type: LOAD_REPOSITORY_CONTENTS,
    payload: {
      user,
      repo
    }
  };
}

export function repositoryContentsLoaded(response) {
  return {
    type: REPOSITORY_CONTENTS_LOADED,
    payload: response
  };
}

export function repositoryContentsError(error) {
  return {
    type: REPOSITORY_CONTENTS_ERROR,
    payload: error
  };
}
