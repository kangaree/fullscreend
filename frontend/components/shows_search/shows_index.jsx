import React from 'react';

import ShowsIndexItem from './shows_index_item';

function ShowsIndex({ shows, removeSearchedShows, showIds }) {
    return (
        <ul className="shows-ul">
            {showIds ? showIds.map(showId => <ShowsIndexItem key={showId} show={shows[showId]} removeSearchedShows={removeSearchedShows} />) : null }
        </ul>
    );
}

export default ShowsIndex;
