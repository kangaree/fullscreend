import React from 'react';
import { Link } from 'react-router-dom';

function ShowsIndexItem({ show }) {
    return (
        <li className="show-li">
            <Link to={"/shows/" + show.id} className="search-link">{show.name}</Link>
        </li>
    );
}

export default ShowsIndexItem;