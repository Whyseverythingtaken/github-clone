import { all } from 'redux-saga/effects'

import { watchAuthenticate } from './services/authentication/sagas';

export default function* rootSaga() {
  yield all([
    watchAuthenticate()
  ])
}