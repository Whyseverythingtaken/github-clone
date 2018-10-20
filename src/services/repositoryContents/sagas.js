/**
 * repositoryContents sagas
 */
import { put, call, select, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Actions
import { repositoryContentsLoaded, repositoryContentsError } from './actions';

// Constants
import { LOAD_REPOSITORY_CONTENTS } from './constants';

// Selectors
import { selectToken } from '../authentication/selectors';

// Config
import {
  GITHUB_API_V3_URL
} from '../../config';

export function* loadRepositoryContents({ payload: { user, repo }}) {
  const token = yield select(selectToken);
  const config = {
    method: 'get',
    url: `${GITHUB_API_V3_URL}/repos/${user}/${repo}/contents`,
    headers: {
      authorization: `Bearer ${token}`
    }
  };

  try {
    const response = yield call(axios, config);
    if (response.error) {
      throw new Error(response.error);
    }
    yield put(repositoryContentsLoaded(response.data));
  } catch (error) {
    console.log(error);
    yield put(repositoryContentsError(error.message));
  }
}

export function* watchLoadRepositoryContents() {
  yield takeLatest(LOAD_REPOSITORY_CONTENTS, loadRepositoryContents);
}
