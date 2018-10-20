import { combineReducers } from 'redux';

import authenticationReducer from './services/authentication/reducer';
import repositoryContentsReducer from './services/repositoryContents/reducer';

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  repositoryContents: repositoryContentsReducer
});

export default rootReducer;