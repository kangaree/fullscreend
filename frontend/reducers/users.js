import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_SHOW_REVIEWS, RECEIVE_REVIEWS } from '../actions/show_actions';
import { RECEIVE_LISTS } from '../actions/list_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { [action.user.id]: action.user });
        case RECEIVE_SHOW_REVIEWS:
            return merge({}, state, action.reviews.users);

        case RECEIVE_REVIEWS:
            return merge({}, state, action.reviews.users);

        case RECEIVE_LISTS:
            return merge({}, state, action.lists.users);
        default:
            return state;
    }
}; 