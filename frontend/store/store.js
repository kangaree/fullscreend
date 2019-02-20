import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from '../reducers/root';
import thunk from '../thunk/thunk';

// export default (preloadedState = {}) => createStore(
//     rootReducer, preloadedState,
//     // put back logger as second argument if needed
//     applyMiddleware(thunk, logger)
// );

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
    // must use 'require' (import only allowed at top of file)
    const { logger } = require('redux-logger');
    middlewares.push(logger);
}

const configureStore = (preloadedState = {}) => (
    createStore(rootReducer, preloadedState, applyMiddleware(...middlewares))
);

export default configureStore;