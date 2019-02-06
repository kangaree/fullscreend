import React from 'react';
import { Link } from 'react-router-dom';

function ShowsIndexItem({ show }) {
    return (
        <li className="show-li">
            {/* {show.name} */}
            <Link to={"/shows/" + show.id} className="poster-link"><img src={
                show.poster_path ?
                "https://image.tmdb.org/t/p/w500/" + show.poster_path
                    : "https://image.tmdb.org/t/p/w500//8KPH2kKDEBGA6W2mdKjHqzYIv63.jpg"} /></Link>
        </li>
    );
}

export default ShowsIndexItem;