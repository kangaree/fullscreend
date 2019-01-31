import merge from 'lodash/merge';

import {
    RECEIVE_SHOW_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW
} from '../actions/show_actions';

const showReviewsReducer = (state = [], action) => {
    Object.freeze(state)
    let newState = merge([], state);
    switch (action.type) {
        case RECEIVE_REVIEW:
            newState.push(action.review.id);
            return newState;
        case RECEIVE_SHOW_REVIEWS:
            return action.reviews.reviews ? Object.keys(action.reviews.reviews).map(num => parseInt(num)) : [];
        case REMOVE_REVIEW:
            const index = newState.indexOf(action.review);
            if (index !== -1) newState.splice(index, 1)

            return newState;
        default:
            return state;
    }
};

export default showReviewsReducer;