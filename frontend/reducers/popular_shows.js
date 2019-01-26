import { RECEIVE_POPULAR_SHOWS } from '../actions/show_actions';

const popularShowsReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_POPULAR_SHOWS:
            return action.shows;
        default:
            return state;
    }
};

export default popularShowsReducer;