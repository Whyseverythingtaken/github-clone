import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();

// Redux persist config
const config = {
  key: 'primary',
  storage,
  whitelist: [
    'authentication'
  ]
}

const reducer = persistReducer(config, rootReducer);

// redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(sagaMiddleware)
));
sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);

export { persistor, store };