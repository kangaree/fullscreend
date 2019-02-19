import React from 'react';

import ShowsIndexItem from './shows_index_item';

function ShowsIndex({ shows, removeSearchedShows, showIds }) {
    return (
        <ul className="shows-ul">
            {/* Use Math.random to get around shows that appear several times with different results */}
            {showIds ? showIds.map(showId => <ShowsIndexItem key={showId + Math.random()} show={shows[showId]} removeSearchedShows={removeSearchedShows} />) : null }
        </ul>
    );
}

export default ShowsIndex;
