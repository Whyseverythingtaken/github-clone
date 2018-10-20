import { all } from 'redux-saga/effects'

import { watchAuthenticate } from './services/authentication/sagas';
import { watchLoadRepositoryContents } from './services/repositoryContents/sagas';

export default function* rootSaga() {
  yield all([
    watchAuthenticate(),
    watchLoadRepositoryContents()
  ])
}