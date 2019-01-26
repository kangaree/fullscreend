import * as APIUtil from '../utils/tmdb_api_utils';

export const RECEIVE_SEARCH_SHOWS = 'RECEIVE_SEARCH_SHOWS';
export const REQUEST_SEARCH_SHOWS = 'REQUEST_SEARCH_SHOWS';

export const fetchSearchShows = searchTerm => dispatch => {
    return APIUtil.fetchSearchShows(searchTerm)
        .then(shows => dispatch(receiveSearchShows(shows.results)))
};

export const receiveSearchShows = shows => {
    return {
        type: RECEIVE_SEARCH_SHOWS,
        shows
    }
};