import React from 'react';

function ShowsIndexItem({ show }) {
    return (
        <li className="show-li">
            {show.name}
            <img src={show.poster_path ? "https://image.tmdb.org/t/p/w92" + show.poster_path : ""} alt="" width="80px"/>
        </li>
    );
}

export default ShowsIndexItem;