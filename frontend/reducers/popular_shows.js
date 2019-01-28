import { RECEIVE_POPULAR_SHOWS } from '../actions/show_actions';
import merge from 'lodash/merge';

const popularShowsReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_POPULAR_SHOWS:
            let newShows = merge({}, state);

            action.shows.forEach(show => {
                newShows[show.id] = show;
            });
            
            return newShows;
            // return action.shows;
        default:
            return state;
    }
};

export default popularShowsReducer;