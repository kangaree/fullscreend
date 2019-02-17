import React from 'react';
import { Link } from 'react-router-dom';

function ShowsIndexItem({ show }) {
    return (
        <li className="show-li">
            {/* {show.name} */}
            <Link to={"/shows/" + show.id} className="poster-link"><img src={
                show.poster_path ?
                "https://image.tmdb.org/t/p/w500" + show.poster_path
                    : window.testPoster} /></Link>
        </li>
    );
}

export default ShowsIndexItem;