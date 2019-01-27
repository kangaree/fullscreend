import React from 'react';

import ShowsIndexItem from './shows_index_item';

function ShowsIndex({ shows, removeSearchedShows }) {
    return (
        <ul className="shows-ul">
            { shows.map(show => <ShowsIndexItem key={show.id} show={show} removeSearchedShows={removeSearchedShows} />) }
        </ul>
    );
}

export default ShowsIndex;
