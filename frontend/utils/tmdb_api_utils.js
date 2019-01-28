export const fetchSearchShows = searchTerm => {
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

// https://api.themoviedb.org/3/tv/30991?api_key=138b6460ffe9a8a67112c073f2008fd5&language=en-US