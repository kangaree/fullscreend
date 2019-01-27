import { RECEIVE_SEARCH_SHOWS, REMOVE_SEARCHED_SHOWS } from '../actions/show_actions';

const searchShowsReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_SEARCH_SHOWS:
            return action.shows;
        case REMOVE_SEARCHED_SHOWS:
            return [];
        default:
            return state;
    }
};

export default searchShowsReducer;