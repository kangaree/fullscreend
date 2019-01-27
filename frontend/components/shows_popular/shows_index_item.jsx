import React from 'react';

function ShowsIndexItem({ show }) {
    return (
        <li className="show-li">
            {/* {show.name} */}
            <img src={"https://image.tmdb.org/t/p/w500/" + show.poster_path}/>
        </li>
    );
}

export default ShowsIndexItem;