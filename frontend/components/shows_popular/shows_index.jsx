import React from 'react';

import ShowsIndexItem from './shows_index_item';

function ShowsIndex({ shows }) {
    return (
        <>
            <div className="no-backdrop"></div>
            <ul className="shows-ul-SPECIAL">
                { shows.map(show => <ShowsIndexItem key={show.id} show={show} />) }
            </ul>
        </>
    );
}

export default ShowsIndex;