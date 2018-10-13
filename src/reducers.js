import { combineReducers } from 'redux';

import authenticationReducer from './services/authentication/reducer';

const rootReducer = combineReducers({
  authentication: authenticationReducer
});

export default rootReducer;