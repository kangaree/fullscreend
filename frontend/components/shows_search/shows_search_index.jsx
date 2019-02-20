import React from 'react';
import ShowsIndex from './shows_index';
import ShowsIndexItem from './shows_index_item';
import { Link } from 'react-router-dom';

class ShowsSearchIndex extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.removeSearchedShows();
        this.props.removeSearchedIndexShows();
        this.props.fetchSearchIndexShows(this.props.match.params.searchTerm);
        window.scrollTo(0, 0);
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.searchTerm !== this.props.match.params.searchTerm) {
            this.props.removeSearchedIndexShows();
            this.props.fetchSearchIndexShows(this.props.match.params.searchTerm);
        }
    }

    render() {
        let { showIds, shows } = this.props;

        if (showIds.length === 0) {
            return (
                <div>
                    <div className="blank-header"></div>
                    <div className="all-review-index-background"></div>
                    <h1 className="all-review-index-body-container">No results.</h1>
                </div>
            )
        }

        return (
            <>
                <div className="blank-header"></div>
                <div className="all-review-index-background">
                    {showIds ? showIds.map(showId => 
                        <div className="all-review-index-body-container" key={showId} show={shows[showId]}>
                            <Link to={"/shows/" + showId} className="search-link">
                                <div className="all-review-index-show-body-title">
                                    {shows[showId].name + (shows[showId].first_air_date ? (" (" + shows[showId].first_air_date.slice(0, 4) + ") ") : " ")}
                                </div>
                                <img className="search-index-poster"
                                    src={
                                        shows[showId].poster_path ?
                                            "https://image.tmdb.org/t/p/w500/" + shows[showId].poster_path
                                            : window.testPoster} />
                                <p><i className="fas fa-users"></i> {Math.floor(shows[showId].vote_count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                {shows[showId].overview ? <p className="show-search-index-overview">{shows[showId].overview}</p> : null}
                            </Link>
                        </div>
                        ): 
                        null }
                </div>
            </>
        );
    }
}

export default ShowsSearchIndex;