export const fetchSearchShows = searchTerm => {
    return $.ajax({
        method: 'GET',
        url: `https://api.themoviedb.org/3/search/tv?api_key=138b6460ffe9a8a67112c073f2008fd5&language=en-US&query=${searchTerm}&page=1`
    })
}

export const fetchSearchIndexShows = searchTerm => {
    return $.ajax({
        method: 'GET',
        url: `https://api.themoviedb.org/3/search/tv?api_key=138b6460ffe9a8a67112c073f2008fd5&language=en-US&query=${searchTerm}&page=1`
    })
}

export const fetchPopularShows = (page) => {
    return $.ajax({
        method: 'GET',
        url: `https://api.themoviedb.org/3/discover/tv?api_key=138b6460ffe9a8a67112c073f2008fd5&language=en-US&sort_by=popularity.desc&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false`
    })
}

export const fetchShow = id => {
    return $.ajax({
        method: 'GET',
        url: `https://api.themoviedb.org/3/tv/${id}?api_key=138b6460ffe9a8a67112c073f2008fd5&language=en-US`
    })
}

export const createReview = review => {
    return $.ajax({
        method: 'POST',
        url: 'api/reviews',
        data: { review }
    })
};

export const fetchShowReviews = showId => (
    $.ajax({
        method: 'GET',
        url: `api/shows/${showId}/reviews`,
    })
);

export const fetchShowSeason = (showId, seasonNumber) => {
    return $.ajax({
        method: 'GET',
        url: `https://api.themoviedb.org/3/tv/${showId}/season/${seasonNumber}?api_key=138b6460ffe9a8a67112c073f2008fd5&language=en-US`
    })
};

export const fetchReview = id => (
    $.ajax({
        method: 'GET',
        url: `api/reviews/${id}`,
    })
)


export const updateReview = review => {
    return $.ajax({
        url: `api/reviews/${review.id}`,
        method: 'PATCH',
        data: { review }
    })
};

export const deleteReview = reviewId => (
    $.ajax({
        url: `api/reviews/${reviewId}`,
        method: 'DELETE'
    })
);

export const fetchReviews = () => (
    $.ajax({
        method: 'GET',
        url: `api/reviews/`,
    })
)