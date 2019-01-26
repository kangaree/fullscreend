import React from 'react';

import ShowsIndexItem from './shows_index_item';

function ShowsIndex({ shows }) {
    return (
        <ul>
            { shows.map(show => <ShowsIndexItem key={show.id} show={show} />) }
        </ul>
    );
}

export default ShowsIndex;
