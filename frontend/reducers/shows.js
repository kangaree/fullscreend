import merge from 'lodash/merge';

import {
    RECEIVE_SHOW,
    RECEIVE_POPULAR_SHOWS,
    RECEIVE_SEARCH_SHOWS,
} from '../actions/show_actions';

const showsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SHOW:

            return merge({}, state, {[action.show.id]: action.show})
            
        case RECEIVE_POPULAR_SHOWS:
            // return merge({}, state, action.shows);

            let newShows = merge({}, state);

            (Object.values(action.shows)).forEach(show => {
                newShows[show.id] = show;
            });

            return newShows;

        case RECEIVE_SEARCH_SHOWS:
            return merge({}, state, action.shows);
        default:
            return state;
    }
};

export default showsReducer;