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

export const RECEIVE_POPULAR_SHOWS = 'RECEIVE_POPULAR_SHOWS';
export const REQUEST_POPULAR_SHOWS = 'REQUEST_POPULAR_SHOWS';

export const fetchPopularShows = page => dispatch => {
    return APIUtil.fetchPopularShows(page)
        .then(shows => dispatch(receivePopularShows(shows.results)))
};

export const receivePopularShows = shows => {
    return {
        type: RECEIVE_POPULAR_SHOWS,
        shows
    }
};

export const REMOVE_SEARCHED_SHOWS = 'REMOVE_SEARCHED_SHOWS'

export const discardSearchedShows = () => dispatch => (
    dispatch(removeSearchedShows())
);

export const removeSearchedShows = () => ({
    type: REMOVE_SEARCHED_SHOWS
})

export const RECEIVE_SHOW = 'RECEIVE_SHOW';


export const receiveShow = show => {
    return {
        type: RECEIVE_SHOW,
        show
    }
};

export const fetchShow = id => dispatch => (
    APIUtil.fetchShow(id)
        .then(show => (dispatch(receiveShow(show))))
);

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveReview = (review) => {
    return    {
        type: RECEIVE_REVIEW,
        review,
    }
}

export const createReview = review => dispatch => {
    return APIUtil.createReview(review).then(review => (
        dispatch(receiveReview(review))
    ))
};

export const RECEIVE_SHOW_REVIEWS = 'RECEIVE_SHOW_REVIEWS';

export const receiveShowReviews = reviews => {
    return {
        type: RECEIVE_SHOW_REVIEWS,
        reviews
    }
};

export const fetchShowReviews = showId => dispatch => (
    APIUtil.fetchShowReviews(showId)
        .then(reviews => (dispatch(receiveShowReviews(reviews))))
);