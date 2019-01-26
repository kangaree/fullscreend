export const fetchSearchShows = searchTerm => (
    $.ajax({
        method: 'GET',
        url: `http://api.themoviedb.org/3/search/tv?api_key=138b6460ffe9a8a67112c073f2008fd5&language=en-US&query=${searchTerm}&page=1`
    })
)