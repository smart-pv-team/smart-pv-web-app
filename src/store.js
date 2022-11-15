import {applyMiddleware, compose, createStore} from 'redux'
import storage from 'redux-persist/lib/storage'
import rootReducer from 'reducers/reducers.js'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk';

function middlewares() {
  const middlewares = [];
  middlewares.push(thunkMiddleware);
  middlewares.push(logger);
  return middlewares;
}

const logger = createLogger({
  diff: true,
  collapsed: true
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ["refresh"]
};

/*
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer,  applyMiddleware(logger));

export const persistor = persistStore(store);
export default store;
*/

// removed data caching for easier development

const store = createStore(rootReducer, undefined, compose(applyMiddleware(...middlewares())));
export default store;