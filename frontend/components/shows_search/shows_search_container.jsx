import { connect } from 'react-redux';
import ShowsSearch from './shows_search';
import { fetchSearchShows, removeSearchedShows } from '../../actions/show_actions';

const mapStateToProps = state => {
    // return { shows: Object.values(state.entities.search_shows) };

    return {
        showIds: state.ui.search_shows,
        shows: state.entities.shows,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSearchShows: searchTerm => dispatch(fetchSearchShows(searchTerm)),
        removeSearchedShows: () => dispatch(removeSearchedShows())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowsSearch);
