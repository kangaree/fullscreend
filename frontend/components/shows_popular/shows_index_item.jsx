import React from 'react';

function ShowsIndexItem({ show }) {
    return (
        <li className="show-li">
            {show.name}
        </li>
    );
}

export default ShowsIndexItem;