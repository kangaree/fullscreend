import React from 'react';

import ShowsIndexItem from './shows_index_item';

function ShowsIndex({ shows }) {
    return (
        <>
            <div className="blank-header"></div>
            <div className="show-index">
                <ul className="shows-ul-popular">
                    { (Object.values(shows)).map(show => <ShowsIndexItem key={show.id} show={show} />) }
                </ul>
            </div>
        </>
    );
}

export default ShowsIndex;