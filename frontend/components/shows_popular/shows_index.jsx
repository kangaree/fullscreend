import React from 'react';

import ShowsIndexItem from './shows_index_item';

function ShowsIndex({ showIds, shows }) {
    return (
        <>
            <div className="blank-header"></div>
            <div className="show-index">
                <ul className="shows-ul-popular">
                    { showIds ? showIds.map(showId => <ShowsIndexItem key={showId} show={shows[showId]} />) : null }
                </ul>
            </div>
        </>
    );
}

export default ShowsIndex;