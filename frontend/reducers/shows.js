import merge from 'lodash/merge';

import {
    RECEIVE_SHOW,
    RECEIVE_POPULAR_SHOWS,
    RECEIVE_SEARCH_SHOWS,
    RECEIVE_SEARCH_INDEX_SHOWS,
    RECEIVE_SHOW_SEASON,
} from '../actions/show_actions';

const showsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SHOW:

            return merge({}, state, {[action.show.id]: action.show})

        case RECEIVE_SHOW_SEASON:
            return merge({}, state, { [action.showId]: { season: action.season }})
            
        case RECEIVE_POPULAR_SHOWS:

            let newShows = merge({}, state);

            (Object.values(action.shows)).forEach(show => {
                newShows[show.id] = show;
            });

            return newShows;

        case RECEIVE_SEARCH_SHOWS:

            let newShows2 = merge({}, state);

            (Object.values(action.shows)).forEach(show => {
                newShows2[show.id] = show;
            });

            return newShows2;

        case RECEIVE_SEARCH_INDEX_SHOWS:

            let newShows3 = merge({}, state);

            (Object.values(action.shows)).forEach(show => {
                newShows3[show.id] = show;
            });

            return newShows3;
            
        default:
            return state;
    }
};

export default showsReducer;