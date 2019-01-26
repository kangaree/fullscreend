import { connect } from 'react-redux';
import ShowsSearch from './shows_search';
import { fetchSearchShows } from '../../actions/show_actions';

const mapStateToProps = state => {
    return { shows: state.shows };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSearchShows: searchTerm => dispatch(fetchSearchShows(searchTerm))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowsSearch);
