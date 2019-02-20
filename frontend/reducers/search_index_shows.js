import { RECEIVE_SEARCH_INDEX_SHOWS, REMOVE_SEARCHED_INDEX_SHOWS } from '../actions/show_actions';
import merge from 'lodash/merge';

const searchIndexShowsReducer = (state = [], action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_SEARCH_INDEX_SHOWS:
            return merge([], state, action.shows.map((show) => show.id));
        case REMOVE_SEARCHED_INDEX_SHOWS:
            return [];
        default:
            return state;
    }
};

export default searchIndexShowsReducer;