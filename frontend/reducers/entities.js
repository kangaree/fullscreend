import { combineReducers } from 'redux';
import usersReducer from './users';
import searchShowsReducer from './search_shows';

export default combineReducers({
    users: usersReducer,
    search_shows: searchShowsReducer,
});
