import merge from 'lodash/merge';

import {
    RECEIVE_SHOW,
    RECEIVE_REVIEW,
    RECEIVE_SHOW_REVIEWS,
    REMOVE_REVIEW,
    RECEIVE_REVIEWS,
} from '../actions/show_actions';

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SHOW_REVIEWS:
            return merge({}, state, action.reviews.reviews);
        case RECEIVE_REVIEW:
        
            // action.review.review is edit, and action.review is new
            const review = action.review.review || action.review;
            
            return merge({}, state, { [review.id]: review });

        case REMOVE_REVIEW:
            let newState = merge({}, state);
            delete newState[action.reviewId];
            return newState;

        case RECEIVE_REVIEWS:
            return merge({}, state, action.reviews);

        default:
            return state;
    }
}

export default reviewsReducer;