import { combineReducers } from 'redux';
import searchShowsReducer from './search_shows';
import popularShowsReducer from './popular_shows';
import showShowsReducer from './show_shows';
import showReviewsReducer from './show_reviews';
import currentListsReducer from './current_lists';
import listsShowReducer from './lists_show';

// import filters from './filters_reducer';
import modal from './modal';

export default combineReducers({
    // filters,
    modal,
    search_shows: searchShowsReducer,
    popular_shows: popularShowsReducer,
    shows_show: showShowsReducer,
    show_reviews: showReviewsReducer,
    currentLists: currentListsReducer,
    lists_show: listsShowReducer,
});