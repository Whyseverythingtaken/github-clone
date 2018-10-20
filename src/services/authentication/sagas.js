/**
 * authentication sagas
 */
import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Constants
import { AUTHENTICATE } from './constants';

// Actions
import { authenticationSuccess, authenticationError } from './actions';

// Config
import {
  API_URL
} from '../../config';

export function* authenticate({ code }) {
  const config = {
    method: 'get',
    url: `${API_URL}/authenticate/${code}`
  };

  try {
    const response = yield call(axios, config);

    if (response.data.error) {
      throw new Error(response.data.error);
    }
    localStorage.setItem('github_token', response.data.token); // set token in local storage
    yield put(authenticationSuccess(response.data)); // set token in redux state
  } catch (error) {
    console.log(error);
    yield put(authenticationError(error.message));
  }
}

export function* watchAuthenticate() {
  yield takeLatest(AUTHENTICATE, authenticate);
}
