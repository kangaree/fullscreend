import * as APIUtil from '../utils/show_api_utils';

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

export const RECEIVE_SEARCH_INDEX_SHOWS = 'RECEIVE_SEARCH_INDEX_SHOWS';
export const REQUEST_SEARCH_INDEX_SHOWS = 'REQUEST_SEARCH_INDEX_SHOWS';

export const fetchSearchIndexShows = searchTerm => dispatch => {
    return APIUtil.fetchSearchIndexShows(searchTerm)
        .then(shows => dispatch(receiveSearchIndexShows(shows.results)))
};

export const receiveSearchIndexShows = shows => {
    return {
        type: RECEIVE_SEARCH_INDEX_SHOWS,
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

export const REMOVE_SEARCHED_INDEX_SHOWS = 'REMOVE_SEARCHED_INDEX_SHOWS'

export const discardSearchedIndexShows = () => dispatch => (
    dispatch(removeSearchedIndexShows())
);

export const removeSearchedIndexShows = () => ({
    type: REMOVE_SEARCHED_INDEX_SHOWS
})

export const RECEIVE_SHOW = 'RECEIVE_SHOW';


export const receiveShow = show => {
    return {
        type: RECEIVE_SHOW,
        show
    }
};

export const fetchShow = id => dispatch => {
    dispatch(startLoadingSingleShow());
    return APIUtil.fetchShow(id)
        .then(show => (dispatch(receiveShow(show))))
};

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

export const fetchShowReviews = showId => dispatch => {
    return APIUtil.fetchShowReviews(showId)
        .then(reviews => (dispatch(receiveShowReviews(reviews))))
};

export const REMOVE_REVIEW = "REMOVE_REVIEW"

export const fetchReview = id => dispatch => {
    return APIUtil.fetchReview(id)
        .then(review => (dispatch(receiveReview(review))))
};

export const updateReview = review => dispatch => (
    APIUtil.updateReview(review)
        .then(review => dispatch(receiveReview(review)))
);

export const deleteReview = reviewId => dispatch => {
    return APIUtil.deleteReview(reviewId).then(review => dispatch(removeReview(reviewId)))
};

const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
});

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';

export const receiveReviews = reviews => {
    return {
        type: RECEIVE_REVIEWS,
        reviews
    }
};

export const fetchReviews = () => dispatch => {
    dispatch(startLoadingReviews());
    return APIUtil.fetchReviews()
        .then(reviews => (dispatch(receiveReviews(reviews))))
};

export const START_LOADING_SHOWS = 'START_LOADING_SHOWS';
export const START_LOADING_SINGLE_SHOW = 'START_LOADING_SINGLE_SHOW';

export const startLoadingShows = () => ({
    type: START_LOADING_SHOWS
});

export const startLoadingSingleShow = () => ({
    type: START_LOADING_SINGLE_SHOW
});

export const START_LOADING_REVIEWS = 'START_LOADING_REVIEWS';
export const START_LOADING_SINGLE_REVIEW = 'START_LOADING_SINGLE_REVIEW';

export const startLoadingReviews = () => ({
    type: START_LOADING_REVIEWS
});

export const startLoadingSingleReview = () => ({
    type: START_LOADING_SINGLE_REVIEW
});