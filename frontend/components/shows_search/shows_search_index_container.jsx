import { connect } from 'react-redux';
import ShowsSearchIndex from './shows_search_index';
import { fetchSearchIndexShows, removeSearchedShows, removeSearchedIndexShows } from '../../actions/show_actions';

const mapStateToProps = state => {
    return {
        showIds: state.ui.search_shows_index,
        shows: state.entities.shows,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSearchIndexShows: searchTerm => dispatch(fetchSearchIndexShows(searchTerm)),
        removeSearchedShows: () => dispatch(removeSearchedShows()),
        removeSearchedIndexShows: () => dispatch(removeSearchedIndexShows()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowsSearchIndex);