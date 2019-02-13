import React from 'react';
import { connect } from 'react-redux';

const ListPoster = ({ poster_path }) => {
    debugger

    return (
        <img className="all-review-show-poster"
            src={
                poster_path ?
                    "https://image.tmdb.org/t/p/w500/" + poster_path
                    : "https://image.tmdb.org/t/p/w500//8KPH2kKDEBGA6W2mdKjHqzYIv63.jpg"} />
    );
};

export default connect(null, null)(ListPoster);