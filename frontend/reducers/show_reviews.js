import merge from 'lodash/merge';

import {
    RECEIVE_SHOW_REVIEWS, RECEIVE_REVIEW
} from '../actions/show_actions';

const showReviewsReducer = (state = [], action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_REVIEW:
            let newState = merge([], state);
            newState.push(action.review.id);
            return newState;
            // return merge([], state, [action.review.id])
        case RECEIVE_SHOW_REVIEWS:
            return action.reviews.reviews ? merge([],state,Object.keys(action.reviews.reviews).map(num => parseInt(num))) : state;
        default:
            return state;
    }
};

export default showReviewsReducer;