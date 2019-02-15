import merge from 'lodash/merge';

import {
    RECEIVE_LISTING,
    RECEIVE_LISTINGS,
    REMOVE_LISTING
} from '../actions/list_actions';

const listingsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        // case RECEIVE_LIST:
        //     return merge({}, state, { [action.list.id]: action.list });

        case RECEIVE_LISTING:
            return merge({}, state, { [action.listing.id]: action.listing });

        case REMOVE_LISTING:
            let newState = merge({}, state);
            delete newState[action.listingId];
            return newState;

        default:
            return state;
    };
};

export default listingsReducer;