import { combineReducers } from 'redux';
import usersReducer from './users';
import searchShowsReducer from './search_shows';
import popularShowsReducer from './popular_shows';
import showShowsReducer from './show_shows';
import showsReducer from './shows';

export default combineReducers({
    users: usersReducer,
    // comment out below later
    search_shows: searchShowsReducer,
    popular_shows: popularShowsReducer,
    shows_show: showShowsReducer,
    shows: showsReducer,
});