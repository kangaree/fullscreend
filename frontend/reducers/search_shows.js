import { RECEIVE_SEARCH_SHOWS, REMOVE_SEARCHED_SHOWS } from '../actions/show_actions';
import merge from 'lodash/merge';

const searchShowsReducer = (state = [], action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_SEARCH_SHOWS:
            // let newShows = merge({}, state);

            // action.shows.forEach(show => {
            //     newShows[show.id] = show;
            // });

            // return newShows;

            return merge([], state, action.shows.map((show) => show.id));
        case REMOVE_SEARCHED_SHOWS:
            return [];
        default:
            return state;
    }
};

export default searchShowsReducer;