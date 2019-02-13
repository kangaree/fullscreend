import { combineReducers } from 'redux';
import usersReducer from './users';
import showsReducer from './shows';
import reviewsReducer from './reviews';
import listsReducer from './lists';
import listingsReducer from './listings';

export default combineReducers({
    users: usersReducer,
    reviews: reviewsReducer,
    shows: showsReducer,
    lists: listsReducer,
    listings: listingsReducer,
});