import { RECEIVE_SEARCH_SHOWS } from '../actions/show_actions';

const searchShowsReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_SEARCH_SHOWS:
            return action.shows;
        default:
            return state;
    }
};

export default searchShowsReducer;