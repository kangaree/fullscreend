import { combineReducers } from 'redux';
import searchShowsReducer from './search_shows';
import popularShowsReducer from './popular_shows';
import showShowsReducer from './show_shows';

// import filters from './filters_reducer';
import modal from './modal';

export default combineReducers({
    // filters,
    modal,
    // just added
    search_shows: searchShowsReducer,
    popular_shows: popularShowsReducer,
    shows_show: showShowsReducer,
});