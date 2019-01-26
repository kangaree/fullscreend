import * as APIUtil from '../utils/tmdb_api_utils';

export const RECEIVE_SEARCH_SHOWS = 'RECEIVE_SEARCH_SHOWS';
export const REQUEST_SEARCH_SHOWS = 'REQUEST_SEARCH_SHOWS';

export const fetchSearchShows = searchTerm => dispatch => {
    return APIUtil.fetchSearchShows(searchTerm)
        .then(shows => dispatch(receiveShows(shows.results)))
};

export const receiveShows = shows => {
    return {
        type: RECEIVE_SEARCH_SHOWS,
        shows
    }
};

export const RECEIVE_POPULAR_SHOWS = 'RECEIVE_POPULAR_SHOWS';
export const REQUEST_POPULAR_SHOWS = 'REQUEST_POPULAR_SHOWS';

export const fetchPopularShows = page => dispatch => {
    return APIUtil.fetchPopularShows(page)
        .then(shows => dispatch(receiveShows(shows.results)))
};

export const receivePopularShows = shows => {
    return {
        type: RECEIVE_POPULAR_SHOWS,
        shows
    }
};