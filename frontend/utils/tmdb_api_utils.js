export const fetchSearchShows = searchTerm => (
    $.ajax({
        method: 'GET',
        url: `http://api.themoviedb.org/3/search/tv?api_key=138b6460ffe9a8a67112c073f2008fd5&language=en-US&query=${searchTerm}&page=1`
    })
)

export const fetchPopularShows = (page = 1) => (
    $.ajax({
        method: 'GET',
        url: `https://api.themoviedb.org/3/discover/tv?api_key=138b6460ffe9a8a67112c073f2008fd5&language=en-US&sort_by=popularity.desc&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false`
    })
)

// https://api.themoviedb.org/3/discover/tv?api_key=138b6460ffe9a8a67112c073f2008fd5&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false