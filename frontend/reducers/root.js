import { combineReducers } from 'redux';
import entitiesReducer from './entities';
import sessionReducer from './session';
import uiReducer from './ui';
import errorsReducer from './errors';

export default combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    ui: uiReducer,
    errors: errorsReducer,
});
