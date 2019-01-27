import React from 'react';
import { Link } from 'react-router-dom';

function ShowsIndexItem({ show, removeSearchedShows }) {
    return (
        <li className="show-li">
            <Link to={"/shows/" + show.id} className="search-link" onClick={removeSearchedShows}>{show.name}</Link>
        </li>
    );
}

export default ShowsIndexItem;