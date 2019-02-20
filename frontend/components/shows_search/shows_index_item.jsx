import React from 'react';
import { Link } from 'react-router-dom';

function ShowsIndexItem({ show, removeSearchedShows }) {
    return (
        <li className="show-li">
            <Link to={"/shows/" + show.id} className="search-link" onClick={removeSearchedShows}>{show.name + (show.first_air_date ? (" (" + show.first_air_date.slice(0, 4) + ") ") : " ")}</Link>
        </li>
    );
}

export default ShowsIndexItem;