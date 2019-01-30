import merge from 'lodash/merge';

import {
    RECEIVE_SHOW,
    RECEIVE_REVIEW,
} from '../actions/show_actions';

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_REVIEW:
            const review = action.review || {};
            return merge({}, state, { [review.id]: review });
        default:
            return state;
    }
}

export default reviewsReducer;