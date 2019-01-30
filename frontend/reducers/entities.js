import { combineReducers } from 'redux';
import usersReducer from './users';
import showsReducer from './shows';
import reviewsReducer from './reviews';

export default combineReducers({
    users: usersReducer,
    shows: showsReducer,
    reviews: reviewsReducer,
});