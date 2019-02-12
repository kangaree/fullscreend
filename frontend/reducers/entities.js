import { combineReducers } from 'redux';
import usersReducer from './users';
import showsReducer from './shows';
import reviewsReducer from './reviews';
import listsReducer from './lists';

export default combineReducers({
    users: usersReducer,
    reviews: reviewsReducer,
    shows: showsReducer,
    lists: listsReducer,
});