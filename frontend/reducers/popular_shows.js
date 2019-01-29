import { RECEIVE_POPULAR_SHOWS } from '../actions/show_actions';
import merge from 'lodash/merge';

const popularShowsReducer = (state = [], action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_POPULAR_SHOWS:
            return merge([], state, action.shows.map((show) => show.id));
        default:
            return state;
    }
};

export default popularShowsReducer;