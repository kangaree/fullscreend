import merge from 'lodash/merge';

import {
    RECEIVE_SHOW_REVIEWS
} from '../actions/show_actions';

const showReviewsReducer = (state = [], action) => {
    Object.freeze(state)
    // debugger
    switch (action.type) {
        case RECEIVE_SHOW_REVIEWS:
            return action.reviews.reviews ? Object.keys(action.reviews.reviews).map(num => parseInt(num)) : [];
        default:
            return state;
    }
};

export default showReviewsReducer;