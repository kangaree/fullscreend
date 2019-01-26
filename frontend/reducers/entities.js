import { combineReducers } from 'redux';
import usersReducer from './users';
import showsReducer from './shows';

export default combineReducers({
    users: usersReducer,
    search_shows: showsReducer,
});
