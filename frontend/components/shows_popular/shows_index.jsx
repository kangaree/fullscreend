import React from 'react';

import ShowsIndexItem from './shows_index_item';

function ShowsIndex({ shows }) {
    return (
        <ul className="shows-ul">
            { shows.map(show => <ShowsIndexItem key={show.id} show={show} />) }
        </ul>
    );
}

export default ShowsIndex;