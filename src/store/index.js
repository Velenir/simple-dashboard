import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

const middlewares = [];
let enhancer;

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line no-underscore-dangle
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ serialize: true })
    || compose;

  enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  );
} else {
  enhancer = applyMiddleware(...middlewares);
}

export default function (initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
